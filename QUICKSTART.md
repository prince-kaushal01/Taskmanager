# Quick Start Guide - Task Manager

Get the Task Manager application running in 5 minutes!

## Prerequisites Check

\`\`\`bash
node --version  # Should be v16 or higher
npm --version   # Should be v7 or higher
\`\`\`

## Step 1: Clone and Setup

\`\`\`bash
# Navigate to your projects directory
cd ~/projects

# Clone the repository (or download the ZIP)
git clone https://github.com/yourusername/task-manager.git
cd task-manager
\`\`\`

## Step 2: Configure Backend

\`\`\`bash
cd backend
cp .env.example .env
# Open .env in your text editor
\`\`\`

Update these values:

\`\`\`env
# Keep this for local development
MONGODB_URI=mongodb://localhost:27017/task-manager

# Generate a random secret (use: node -e "console.log(require('crypto').randomBytes(32).toString('hex'))")
JWT_SECRET=your_random_secret_here

# Keep as is
JWT_EXPIRE=7d
PORT=5000
CLIENT_URL=http://localhost:5173
\`\`\`

### For Cloud MongoDB (MongoDB Atlas)

1. Go to [mongodb.com/cloud/atlas](https://mongodb.com/cloud/atlas)
2. Create free account and cluster
3. Get connection string
4. Replace MONGODB_URI with your connection string:
   \`\`\`env
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/task-manager
   \`\`\`

## Step 3: Install Backend Dependencies

\`\`\`bash
cd backend
npm install
\`\`\`

## Step 4: Start Backend Server

\`\`\`bash
npm run dev
\`\`\`

You should see:
\`\`\`
MongoDB Connected: localhost
Server running on port 5000
\`\`\`

## Step 5: Configure Frontend

\`\`\`bash
cd ../frontend
cp .env.example .env.local
# The file should already have the correct value
\`\`\`

Verify `.env.local` contains:
\`\`\`env
VITE_API_URL=http://localhost:5000/api
\`\`\`

## Step 6: Install Frontend Dependencies

\`\`\`bash
npm install
\`\`\`

## Step 7: Start Frontend Server (New Terminal)

\`\`\`bash
npm run dev
\`\`\`

You should see:
\`\`\`
  VITE v5.0.0  ready in XXX ms

  ➜  Local:   http://localhost:5173/
\`\`\`

## Step 8: Open Application

Open your browser and go to:
\`\`\`
http://localhost:5173
\`\`\`

## First Time Using the App

1. **Register Account**
   - Click "Sign up"
   - Enter name, email, password
   - Click "Sign Up"

2. **Create First Task**
   - Click in the "Task Title" field on the left
   - Enter task title
   - (Optional) Add description, set priority
   - Click "Create Task"

3. **Manage Tasks**
   - Click the circle icon to mark tasks complete
   - Click the trash icon to delete tasks
   - Use filter buttons (All, Pending, Completed)

## Common Commands

### Backend
\`\`\`bash
cd backend
npm run dev      # Start development server
npm start        # Start production server
npm install      # Install dependencies
\`\`\`

### Frontend
\`\`\`bash
cd frontend
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm install      # Install dependencies
\`\`\`

## Troubleshooting

### Port Already in Use
\`\`\`bash
# Find process using port 5000
lsof -i :5000
# Kill the process
kill -9 <PID>

# Or use different port - edit backend/.env: PORT=5001
\`\`\`

### MongoDB Connection Error
\`\`\`bash
# Make sure MongoDB is running
# For local MongoDB:
mongod

# For MongoDB Atlas:
# Check connection string in .env
# Verify network access is enabled
\`\`\`

### Frontend Can't Connect to Backend
\`\`\`bash
# Check backend is running on port 5000
curl http://localhost:5000/api/health

# Should see: {"message":"Server is running"}
\`\`\`

### Clear Browser Cache and Retry
- Open DevTools (F12)
- Application > Local Storage
- Delete all entries
- Refresh page and login again

## Environment Files Reference

### Backend (.env)
\`\`\`env
MONGODB_URI=mongodb://localhost:27017/task-manager
JWT_SECRET=your_secret_key_minimum_32_chars
JWT_EXPIRE=7d
PORT=5000
CLIENT_URL=http://localhost:5173
NODE_ENV=development
\`\`\`

### Frontend (.env.local)
\`\`\`env
VITE_API_URL=http://localhost:5000/api
\`\`\`

## API Endpoints

### Public
- `POST /api/auth/register` - Create account
- `POST /api/auth/login` - Login

### Protected (Requires Token)
- `GET /api/tasks` - Get all tasks
- `GET /api/tasks/:id` - Get single task
- `POST /api/tasks` - Create task
- `PUT /api/tasks/:id` - Update task
- `DELETE /api/tasks/:id` - Delete task

## Test Account

After setup, create a test account:
- Email: `test@example.com`
- Password: `password123`

## Next Steps

1. **Customize Theme** - Edit `frontend/tailwind.config.js`
2. **Add Features** - See `SETUP_INSTRUCTIONS.md`
3. **Deploy** - See `DEPLOYMENT.md`

## Important Security Note

⚠️ **Never commit `.env` files to GitHub!**

The `.env` files contain sensitive information. They're in `.gitignore` by default.

Before pushing to GitHub:
\`\`\`bash
git status  # Make sure .env files are NOT listed
\`\`\`

## Performance Tips

- Keep backend and frontend running together
- Use same machine for development
- Monitor terminal logs for errors
- Use browser DevTools for frontend debugging

---

For more information, see `README.md` and `SETUP_INSTRUCTIONS.md`
