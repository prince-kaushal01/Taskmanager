# Installation Checklist

Use this checklist to verify your setup is complete and correct.

## Prerequisites
- [ ] Node.js v16+ installed (`node --version`)
- [ ] npm v7+ installed (`npm --version`)
- [ ] Git installed (`git --version`)
- [ ] Text editor/IDE ready (VS Code recommended)
- [ ] Terminal/Command line access

## Backend Setup

### Files Created
- [ ] `backend/server.js` - Express server
- [ ] `backend/models/User.js` - User model
- [ ] `backend/models/Task.js` - Task model
- [ ] `backend/routes/auth.js` - Auth routes
- [ ] `backend/routes/tasks.js` - Task routes
- [ ] `backend/middleware/auth.js` - Auth middleware
- [ ] `backend/config/database.js` - DB config
- [ ] `backend/package.json` - Dependencies
- [ ] `backend/.env.example` - Example env

### Environment Setup
- [ ] Created `backend/.env`
- [ ] Set `MONGODB_URI` (local or Atlas)
- [ ] Set `JWT_SECRET` (random string)
- [ ] Set `JWT_EXPIRE=7d`
- [ ] Set `PORT=5000`
- [ ] Set `CLIENT_URL=http://localhost:3000`

### Dependencies
- [ ] Ran `npm install` in backend
- [ ] All packages installed successfully
- [ ] No security vulnerabilities
- [ ] `node_modules/` created

### Testing Backend
- [ ] Backend starts with `npm run dev`
- [ ] MongoDB connected message appears
- [ ] Server running on port 5000
- [ ] No error messages in console
- [ ] Health check: `curl http://localhost:5000/api/health`

## Frontend Setup

### Files Created
- [ ] `app/page.tsx` - Home page
- [ ] `app/login/page.tsx` - Login page
- [ ] `app/register/page.tsx` - Register page
- [ ] `app/dashboard/page.tsx` - Dashboard
- [ ] `app/layout.tsx` - Root layout
- [ ] `app/globals.css` - Theme colors
- [ ] `components/login-form.tsx` - Login form
- [ ] `components/register-form.tsx` - Register form
- [ ] `components/dashboard-layout.tsx` - Dashboard
- [ ] `components/task-form.tsx` - Task form
- [ ] `components/task-list.tsx` - Task list
- [ ] `components/task-card.tsx` - Task card
- [ ] `context/auth-context.tsx` - Auth context
- [ ] `lib/api.ts` - API utilities
- [ ] `hooks/use-tasks.ts` - Tasks hook
- [ ] `next.config.mjs` - Next config

### Environment Setup
- [ ] Created `frontend/.env.local`
- [ ] Set `NEXT_PUBLIC_API_URL=http://localhost:5000`
- [ ] File is in `.gitignore`

### Dependencies
- [ ] Ran `npm install` in frontend
- [ ] All packages installed successfully
- [ ] No security vulnerabilities
- [ ] `node_modules/` created

### Testing Frontend
- [ ] Frontend starts with `npm run dev`
- [ ] Available on `http://localhost:3000`
- [ ] No error messages in console
- [ ] Can access home page

## Integration Testing

### Authentication Flow
- [ ] Click "Create Account"
- [ ] Register with new email
- [ ] Account created successfully
- [ ] Redirected to dashboard
- [ ] Logged out and clicked "Sign In"
- [ ] Login with credentials
- [ ] Redirected to dashboard
- [ ] User name displayed in header

### Task Operations (CRUD)
- [ ] Click "New Task"
- [ ] Create task with title
- [ ] Task appears in list
- [ ] Update task (mark complete)
- [ ] Task status updates
- [ ] Delete task
- [ ] Task removed from list
- [ ] Empty state message shown

### User Experience
- [ ] Theme is dark
- [ ] UI is responsive on mobile
- [ ] Buttons are clickable
- [ ] Forms validate input
- [ ] Error messages display
- [ ] Loading states visible
- [ ] Logout works

## Documentation

### Setup Documentation
- [ ] `QUICKSTART.md` - Quick start guide
- [ ] `README.md` - Project overview
- [ ] `DEVELOPMENT.md` - Development guide
- [ ] `DEPLOYMENT.md` - Deployment guide
- [ ] `CONTRIBUTING.md` - Contribution guide
- [ ] `PROJECT_SUMMARY.md` - Summary
- [ ] This file - Checklist

### Configuration Files
- [ ] `.gitignore` - Git ignore file
- [ ] `SETUP.sh` - Setup script
- [ ] `.env.example` files created
- [ ] `tsconfig.json` configured
- [ ] `next.config.mjs` configured
- [ ] `package.json` files updated

## Git Setup

- [ ] Git repository initialized
- [ ] `.gitignore` configured
- [ ] `.env` files NOT tracked
- [ ] Ready for GitHub upload

## Deployment Preparation

- [ ] Backend can run in production mode
- [ ] Frontend can build for production
- [ ] No hardcoded URLs
- [ ] All secrets in env variables
- [ ] CORS properly configured
- [ ] Error handling in place

## Browser Compatibility

- [ ] Chrome - Works
- [ ] Firefox - Works
- [ ] Safari - Works
- [ ] Edge - Works
- [ ] Mobile browsers - Responsive

## Performance

- [ ] Page load time acceptable
- [ ] No console errors
- [ ] No console warnings
- [ ] Network requests reasonable
- [ ] Database queries optimized

## Security

- [ ] No passwords in code
- [ ] No API keys in code
- [ ] JWT properly implemented
- [ ] CORS configured
- [ ] Password hashing enabled
- [ ] Environment variables protected

## Final Verification

### Restart Test
- [ ] Stop backend and frontend
- [ ] Restart both
- [ ] Everything works
- [ ] No hardcoded paths

### Fresh Login Test
- [ ] Clear localStorage
- [ ] Refresh browser
- [ ] Redirected to login
- [ ] Can login fresh

### Fresh Browser Test
- [ ] Open in incognito/private window
- [ ] Can register new account
- [ ] Can login
- [ ] Can use dashboard

## Ready for Deployment

- [ ] All checks passed
- [ ] Code committed to Git
- [ ] Documentation complete
- [ ] Ready to deploy

---

## Troubleshooting Checklist

If something isn't working:

### Backend Issues
- [ ] MongoDB is running
- [ ] `.env` file exists
- [ ] `MONGODB_URI` is correct
- [ ] `JWT_SECRET` is set
- [ ] PORT 5000 is available
- [ ] `node_modules` is installed
- [ ] No firewall blocking

### Frontend Issues
- [ ] `.env.local` exists
- [ ] `NEXT_PUBLIC_API_URL` is set
- [ ] Backend is running
- [ ] PORT 3000 is available
- [ ] `node_modules` is installed
- [ ] Clear cache: `rm -rf .next`

### Connection Issues
- [ ] Backend and frontend running
- [ ] DevTools network tab shows requests
- [ ] Check CORS error messages
- [ ] Verify API URL matches
- [ ] Check backend .env CLIENT_URL

### Login Issues
- [ ] Clear browser localStorage
- [ ] Check token in DevTools
- [ ] Verify JWT_SECRET in backend
- [ ] Check MongoDB has user data
- [ ] Verify password hashing works

---

✅ **All checks completed? Ready to go!**
Your Task Manager is ready for development and deployment.
