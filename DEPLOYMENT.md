# Deployment Guide

This guide covers deploying the Task Manager application to production.

## Prerequisites

- MongoDB Atlas account (cloud database)
- Vercel or Netlify account (for frontend)
- Railway, Render, or Heroku (for backend)
- GitHub account for pushing code

## Backend Deployment (Node.js + Express)

### Option 1: Railway.app (Recommended)

1. **Sign up** at [railway.app](https://railway.app)

2. **Push code to GitHub**
   \`\`\`bash
   git init
   git add .
   git commit -m "Initial commit"
   git push -u origin main
   \`\`\`

3. **Create new project in Railway**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository
   - Select the `backend` folder

4. **Add MongoDB Plugin**
   - In Railway dashboard, click "Add Services"
   - Select "MongoDB"
   - This generates a DATABASE_URL

5. **Set Environment Variables**
   - Go to Variables tab
   - Add these variables:
     \`\`\`
     MONGODB_URI: [copied from MongoDB plugin]
     JWT_SECRET: [generate secure random string]
     JWT_EXPIRE: 7d
     PORT: 5000
     CLIENT_URL: [your frontend URL]
     NODE_ENV: production
     \`\`\`

6. **Deploy**
   - Railway auto-deploys on push
   - Copy deployment URL (e.g., `https://your-app.railway.app`)

### Option 2: Heroku

1. **Install Heroku CLI**
   \`\`\`bash
   npm install -g heroku
   heroku login
   \`\`\`

2. **Create Heroku app**
   \`\`\`bash
   cd backend
   heroku create your-app-name
   \`\`\`

3. **Add MongoDB Atlas**
   - Sign up at [mongodb.com/cloud/atlas](https://mongodb.com/cloud/atlas)
   - Create a cluster
   - Get connection string

4. **Set environment variables**
   \`\`\`bash
   heroku config:set MONGODB_URI=mongodb+srv://...
   heroku config:set JWT_SECRET=your_secret
   heroku config:set CLIENT_URL=https://your-frontend.vercel.app
   heroku config:set NODE_ENV=production
   \`\`\`

5. **Deploy**
   \`\`\`bash
   git push heroku main
   \`\`\`

### Option 3: Render

1. Go to [render.com](https://render.com)
2. Click "New +"
3. Select "Web Service"
4. Connect GitHub repository
5. Configure build command: `npm install`
6. Configure start command: `npm start`
7. Add environment variables
8. Deploy

## Frontend Deployment (React + Vite)

### Option 1: Vercel (Recommended)

1. **Sign up** at [vercel.com](https://vercel.com)

2. **Push code to GitHub**
   \`\`\`bash
   git init
   git add .
   git commit -m "Initial commit"
   git push -u origin main
   \`\`\`

3. **Deploy from Vercel Dashboard**
   - Click "Add New" > "Project"
   - Select your GitHub repository
   - Select the `frontend` folder
   - Vercel auto-detects Vite

4. **Set Environment Variables**
   - Go to Settings > Environment Variables
   - Add `VITE_API_URL` with your backend URL:
     \`\`\`
     VITE_API_URL=https://your-backend.railway.app/api
     \`\`\`

5. **Deploy**
   - Click "Deploy"
   - Vercel auto-deploys on push

### Option 2: Netlify

1. **Build the project locally**
   \`\`\`bash
   cd frontend
   npm run build
   \`\`\`

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site"
   - Select GitHub repo and `frontend` folder
   - Build command: `npm run build`
   - Publish directory: `dist`

3. **Set Environment Variables**
   - Site settings > Build & deploy > Environment
   - Add `VITE_API_URL` with backend URL

## MongoDB Atlas Setup

1. **Create Account** at [mongodb.com/cloud/atlas](https://mongodb.com/cloud/atlas)

2. **Create Cluster**
   - Click "Build a Cluster"
   - Choose free tier
   - Select region close to you

3. **Create Database User**
   - Go to "Database Access"
   - Click "Add New Database User"
   - Set username and password
   - Choose "Read and write to any database"

4. **Get Connection String**
   - Click "Connect"
   - Select "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your user password
   - Replace `<database_name>` with `task-manager`

5. **Update Backend**
   \`\`\`env
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/task-manager
   \`\`\`

## Updating Environment Variables After Deployment

### Railway
1. Go to project variables
2. Update values
3. Auto-redeployed

### Vercel
1. Go to Settings > Environment Variables
2. Update values
3. Redeploy or auto-redeploy on next push

### Netlify
1. Go to Site settings > Build & deploy > Environment
2. Update values
3. Trigger new deploy

### Heroku
\`\`\`bash
heroku config:set KEY=value
heroku restart
\`\`\`

## Custom Domain

### Vercel
1. Settings > Domains
2. Add custom domain
3. Follow DNS instructions

### Netlify
1. Domain settings > Custom domains
2. Add domain
3. Update DNS records

### Railway
1. Settings > Domains
2. Add domain
3. Update DNS records

## Monitoring & Logs

### Railway
- View logs in "Deployments" tab
- Real-time logs streaming

### Vercel
- Analytics dashboard
- Error tracking
- Performance metrics

### Check Backend Health
\`\`\`bash
curl https://your-backend.railway.app/api/health
\`\`\`

Should return: `{"message":"Server is running"}`

## Troubleshooting

### Backend not connecting to MongoDB
- Check MONGODB_URI is correct
- Verify IP whitelist in MongoDB Atlas (add 0.0.0.0/0 for all IPs)
- Check database user credentials

### Frontend can't reach backend
- Verify VITE_API_URL is set correctly
- Check CORS settings in backend
- Ensure backend is running and accessible

### Authentication not working
- JWT_SECRET must match between deployments
- Check token in browser localStorage
- Verify Authorization headers are being sent

## Security Checklist

- [ ] JWT_SECRET is strong and unique (32+ characters)
- [ ] MongoDB credentials are secure
- [ ] Environment variables are not in code
- [ ] CORS is configured correctly for frontend domain
- [ ] SSL/TLS is enabled (automatic on Vercel/Railway)
- [ ] Database backups are enabled
- [ ] API rate limiting is configured
- [ ] Sensitive data is not logged
- [ ] Password requirements enforced

## Performance Optimization

### Frontend
- Enable caching in Vercel
- Use image optimization
- Enable Gzip compression
- Minimize bundle size

### Backend
- Add database indexing on frequently queried fields
- Implement API response caching
- Use connection pooling for MongoDB
- Limit query results with pagination

## Next Steps

1. Set up error tracking (Sentry)
2. Configure automated backups
3. Set up CI/CD pipeline for automated testing
4. Monitor costs on hosting platforms
5. Plan for scaling as users grow
