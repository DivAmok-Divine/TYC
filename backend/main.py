from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Tamale Youth Choir API", version="1.0.0")

# CORS middleware to allow frontend to communicate with backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:7770"],  # Frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Tamale Youth Choir API", "status": "running"}

@app.get("/health")
async def health_check():
    return {"status": "healthy"}

# Placeholder endpoints for future use
@app.get("/api/events")
async def get_events():
    """Get all events - to be implemented later"""
    return {"events": []}

@app.get("/api/choir-members")
async def get_choir_members():
    """Get choir members - to be implemented later"""
    return {"members": []}

@app.post("/api/contact")
async def submit_contact():
    """Submit contact form - to be implemented later"""
    return {"message": "Contact form submission endpoint - to be implemented"}

@app.post("/api/donate")
async def process_donation():
    """Process donation - to be implemented later"""
    return {"message": "Donation endpoint - to be implemented"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8880)

