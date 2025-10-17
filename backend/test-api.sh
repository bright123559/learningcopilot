#!/bin/bash

# PayFlow Backend API Test Script

API_URL="http://localhost:3001"

echo "🧪 Testing PayFlow Backend API"
echo "================================"
echo ""

# Test 1: Root endpoint
echo "1️⃣  Testing root endpoint..."
curl -s $API_URL | jq . || curl -s $API_URL
echo -e "\n"

# Test 2: Health check
echo "2️⃣  Testing health check..."
curl -s $API_URL/api/v1/health | jq . || curl -s $API_URL/api/v1/health
echo -e "\n"

# Test 3: Process payment
echo "3️⃣  Testing payment processing..."
curl -s -X POST $API_URL/api/v1/payment/process \
  -H "Content-Type: application/json" \
  -d '{
    "nameOnCard": "John Doe",
    "cardNumber": "1234567890123456",
    "cvv": "123",
    "month": "12",
    "year": "2025",
    "comments": "Test payment",
    "sameAsShipping": true
  }' | jq . || curl -s -X POST $API_URL/api/v1/payment/process \
  -H "Content-Type: application/json" \
  -d '{
    "nameOnCard": "John Doe",
    "cardNumber": "1234567890123456",
    "cvv": "123",
    "month": "12",
    "year": "2025",
    "comments": "Test payment",
    "sameAsShipping": true
  }'
echo -e "\n"

# Test 4: Get payment status
echo "4️⃣  Testing payment status..."
curl -s $API_URL/api/v1/payment/status/PAY-123456789abc | jq . || curl -s $API_URL/api/v1/payment/status/PAY-123456789abc
echo -e "\n"

# Test 5: Get payment history
echo "5️⃣  Testing payment history..."
curl -s $API_URL/api/v1/payment/history | jq . || curl -s $API_URL/api/v1/payment/history
echo -e "\n"

echo "✅ All tests completed!"
