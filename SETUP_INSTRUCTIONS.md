# Setup Instructions

## Complete Setup Guide

### What You Need

1. **Node.js** - Download from https://nodejs.org (LTS version recommended)
2. **MongoDB** - Either:
   - Local: https://www.mongodb.com/try/download/community
   - Cloud: https://www.mongodb.com/cloud/atlas (free tier available)
3. **Text Editor** - VS Code, WebStorm, or any editor
4. **Terminal** - Command prompt or shell

### Step-by-Step Setup

#### Part 1: Backend Setup

1. Navigate to the backend folder:
   \`\`\`bash
   cd backend
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Create a `.env` file with your configuration:
   \`\`\`
   MONGODB_URI=mongodb://localhost:27017/task-manager
   JWT_SECRET=dev-secret-key-change-in-production
   JWT_EXPIRE=7d
   PORT=5000
   CLIENT_URL=http://localhost:5173
   NODE_ENV=development
   \`\`\`

4. Start the backend server:
   \`\`\`bash
   npm run dev
   \`\`\`

   You should see:
   \`\`\`
   Server running on port 5000
   MongoDB Connected: localhost
   \`\`\`

#### Part 2: Frontend Setup

1. In a new terminal, navigate to the frontend folder:
   \`\`\`bash
   cd frontend
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Create a `.env.local` file:
   \`\`\`
   VITE_API_URL=http://localhost:5000/api
   \`\`\`

4. Start the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

   You should see:
   \`\`\`
   VITE v5.0.0  ready in XXX ms

   ➜  Local:   http://localhost:5173/
   \`\`\`

5. Open `http://localhost:5173` in your browser

### MongoDB Setup

**Option 1: Local MongoDB**
\`\`\`bash
# macOS with Homebrew
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community

# Windows
# Download from mongodb.com and follow installer
# MongoDB will start automatically

# Linux
# Follow instructions on mongodb.com
\`\`\`

**Option 2: MongoDB Atlas (Cloud)**
1. Go to https://www.mongodb.com/cloud/atlas
2. Create a free account
3. Create a cluster
4. Get your connection string
5. Update `MONGODB_URI` in backend `.env`

### Verification Checklist

- [ ] Backend server running on port 5000
- [ ] MongoDB connected and working
- [ ] Frontend running on port 5173
- [ ] Can access application in browser
- [ ] Can register a new account
- [ ] Can create a task
- [ ] Can see tasks in the dashboard
