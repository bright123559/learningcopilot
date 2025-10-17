package main

import (
	"crypto/rand"
	"encoding/hex"
	"time"
)

// GeneratePaymentID generates a unique payment ID
func GeneratePaymentID() string {
	_ = time.Now().Unix() // timestamp for future use
	randomBytes := make([]byte, 6)
	rand.Read(randomBytes)
	randomStr := hex.EncodeToString(randomBytes)
	return "PAY-" + randomStr[:12]
}

// Response structures
type APIResponse struct {
	Success bool        `json:"success"`
	Message string      `json:"message,omitempty"`
	Data    interface{} `json:"data,omitempty"`
	Error   string      `json:"error,omitempty"`
}

type PaymentRequest struct {
	NameOnCard     string `json:"nameOnCard" validate:"required"`
	CardNumber     string `json:"cardNumber" validate:"required"`
	CVV            string `json:"cvv" validate:"required,len=3"`
	Month          string `json:"month" validate:"required"`
	Year           string `json:"year" validate:"required"`
	Comments       string `json:"comments"`
	SameAsShipping bool   `json:"sameAsShipping"`
}

type PaymentResponse struct {
	PaymentID   string    `json:"paymentId"`
	Status      string    `json:"status"`
	Amount      float64   `json:"amount"`
	Currency    string    `json:"currency"`
	ProcessedAt time.Time `json:"processedAt"`
}

type PaymentStatusResponse struct {
	PaymentID string `json:"paymentId"`
	Status    string `json:"status"`
	Message   string `json:"message"`
}
