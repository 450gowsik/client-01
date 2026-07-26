# Installation Guide

## Quick Start (5 Minutes)

### 1. Install Python
Download and install Python 3.10+ from https://www.python.org/downloads/

### 2. Install MySQL
Download and install MySQL 8.0+ from https://dev.mysql.com/downloads/

### 3. Setup Project
```bash
# Clone or extract project
cd soundariya-healthcare

# Create virtual environment
python -m venv venv

# Activate virtual environment
# Windows:
venv\Scripts\activate
# Mac/Linux:
source venv/bin/activate

# Install dependencies
pip install -r backend/requirements.txt
```

### 4. Setup Database
```sql
-- Login to MySQL
mysql -u root -p

-- Create database
CREATE DATABASE soundariya_salon CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Exit MySQL
exit;

-- Import schema
mysql -u root -p soundariya_salon < database/schema.sql

-- Import sample data (optional)
mysql -u root -p soundariya_salon < database/sample_data.sql
```

### 5. Configure Environment
Edit `.env` file:
```env
DB_PASSWORD=your_mysql_password
SMTP_USERNAME=your_email@gmail.com
SMTP_PASSWORD=your_gmail_app_password
```

### 6. Run Application
```bash
# Terminal 1: Start FastAPI (API Server)
cd backend
python main.py

# Terminal 2: Start Flask (Admin Dashboard)
cd backend
python app.py

# Terminal 3: Start Frontend (Optional)
cd frontend
python -m http.server 3000
```

### 7. Access Application
- **Website**: Open `frontend/index.html` or http://localhost:3000
- **API Docs**: http://localhost:8000/api/docs
- **Admin**: http://localhost:5000 (admin / admin123)

## Detailed Installation

[See README.md for complete documentation]

## Common Issues

### Issue: Cannot connect to MySQL
**Solution**: Check MySQL service is running and credentials in `.env` are correct

### Issue: Port already in use
**Solution**: Change ports in `.env` or kill existing process

### Issue: Module not found
**Solution**: Ensure virtual environment is activated and dependencies installed

## Production Deployment

See README.md section "Production Deployment" for production setup guide.
