# PayFlow Backend API

A high-performance REST API built with Go and Fiber framework for payment processing.

## 🚀 Features

- Fast and lightweight HTTP server using Fiber
- RESTful API architecture
- CORS enabled for frontend integration
- Request logging middleware
- Panic recovery middleware
- Payment processing endpoints
- Health check endpoint

## 📋 Prerequisites

- Go 1.21 or higher
- Git

## 🛠️ Installation

1. Clone the repository and navigate to backend folder:
```bash
cd backend
```

2. Install dependencies:
```bash
go mod tidy
```

3. Run the server:
```bash
go run main.go
```

The server will start on `http://localhost:3001`

## 📡 API Endpoints

### Health Check
```
GET /api/v1/health
```
Returns server health status.

### Process Payment
```
POST /api/v1/payment/process
```
Process a payment transaction.

**Request Body:**
```json
{
  "nameOnCard": "John Doe",
  "cardNumber": "1234567890123456",
  "cvv": "123",
  "month": "12",
  "year": "2025",
  "comments": "Optional comments",
  "sameAsShipping": true
}
```

**Response:**
```json
{
  "success": true,
  "message": "Payment processed successfully",
  "paymentId": "PAY-123456789",
  "status": "completed",
  "amount": 0.00,
  "currency": "USD",
  "processedAt": {
    "timestamp": "2025-10-17T..."
  }
}
```

### Get Payment Status
```
GET /api/v1/payment/status/:id
```
Get the status of a specific payment by ID.

**Response:**
```json
{
  "paymentId": "PAY-123456789",
  "status": "completed",
  "message": "Payment was processed successfully"
}
```

## 🏗️ Project Structure

```
backend/
├── main.go           # Main application entry point
├── go.mod            # Go module dependencies
├── go.sum            # Dependency checksums
└── README.md         # This file
```

## 🔧 Configuration

The application uses the following default configuration:

- **Port:** 3001
- **CORS Origins:** `http://localhost:5173, http://localhost:3000`
- **App Name:** PayFlow Backend API v1.0.0

You can modify these settings in the `main.go` file.

## 📦 Dependencies

- [Fiber v2](https://gofiber.io/) - Express-inspired web framework
- [CORS Middleware](https://docs.gofiber.io/api/middleware/cors) - Cross-Origin Resource Sharing
- [Logger Middleware](https://docs.gofiber.io/api/middleware/logger) - HTTP request/response logging
- [Recover Middleware](https://docs.gofiber.io/api/middleware/recover) - Panic recovery

## 🚀 Development

### Run in development mode:
```bash
go run main.go
```

### Build for production:
```bash
go build -o payflow-api main.go
./payflow-api
```

### Hot reload (using Air):
```bash
# Install Air
go install github.com/cosmtrek/air@latest

# Run with hot reload
air
```

## 🧪 Testing

Test the API using curl:

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

# Get payment status
curl http://localhost:3001/api/v1/payment/status/PAY-123456789
```

## 📝 Notes

- This is a demo application. In production, you should:
  - Use a real payment gateway (Stripe, PayPal, etc.)
  - Implement proper authentication and authorization
  - Add input validation with a library like `go-playground/validator`
  - Store payment records in a database
  - Implement proper error handling and logging
  - Use environment variables for configuration
  - Add rate limiting
  - Implement HTTPS/TLS

## 📄 License

MIT License
