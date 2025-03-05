
## 🚀 Overview  
The **Provably Fair Dice Game** is a blockchain-inspired betting game where users can place bets and roll a virtual dice (1-6). The fairness of each roll is verified using **SHA-256 hashing**, ensuring transparency.  

✅ **Fully Responsive UI**  
✅ **Provably Fair System** (SHA-256 hashing)  
✅ **Balance Management**  
✅ **Frontend: React.js** | **Backend: Node.js & Express**  
✅ **REST API for Dice Rolls**  



## 🎮 How It Works?  
1️⃣ The user enters a **bet amount** and clicks **"Roll Dice"**.  
2️⃣ The server generates a **random number (1-6)** and its **SHA-256 hash**.  
3️⃣ If the dice roll is **4 or higher**, the user **wins**; otherwise, they **lose**.  
4️⃣ The result and hash are displayed, ensuring fairness.  


## 🛠️ Tech Stack  

### **Frontend (React.js)**
- React (Functional Components & Hooks)  
- Axios for API Requests  
- CSS for Styling  

### **Backend (Node.js & Express)**
- Express.js (REST API)  
- SHA-256 Hashing for Fairness  
- CORS for Cross-Origin Requests  



## ⚙️ Setup Instructions  

### 1️⃣ Clone the Repository  

git clone https://github.com/yourusername/provably-fair-dice-game.git
cd provably-fair-dice-game


2️⃣ Frontend Setup (React.js)

cd frontend
npm install
npm start

3️⃣ Backend Setup (Node.js & Express)

cd backend
npm install
node server.js

🚀 Deployment

🔹 Frontend Deployment (Netlify)
Run Build Command

npm run build
Upload build/ folder to Netlify
Get Live Link & Update README

🔄 API Endpoints
🎲 Roll Dice
Endpoint: POST /roll-dice

Request Body:

{
  "betAmount": 100
}

Response:
{
  "roll": 5,
  "hash": "c2543fff3bfa6f144c2f06a7de6cd10c0b650cae87f67905aebbe50f3989b8c1",
  "balance": 1100
}

💰 Get Balance

Endpoint: GET /balance
Response:

{
  "balance": 1000
}



