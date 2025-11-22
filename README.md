🚀 Task Manager Web App

A scalable full-stack Task Management Application built using the MERN stack (MongoDB, Express.js, React, Node.js).
This project includes secure authentication, CRUD operations, and a clean & modern UI.

✨ Features
🔐 Authentication

Register & login with JWT-based authentication

Password hashing using bcrypt

Protected routes for dashboard access

🧑‍💻 User Profile

Profile image support

Display logged-in user's avatar, name & email

📝 Task Management (CRUD)

Create, read, update & delete tasks

Inline task editing

Mark tasks as complete/incomplete

🎯 UI/UX

Responsive, clean interface

Built using React + TailwindCSS

Smooth user experience

🗃 Backend

Node.js + Express.js REST API

MongoDB database connection

Error handling & validation middleware

🛠 Tech Stack
Layer	Technology
Frontend	React (Vite), React Router DOM, Axios, TailwindCSS
Backend	Node.js, Express.js, JWT, bcrypt
Database	MongoDB (Mongoose ORM)
Auth	JWT Tokens (LocalStorage)
📂 Project Structure
root/
 ├── backend/        # Node.js + Express API
 ├── frontend/       # Pure React UI (Vite)
 ├── README.md       

🔧 Installation & Setup

Clone the repository:

git clone https://github.com/your-username/your-repo.git

Backend Setup
cd backend
npm install
npm start   # or npm run dev if nodemon is enabled


Create a .env file inside /backend:

MONGO_URI=YOUR_MONGODB_CONNECTION_STRING
JWT_SECRET=YOUR_SECRET_KEY
PORT=5000


Ensure MongoDB is running.

Frontend Setup
cd frontend
npm install
npm run dev


Create .env in /frontend (optional, if proxy is not used):

VITE_API_URL=http://localhost:5000/api

🔐 API Endpoints (Quick Reference)
Method	Route	Description
POST	/api/auth/register	Create new user
POST	/api/auth/login	User login
GET	/api/tasks	Get all tasks
POST	/api/tasks	Create task
PUT	/api/tasks/:id	Update task
DELETE	/api/tasks/:id	Delete task
🚀 Future Improvements

Drag & drop task sorting

Profile editing & image upload

Dark/Light theme support

Deployment on cloud (Render / Netlify / Vercel)

🤝 Contribution

Pull requests are welcome. For major changes, open an issue first to discuss what you’d like to update.

📬 Contact

Developed by: Prince
Email: princekaushal357@gmail.com
