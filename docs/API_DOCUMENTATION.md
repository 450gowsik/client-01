# API Documentation

## Base URL
```
http://localhost:8000
```

## Authentication
Most endpoints are public. Admin endpoints require JWT token in Authorization header:
```
Authorization: Bearer <token>
```

## Endpoints

### Services

#### Get All Services
```http
GET /api/services?page=1&page_size=20&category=Hair+Styling
```

**Response:**
```json
{
  "success": true,
  "message": "Retrieved 6 services",
  "data": {
    "services": [...],
    "pagination": {
      "total": 15,
      "page": 1,
      "page_size": 20,
      "total_pages": 1
    }
  }
}
```

#### Get Service by ID
```http
GET /api/services/{service_id}
```

#### Get Popular Services
```http
GET /api/services/popular?limit=6
```

#### Search Services
```http
GET /api/services/search/query?q=facial
```

### Appointments

#### Create Appointment
```http
POST /api/appointments
Content-Type: application/json

{
  "customer_name": "Priya Sharma",
  "customer_email": "priya@example.com",
  "customer_phone": "+919876543210",
  "service_id": 1,
  "appointment_date": "2026-08-01",
  "appointment_time": "10:00:00",
  "notes": "Please confirm via WhatsApp"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Appointment booked successfully!",
  "data": {
    "id": 123,
    "customer_name": "Priya Sharma",
    "service_name": "Bridal Makeup Package",
    "appointment_date": "2026-08-01",
    "status": "Pending"
  }
}
```

#### Get Available Time Slots
```http
GET /api/appointments/available-slots?service_id=1&appointment_date=2026-08-01
```

#### Get Customer Appointments
```http
GET /api/appointments/customer/phone/{phone_number}
```

### Gallery

#### Get Gallery Images
```http
GET /api/gallery?page=1&page_size=12&category=Bridal
```

#### Get Featured Images
```http
GET /api/gallery/featured?limit=8
```

### Testimonials

#### Get All Testimonials
```http
GET /api/testimonials?page=1&page_size=10
```

#### Get Featured Testimonials
```http
GET /api/testimonials/featured?limit=6
```

### Blog

#### Get Blog Posts
```http
GET /api/blog?page=1&category=Hair+Care
```

#### Get Blog Post by Slug
```http
GET /api/blog/{slug}
```

#### Get Featured Posts
```http
GET /api/blog/featured?limit=3
```

### Contact

#### Submit Contact Message
```http
POST /api/contact/message
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+919876543210",
  "subject": "Inquiry about services",
  "message": "I would like to know more about..."
}
```

#### Subscribe to Newsletter
```http
POST /api/contact/newsletter
Content-Type: application/json

{
  "email": "subscriber@example.com",
  "name": "Jane Doe"
}
```

## Error Responses

### Validation Error (422)
```json
{
  "success": false,
  "message": "Validation error",
  "errors": [
    {
      "field": "customer_email",
      "message": "value is not a valid email address",
      "type": "value_error.email"
    }
  ],
  "status_code": 422
}
```

### Not Found (404)
```json
{
  "success": false,
  "message": "Service not found",
  "status_code": 404
}
```

### Server Error (500)
```json
{
  "success": false,
  "message": "Internal server error",
  "status_code": 500
}
```

## Rate Limiting
- Public endpoints: 100 requests per minute
- Authenticated endpoints: 1000 requests per minute

## Pagination
All list endpoints support pagination:
- `page` (default: 1)
- `page_size` (default: 10, max: 100)

## Auto-Generated Documentation
Visit http://localhost:8000/api/docs for interactive Swagger UI documentation.
