# PayFlow Backend - Quick Start Guide

## 🎯 What's Been Created

A complete **Go backend API** using the **Fiber framework** (Express-inspired for Go) with:
- RESTful API architecture
- Payment processing endpoints
- CORS support for frontend integration
- Professional project structure
- Hot reload support (optional)

## 📁 Project Structure

```
backend/
├── main.go           # Application entry point with Fiber setup
├── handlers.go       # HTTP request handlers
├── models.go         # Data structures and utilities
├── go.mod            # Go module dependencies
├── go.sum            # Dependency checksums
├── Makefile          # Build and run commands
├── .air.toml         # Hot reload configuration
├── .gitignore        # Git ignore rules
├── test-api.sh       # API testing script
└── README.md         # Documentation
```

## 🚀 Getting Started

### Option 1: Using Make (Recommended)
```bash
cd backend

# Run the server
make run

# Or use hot reload (requires Air)
make install-air
make dev

# Build for production
make build

# See all commands
make help
```

### Option 2: Using Go Directly
```bash
cd backend

# Run the server
go run .

# Build
go build -o payflow-api .

# Run built binary
./payflow-api
```

The server will start on **http://localhost:3001**

## 🔌 API Endpoints

### 1. Root Endpoint
```bash
GET http://localhost:3001/
```
Returns welcome message and available endpoints.

### 2. Health Check
```bash
GET http://localhost:3001/api/v1/health
```
Returns server health status.

### 3. Process Payment
```bash
POST http://localhost:3001/api/v1/payment/process
Content-Type: application/json

{
  "nameOnCard": "John Doe",
  "cardNumber": "1234567890123456",
  "cvv": "123",
  "month": "12",
  "year": "2025",
  "comments": "Optional comment",
  "sameAsShipping": true
}
```

### 4. Get Payment Status
```bash
GET http://localhost:3001/api/v1/payment/status/:id
```

### 5. Get Payment History
```bash
GET http://localhost:3001/api/v1/payment/history
```

## 🧪 Testing the API

Run the included test script:
```bash
cd backend
./test-api.sh
```

Or use curl commands:
```bash
# Health check
curl http://localhost:3001/api/v1/health

# Process payment
curl -X POST http://localhost:3001/api/v1/payment/process \
  -H "Content-Type: application/json" \
  -d '{
    "nameOnCard": "John Doe",
    "cardNumber": "1234567890123456",
    "cvv": "123",
    "month": "12",
    "year": "2025",
    "sameAsShipping": true
  }'
```

## 🔧 Key Features Implemented

### 1. Fiber Framework
- Fast, Express-inspired web framework for Go
- Built on top of Fasthttp (fastest HTTP engine for Go)
- Easy routing and middleware support

### 2. Middleware
- **CORS**: Enabled for frontend integration
- **Logger**: Logs all HTTP requests
- **Recover**: Handles panics gracefully
- **Error Handler**: Custom error responses

### 3. CORS Configuration
Configured to allow requests from:
- `http://localhost:5173` (Vite dev server)
- `http://localhost:3000` (Common dev port)
- `http://localhost:5174` (Alternative Vite port)

### 4. Request/Response Handling
- JSON request parsing
- JSON response formatting
- Input validation
- Error handling

### 5. Project Organization
- Separated concerns (handlers, models, routes)
- Makefile for easy commands
- Air configuration for hot reload
- Professional README documentation

## 📦 Dependencies

The project uses these Go packages:
- `github.com/gofiber/fiber/v2` - Web framework
- `github.com/gofiber/fiber/v2/middleware/cors` - CORS middleware
- `github.com/gofiber/fiber/v2/middleware/logger` - Request logging
- `github.com/gofiber/fiber/v2/middleware/recover` - Panic recovery

All installed automatically via `go mod`.

## 🔗 Connecting Frontend to Backend

In your React frontend, you can now make API calls:

```javascript
// Example: Process payment
const processPayment = async (paymentData) => {
  try {
    const response = await fetch('http://localhost:3001/api/v1/payment/process', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(paymentData),
    });
    
    const result = await response.json();
    console.log('Payment processed:', result);
    return result;
  } catch (error) {
    console.error('Payment error:', error);
    throw error;
  }
};
```

## 📝 Next Steps

To enhance the backend:

1. **Add Database**: 
   - PostgreSQL with GORM
   - MongoDB with official driver
   - SQLite for simple storage

2. **Add Authentication**:
   - JWT tokens
   - OAuth2
   - Session management

3. **Add Validation**:
   - `go-playground/validator`
   - Custom validation rules

4. **Add Payment Gateway**:
   - Stripe integration
   - PayPal SDK
   - Square API

5. **Add Testing**:
   - Unit tests
   - Integration tests
   - API tests

6. **Add Environment Config**:
   - `.env` file support
   - Configuration management

## 🎓 Fiber Documentation

- Official docs: https://docs.gofiber.io/
- GitHub: https://github.com/gofiber/fiber
- Examples: https://github.com/gofiber/recipes

## ✅ Summary

You now have:
- ✅ Go backend with Fiber framework
- ✅ RESTful API endpoints
- ✅ CORS enabled for frontend
- ✅ Payment processing endpoints
- ✅ Professional project structure
- ✅ Development tools (Makefile, hot reload)
- ✅ API testing script
- ✅ Complete documentation

**Server running at:** http://localhost:3001
**Frontend should use:** http://localhost:3001/api/v1/...
