#!/bin/bash

echo "================================"
echo "Task Manager Setup Script"
echo "================================"
echo ""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Check if Node.js is installed
if ! command -v node &> /dev/null
then
    echo "Node.js is not installed. Please install Node.js first."
    exit 1
fi

echo -e "${BLUE}Node.js version:${NC}"
node --version
echo ""

# Setup Backend
echo -e "${BLUE}Setting up Backend...${NC}"
cd backend || exit 1

if [ -f .env ]; then
    echo "Backend .env file already exists"
else
    echo "Creating .env from .env.example"
    cp .env.example .env
    echo -e "${GREEN}✓ .env created. Please update MONGODB_URI and JWT_SECRET${NC}"
fi

echo "Installing backend dependencies..."
npm install

echo -e "${GREEN}✓ Backend setup complete${NC}"
echo ""

# Setup Frontend
echo -e "${BLUE}Setting up Frontend...${NC}"
cd ../frontend || exit 1

if [ -f .env.local ]; then
    echo "Frontend .env.local file already exists"
else
    echo "Creating .env.local"
    echo "NEXT_PUBLIC_API_URL=http://localhost:5000" > .env.local
    echo -e "${GREEN}✓ .env.local created${NC}"
fi

echo "Installing frontend dependencies..."
npm install

echo -e "${GREEN}✓ Frontend setup complete${NC}"
echo ""

echo -e "${GREEN}================================"
echo "Setup Complete!"
echo "================================${NC}"
echo ""
echo -e "${BLUE}To start development:${NC}"
echo ""
echo "Terminal 1 (Backend):"
echo "  cd backend"
echo "  npm run dev"
echo ""
echo "Terminal 2 (Frontend):"
echo "  cd frontend"
echo "  npm run dev"
echo ""
echo "Frontend: http://localhost:3000"
echo "Backend:  http://localhost:5000"
echo ""
