# Tamale Youth Choir Backend API

FastAPI backend for the Tamale Youth Choir website.

## Setup

1. Create a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Run the server:
```bash
python main.py
```

Or using uvicorn directly:
```bash
uvicorn main:app --reload --port 8880
```

The API will be available at `http://localhost:8880`

## API Documentation

Once the server is running, visit:
- Swagger UI: `http://localhost:8880/docs`
- ReDoc: `http://localhost:8880/redoc`

