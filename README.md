# Soundariya Health Care & Beauty Parlour

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-Proprietary-red.svg)
![Status](https://img.shields.io/badge/status-Production%20Ready-success.svg)

Enterprise-quality, fully responsive website for a premium beauty salon with comprehensive backend management system.

## 🌟 Features

### Frontend (Customer-Facing)
- **Premium Landing Page** - Luxury hero section with animated elements
- **Service Catalog** - 13 service categories with detailed information
- **Bridal Portfolio** - Dedicated section for bridal packages and gallery
- **Online Booking** - Real-time appointment booking with validation
- **Gallery** - Masonry layout with before/after transformations
- **Testimonials** - Client reviews with ratings and carousel
- **Blog** - Beauty tips and advice articles
- **Contact** - Google Maps integration and contact form
- **Responsive Design** - Mobile-first, works on all devices
- **SEO Optimized** - Meta tags, Open Graph, schema markup
- **Accessibility** - WCAG compliant, keyboard navigation

### Backend (Admin Dashboard)
- **Secure Authentication** - JWT-based admin login
- **Dashboard** - Statistics, revenue tracking, analytics
- **Appointment Management** - CRUD operations, status updates, payment tracking
- **Customer Management** - Customer database with visit history
- **Service Management** - Add/edit/delete services and pricing
- **Gallery Management** - Upload and manage portfolio images
- **Testimonial Management** - Approve and moderate reviews
- **Blog Management** - Create and publish blog posts
- **Contact Messages** - View and respond to inquiries
- **Newsletter** - Subscriber management
- **Export to Excel** - Download appointment reports

### API (RESTful)
- **FastAPI** - High-performance async REST API
- **Complete CRUD** - All entities (services, bookings, gallery, etc.)
- **Validation** - Pydantic schemas for request/response
- **Error Handling** - Comprehensive error responses
- **CORS Support** - Configured for cross-origin requests
- **API Documentation** - Auto-generated Swagger/ReDoc docs

## 🛠️ Technology Stack

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Grid, Flexbox
- **Vanilla JavaScript** - ES6+, modular architecture
- **Google Fonts** - Playfair Display, Poppins, Inter
- **Font Awesome 6** - Icon library

### Backend
- **FastAPI 0.109** - Modern Python web framework
- **Flask 3.0** - Admin dashboard
- **Python 3.10+** - Programming language

### Database
- **MySQL 8.0** - Relational database
- **SQLAlchemy 2.0** - ORM
- **PyMySQL** - MySQL connector

### Authentication & Security
- **JWT** - JSON Web Tokens
- **Bcrypt** - Password hashing
- **Flask-Login** - Session management
- **CORS** - Cross-origin resource sharing
- **Input Validation** - SQL injection prevention

### Additional Libraries
- **python-dotenv** - Environment variables
- **Pydantic** - Data validation
- **aiosmtplib** - Async email sending
- **Pillow** - Image processing
- **openpyxl** - Excel export
- **phonenumbers** - Phone validation

## 📁 Project Structure

```
soundariya-healthcare/
│
├── frontend/                    # Client-side application
│   ├── index.html              # Home page
│   ├── about.html              # About us page
│   ├── services.html           # Services catalog
│   ├── bridal.html             # Bridal portfolio
│   ├── pricing.html            # Pricing packages
│   ├── gallery.html            # Photo gallery
│   ├── testimonials.html       # Client reviews
│   ├── blog.html               # Blog listing
│   ├── contact.html            # Contact form
│   │
│   └── assets/
│       ├── css/
│       │   ├── variables.css   # Design system variables
│       │   ├── utilities.css   # Utility classes
│       │   ├── animations.css  # Animation library
│       │   ├── style.css       # Main styles
│       │   └── responsive.css  # Media queries
│       │
│       ├── js/
│       │   ├── main.js         # Core functionality
│       │   ├── navbar.js       # Navigation handling
│       │   ├── slider.js       # Carousel/slider
│       │   ├── gallery.js      # Gallery interactions
│       │   ├── booking.js      # Booking form logic
│       │   ├── validation.js   # Form validation
│       │   ├── animation.js    # Scroll animations
│       │   └── api.js          # API integration
│       │
│       └── images/             # Image assets
│
├── backend/                     # Server-side application
│   ├── main.py                 # FastAPI application
│   ├── app.py                  # Flask admin dashboard
│   ├── config.py               # Configuration management
│   ├── database.py             # Database connection
│   │
│   ├── models/                 # SQLAlchemy models
│   │   ├── admin.py
│   │   ├── customer.py
│   │   ├── service.py
│   │   ├── appointment.py
│   │   ├── gallery.py
│   │   ├── testimonial.py
│   │   └── blog.py
│   │
│   ├── routes/                 # API endpoints
│   │   ├── booking.py
│   │   ├── services.py
│   │   ├── gallery.py
│   │   ├── testimonials.py
│   │   ├── blog.py
│   │   └── contact.py
│   │
│   ├── schemas/                # Pydantic schemas
│   │   ├── booking_schema.py
│   │   ├── service_schema.py
│   │   └── user_schema.py
│   │
│   ├── utils/                  # Utility functions
│   │   ├── auth.py             # JWT & password hashing
│   │   ├── email.py            # Email service
│   │   ├── validation.py       # Custom validators
│   │   └── helper.py           # Helper functions
│   │
│   └── templates/admin/        # Flask templates
│       ├── base.html
│       ├── login.html
│       ├── dashboard.html
│       └── ...
│
├── database/                    # Database files
│   ├── schema.sql              # Database schema
│   ├── sample_data.sql         # Sample data
│   └── backup.sql              # Backup file
│
├── .env                        # Environment variables
├── .gitignore                  # Git ignore rules
├── requirements.txt            # Python dependencies
└── README.md                   # This file
```

## 🚀 Installation & Setup

### Prerequisites
- Python 3.10 or higher
- MySQL 8.0 or higher
- pip (Python package manager)

### Step 1: Clone Repository
```bash
git clone https://github.com/yourusername/soundariya-healthcare.git
cd soundariya-healthcare
```

### Step 2: Create Virtual Environment
```bash
python -m venv venv

# Windows
venv\Scripts\activate

# Linux/Mac
source venv/bin/activate
```

### Step 3: Install Dependencies
```bash
pip install -r backend/requirements.txt
```

### Step 4: Configure Database
1. Create MySQL database:
```sql
CREATE DATABASE soundariya_salon CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

2. Update `.env` file with your database credentials:
```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=soundariya_salon
```

3. Import database schema:
```bash
mysql -u root -p soundariya_salon < database/schema.sql
```

4. (Optional) Import sample data:
```bash
mysql -u root -p soundariya_salon < database/sample_data.sql
```

### Step 5: Configure Environment Variables
Update the `.env` file with your settings:
```env
# JWT Configuration
JWT_SECRET_KEY=your-super-secret-jwt-key-change-this

# Email Configuration (Gmail)
SMTP_USERNAME=your-email@gmail.com
SMTP_PASSWORD=your-app-password

# WhatsApp
WHATSAPP_NUMBER=+919876543210

# Business Information
BUSINESS_NAME=Soundariya Health Care & Beauty Parlour
BUSINESS_ADDRESS=Your Address Here
BUSINESS_PHONE=+91 98765 43210
BUSINESS_EMAIL=info@soundariyasalon.com
```

### Step 6: Run the Application

**Start FastAPI Server (Port 8000):**
```bash
cd backend
python main.py
```

**Start Flask Admin Dashboard (Port 5000):**
```bash
cd backend
python app.py
```

**Open Frontend:**
- Open `frontend/index.html` in a web browser
- Or serve with a simple HTTP server:
```bash
cd frontend
python -m http.server 3000
```

## 📊 API Documentation

Once FastAPI is running, visit:
- **Swagger UI**: http://localhost:8000/api/docs
- **ReDoc**: http://localhost:8000/api/redoc
- **OpenAPI JSON**: http://localhost:8000/api/openapi.json

### Key API Endpoints

#### Services
- `GET /api/services` - List all services
- `GET /api/services/{id}` - Get service details
- `GET /api/services/popular` - Get popular services
- `GET /api/services/category/{category}` - Get services by category

#### Appointments
- `POST /api/appointments` - Create appointment
- `GET /api/appointments/{id}` - Get appointment details
- `GET /api/appointments/available-slots` - Get available time slots
- `PUT /api/appointments/{id}` - Update appointment

#### Gallery
- `GET /api/gallery` - List gallery images
- `GET /api/gallery/featured` - Get featured images

#### Testimonials
- `GET /api/testimonials` - List testimonials
- `GET /api/testimonials/featured` - Get featured testimonials

#### Blog
- `GET /api/blog` - List blog posts
- `GET /api/blog/{slug}` - Get blog post by slug

#### Contact
- `POST /api/contact/message` - Submit contact message
- `POST /api/contact/newsletter` - Subscribe to newsletter

## 🔐 Admin Dashboard

Access the admin dashboard at: http://localhost:5000

**Default Admin Credentials:**
- Username: `admin`
- Password: `admin123`

⚠️ **Important**: Change the default password immediately after first login!

### Admin Features
- View dashboard statistics
- Manage appointments (create, update, delete, export)
- View and manage customers
- Add/edit services and pricing
- Upload and manage gallery images
- Moderate testimonials
- Manage blog posts
- View contact messages
- Export data to Excel

## 🎨 Design System

### Color Palette
- **Primary Pink**: #FFB6C1
- **Primary Pink Light**: #FFC0CB
- **Secondary Gold**: #D4AF37
- **Gold Light**: #FFD700

### Typography
- **Headings**: Playfair Display (serif)
- **UI Text**: Poppins (sans-serif)
- **Body**: Inter (sans-serif)

### Breakpoints
- **Mobile**: 480px
- **Tablet**: 768px
- **Desktop**: 1024px
- **Large**: 1440px

## 📧 Email Configuration

The system sends automated emails for:
- Appointment confirmations
- Contact form acknowledgments
- Newsletter welcome messages

To enable email functionality, configure Gmail SMTP in `.env`:

1. Enable 2-Factor Authentication in your Google Account
2. Generate an App Password: https://myaccount.google.com/apppasswords
3. Update `.env` with your credentials

## 🔒 Security Features

- **Password Hashing**: Bcrypt with salt
- **JWT Authentication**: Secure token-based auth
- **Input Validation**: Pydantic schemas
- **SQL Injection Prevention**: Parameterized queries
- **CSRF Protection**: Built-in Flask protection
- **XSS Prevention**: Input sanitization
- **CORS Configuration**: Restricted origins
- **Rate Limiting**: API throttling (recommended for production)

## 🚀 Production Deployment

### Environment Setup
1. Set `ENVIRONMENT=production` in `.env`
2. Change all default passwords
3. Update `JWT_SECRET_KEY` with a strong random key
4. Configure production database
5. Set up SSL/TLS certificates
6. Enable firewall rules

### Recommended Setup
- **Web Server**: Nginx or Apache
- **WSGI Server**: Gunicorn or uWSGI
- **Process Manager**: Supervisor or systemd
- **Database**: MySQL 8.0+ with replication
- **Caching**: Redis (optional)
- **CDN**: Cloudflare or AWS CloudFront

### Example Nginx Configuration
```nginx
server {
    listen 80;
    server_name soundariyasalon.com;
    
    location / {
        root /var/www/soundariya/frontend;
        index index.html;
    }
    
    location /api {
        proxy_pass http://localhost:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
    
    location /admin {
        proxy_pass http://localhost:5000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

## 🧪 Testing

### Manual Testing Checklist
- [ ] All pages load correctly
- [ ] Navigation works on all devices
- [ ] Forms submit successfully
- [ ] API endpoints return correct data
- [ ] Admin login works
- [ ] Appointment booking flow works
- [ ] Email notifications are sent
- [ ] Responsive design works on mobile/tablet
- [ ] Images load and display correctly
- [ ] Animations work smoothly

### Browser Compatibility
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📈 Performance Optimization

- **Images**: Optimize with WebP format, lazy loading
- **CSS**: Minify and combine files
- **JavaScript**: Minify and use async/defer
- **Caching**: Implement browser and server caching
- **CDN**: Serve static assets from CDN
- **Database**: Index frequently queried columns
- **API**: Implement pagination and caching

## 🐛 Troubleshooting

### Database Connection Error
```bash
# Check MySQL is running
mysql -u root -p

# Verify credentials in .env file
# Check firewall rules
```

### Port Already in Use
```bash
# Kill process on port 8000
lsof -ti:8000 | xargs kill -9

# Or use different port in config
```

### Import Errors
```bash
# Reinstall dependencies
pip install -r backend/requirements.txt --force-reinstall
```

## 📝 License

Copyright © 2026 Soundariya Health Care & Beauty Parlour. All rights reserved.

This is proprietary software. Unauthorized copying, distribution, or modification is strictly prohibited.

## 👥 Support

For technical support or inquiries:
- **Email**: info@soundariyasalon.com
- **Phone**: +91 98765 43210
- **Website**: https://soundariyasalon.com

## 🎯 Future Enhancements

- [ ] Payment gateway integration (Razorpay/Stripe)
- [ ] Mobile app (React Native)
- [ ] SMS notifications
- [ ] Loyalty program
- [ ] Gift card system
- [ ] Multi-language support
- [ ] Advanced analytics dashboard
- [ ] Customer portal
- [ ] Staff management module
- [ ] Inventory management

## 🙏 Acknowledgments

- Design inspiration from luxury beauty brands
- Icons by Font Awesome
- Fonts by Google Fonts
- Color palette inspiration from modern design trends

---

**Built with ❤️ for Soundariya Health Care & Beauty Parlour**

*Version 1.0.0 - January 2026*
