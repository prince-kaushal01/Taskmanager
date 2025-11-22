# Development Guide

## Getting Started

### Prerequisites
- Node.js v16+
- MongoDB (local or Atlas)
- Git

### Quick Start

1. **Clone and setup**
   \`\`\`bash
   bash SETUP.sh
   \`\`\`

2. **Start backend** (Terminal 1)
   \`\`\`bash
   cd backend
   npm run dev
   \`\`\`

3. **Start frontend** (Terminal 2)
   \`\`\`bash
   cd frontend
   npm run dev
   \`\`\`

4. **Open browser**
   \`\`\`
   http://localhost:3000
   \`\`\`

## Project Structure

\`\`\`
task-manager/
├── backend/                 # Express server
│   ├── models/             # MongoDB schemas
│   ├── routes/             # API endpoints
│   ├── middleware/         # Express middleware
│   ├── config/             # Configuration
│   └── server.js           # Entry point
│
└── frontend/               # Next.js app
    ├── app/                # App router
    ├── components/         # React components
    ├── context/            # Context API
    └── lib/                # Utilities
\`\`\`

## Common Tasks

### Add a New Task Field

1. **Update MongoDB schema** (`backend/models/Task.js`)
   \`\`\`javascript
   newField: {
     type: String,
     required: false
   }
   \`\`\`

2. **Update Task Form** (`components/task-form.tsx`)
   - Add input field
   - Include in form submission

3. **Update Task Display** (`components/task-card.tsx`)
   - Display the new field

### Change Theme Colors

Edit `app/globals.css`:
\`\`\`css
--primary: oklch(0.6 0.2 260);      /* Purple */
--background: oklch(0.12 0 0);      /* Dark background */
--card: oklch(0.18 0 0);            /* Card background */
\`\`\`

### Add Authentication Provider

Update `backend/routes/auth.js` to add OAuth (e.g., Google, GitHub).

### Add Real-time Updates

- Install Socket.io: `npm install socket.io`
- Update `server.js` with Socket.io setup
- Update components to use WebSocket

## Testing

### Manual Testing

1. Register new account
2. Create tasks with different priorities
3. Update tasks
4. Mark as completed
5. Delete tasks
6. Logout and login

### API Testing

Use Postman or cURL:

\`\`\`bash
# Register
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"John","email":"john@example.com","password":"123456"}'

# Login
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"john@example.com","password":"123456"}'

# Get tasks (use token from login)
curl -X GET http://localhost:5000/api/tasks \
  -H "Authorization: Bearer YOUR_TOKEN"
\`\`\`

## Debugging

### Enable Detailed Logging

1. **Backend** - Add debug logs in routes:
   \`\`\`javascript
   console.log('Creating task:', req.body);
   \`\`\`

2. **Frontend** - Use browser DevTools
   - Check Network tab for API calls
   - Check Console for errors
   - Check Application > LocalStorage for token

### Common Issues

**CORS Error**
- Check `CLIENT_URL` in backend .env
- Restart backend server

**Auth Token Invalid**
- Clear localStorage
- Re-login
- Check JWT_SECRET matches

**MongoDB Connection Failed**
- Check MONGODB_URI
- Verify MongoDB is running
- Check network access

## Performance Tips

- Use React DevTools Profiler
- Check network waterfall in DevTools
- Optimize images
- Use pagination for large task lists
- Add database indexes

## Code Style

- Use TypeScript for type safety
- Follow ESLint rules
- Use meaningful variable names
- Add comments for complex logic

## Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Express Docs](https://expressjs.com/)
- [MongoDB Docs](https://docs.mongodb.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
