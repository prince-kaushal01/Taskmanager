# Task Manager - Full Stack Application

A modern, production-ready task management application built with React + Vite (frontend) and Node.js + Express (backend) with MongoDB.

## Features

- User authentication (signup/login) with JWT
- Create, read, update, and delete tasks
- Mark tasks as completed
- Organize tasks by priority (low, medium, high)
- Task statistics dashboard
- Modern dark theme UI
- Responsive design (mobile and desktop)
- Real-time task updates
- Secure password hashing

## Project Structure

\`\`\`
task-manager/
├── backend/                    # Node.js + Express backend
│   ├── models/                # MongoDB schemas
│   │   ├── User.js           # User schema
│   │   └── Task.js           # Task schema
│   ├── routes/                # API routes
│   │   ├── auth.js           # Authentication endpoints
│   │   └── tasks.js          # Task CRUD endpoints
│   ├── middleware/            # Express middleware
│   │   └── auth.js           # JWT authentication
│   ├── config/                # Configuration
│   │   └── database.js       # MongoDB connection
│   ├── server.js             # Express server entry point
│   ├── package.json
│   └── .env.example          # Environment variables template
│
└── frontend/                  # React + Vite frontend
    ├── src/
    │   ├── pages/            # Page components
    │   │   ├── Login.jsx
    │   │   ├── Register.jsx
    │   │   └── Dashboard.jsx
    │   ├── components/       # Reusable components
    │   │   ├── LoginForm.jsx
    │   │   ├── RegisterForm.jsx
    │   │   ├── Navigation.jsx
    │   │   ├── TaskForm.jsx
    │   │   ├── TaskList.jsx
    │   │   ├── TaskCard.jsx
    │   │   └── TaskStats.jsx
    │   ├── hooks/            # Custom hooks
    │   │   └── useAuth.js    # Authentication hook
    │   ├── services/         # API services
    │   │   └── api.js        # Axios API client
    │   ├── context/          # React Context
    │   │   └── AuthContext.jsx
    │   ├── App.jsx           # Main app component
    │   ├── main.jsx          # Entry point
    │   └── index.css         # Global styles
    ├── vite.config.js
    ├── tailwind.config.js
    ├── postcss.config.js
    ├── package.json
    ├── tsconfig.json
    └── .env.example
\`\`\`

## Tech Stack

- **Frontend**: React 18, Vite, TypeScript, Tailwind CSS, Axios
- **Backend**: Node.js, Express.js, MongoDB, JWT
- **Authentication**: JSON Web Tokens (JWT)
- **Database**: MongoDB
- **Security**: bcryptjs for password hashing

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Quick Start (5 minutes)

See [QUICKSTART.md](./QUICKSTART.md) for a step-by-step guide.

### Detailed Setup

See [SETUP_INSTRUCTIONS.md](./SETUP_INSTRUCTIONS.md) for detailed instructions.

## Running Locally

### Terminal 1 - Start Backend

\`\`\`bash
cd backend
npm install
cp .env.example .env
# Edit .env with your MongoDB URI
npm run dev
\`\`\`

Backend runs on `http://localhost:5000`

### Terminal 2 - Start Frontend

\`\`\`bash
cd frontend
npm install
npm run dev
\`\`\`

Frontend runs on `http://localhost:5173`

### Open Application

Open your browser to `http://localhost:5173`

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user

### Tasks

All task endpoints require JWT authentication (Bearer token)

- `GET /api/tasks` - Get all tasks for authenticated user
- `GET /api/tasks/:id` - Get a specific task
- `POST /api/tasks` - Create a new task
- `PUT /api/tasks/:id` - Update a task
- `DELETE /api/tasks/:id` - Delete a task

## Usage

1. **Register**: Create a new account on the login page
2. **Login**: Sign in with your credentials
3. **Create Tasks**: Click "Create Task" and fill in task details
4. **Manage Tasks**: 
   - Check off completed tasks with the circle icon
   - Filter tasks (All, Pending, Completed)
   - Delete tasks with the trash icon
5. **View Statistics**: See task counts on the dashboard
6. **Logout**: Click the logout button in the navigation bar

## Authentication Flow

1. User registers or logs in
2. Backend validates credentials and returns JWT token
3. Frontend stores token in localStorage
4. Token is sent with every API request in Authorization header
5. Backend verifies token before processing requests

## Security Features

- Password hashing with bcryptjs
- JWT-based authentication with expiration
- Protected API routes with middleware
- User-specific data isolation
- CORS configuration
- Secure token storage

## Customization

### Adding New Task Fields

1. Update `backend/models/Task.js` schema
2. Update `frontend/src/components/TaskForm.jsx`
3. Update `frontend/src/components/TaskCard.jsx`

### Changing Theme Colors

Edit the colors in `frontend/tailwind.config.js`:

\`\`\`javascript
colors: {
  background: '#0f172a',
  foreground: '#f1f5f9',
  primary: '#0ea5e9',
  // ... update other colors
}
\`\`\`

### Adding New Features

- Create new backend routes in `backend/routes/`
- Add corresponding React components in `frontend/src/components/`
- Update Context API in `frontend/src/context/` if needed

## Troubleshooting

### Connection Issues

- Ensure MongoDB is running or connected to Atlas
- Check that API URL is correct in frontend `.env.local`
- Verify backend and frontend are running on correct ports (5000, 5173)

### Authentication Errors

- Clear browser localStorage and re-login
- Check JWT_SECRET is consistent
- Verify token is being sent in Authorization header

### CORS Errors

- Ensure CLIENT_URL in backend .env matches frontend URL
- Check CORS configuration in `backend/server.js`

## Deployment

### Backend Deployment

Deploy to Heroku, Railway, Render, or DigitalOcean:
- Set environment variables on platform
- Use MongoDB Atlas for cloud database
- Update CLIENT_URL to frontend URL

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

### Frontend Deployment

Deploy to Vercel, Netlify, or other static hosts:
- Build with `npm run build`
- Set `VITE_API_URL` environment variable
- Point to deployed backend API URL

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

## License

This project is open source and available under the MIT License.

## Support

For issues or questions, please create an issue in the repository or refer to the documentation files.

## Documentation

- [QUICKSTART.md](./QUICKSTART.md) - Quick start guide
- [SETUP_INSTRUCTIONS.md](./SETUP_INSTRUCTIONS.md) - Detailed setup
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Production deployment
