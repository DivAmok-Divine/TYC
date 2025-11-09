#!/bin/bash

# Start script for Tamale Youth Choir Website
# This script starts both frontend and backend servers

echo "Starting Tamale Youth Choir Website..."

# Start backend in background
echo "Starting FastAPI backend on port 8880..."
cd backend
python -m venv venv 2>/dev/null || true
source venv/bin/activate 2>/dev/null || source venv/Scripts/activate 2>/dev/null || true
pip install -r requirements.txt -q 2>/dev/null || true
python main.py &
BACKEND_PID=$!
cd ..

# Wait a moment for backend to start
sleep 2

# Start frontend
echo "Starting React frontend on port 7770..."
cd frontend
npm install 2>/dev/null || true
npm run dev &
FRONTEND_PID=$!
cd ..

echo ""
echo "=========================================="
echo "Servers are starting..."
echo "Frontend: http://localhost:7770"
echo "Backend:  http://localhost:8880"
echo "API Docs: http://localhost:8880/docs"
echo "=========================================="
echo ""
echo "Press Ctrl+C to stop all servers"

# Wait for user interrupt
trap "kill $BACKEND_PID $FRONTEND_PID 2>/dev/null; exit" INT TERM
wait

