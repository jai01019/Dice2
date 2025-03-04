const express = require('express');
const cors = require('cors');
const crypto = require('crypto');

const app = express();
app.use(express.json());
app.use(cors());

let userBalance = 1000;

app.post('/roll-dice', (req, res) => {
    const { betAmount } = req.body;
    if (betAmount > userBalance || betAmount <= 0) {
        return res.status(400).json({ message: 'Invalid Bet Amount' });
    }

    // Generate a provably fair dice roll (1-6)
    const randomRoll = Math.floor(Math.random() * 6) + 1;
    const hash = crypto.createHash('sha256').update(randomRoll.toString()).digest('hex');

    // Update balance based on dice result
    if (randomRoll >= 4) {
        userBalance += betAmount;  // Win: +betAmount
    } else {
        userBalance -= betAmount;  // Lose: -betAmount
    }

    res.json({ roll: randomRoll, hash, balance: userBalance });
});

// Get user balance
app.get('/balance', (req, res) => {
    res.json({ balance: userBalance });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
