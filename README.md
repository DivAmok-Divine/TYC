# Tamale Youth Choir Website

A modern React + FastAPI website for the Tamale Youth Choir.

## Architecture

- **Frontend**: React with Vite (Port 7770)
- **Backend**: FastAPI (Port 8880)
- **Architecture**: Feature-based structure

## Project Structure

```
TYC-Website/
├── frontend/          # React application
│   ├── src/
│   │   ├── features/  # Feature-based components
│   │   │   ├── header/
│   │   │   ├── carousel/
│   │   │   ├── discover/
│   │   │   ├── offers/
│   │   │   ├── next-event/
│   │   │   └── footer/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── public/        # Static assets (images, videos)
├── backend/           # FastAPI application
│   ├── main.py
│   └── requirements.txt
└── images/            # Original images (to be copied to frontend/public)
```

## Getting Started

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

Frontend will be available at `http://localhost:7770`

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Create virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Run the server:
```bash
python main.py
```

Backend will be available at `http://localhost:8880`

## Features

- Feature-based architecture for better code organization
- Responsive design
- Modern React with hooks
- FastAPI backend ready for future API integration
- All original styling and colors preserved

## Development

The frontend uses Vite for fast development and hot module replacement.
The backend uses FastAPI with automatic API documentation at `/docs`.

