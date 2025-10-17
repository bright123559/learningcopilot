package main

import (
	"time"

	"github.com/gofiber/fiber/v2"
)

// SetupRoutes configures all application routes
func SetupRoutes(app *fiber.App) {
	// API v1 group
	api := app.Group("/api/v1")

	// Health check endpoint
	api.Get("/health", HealthCheck)

	// Payment routes
	payment := api.Group("/payment")
	payment.Post("/process", ProcessPayment)
	payment.Get("/status/:id", GetPaymentStatus)
	payment.Get("/history", GetPaymentHistory)

	// Root endpoint
	app.Get("/", WelcomeHandler)
}

// WelcomeHandler handles the root endpoint
func WelcomeHandler(c *fiber.Ctx) error {
	return c.SendString("Hello World")
}

// HealthCheck returns the server health status
func HealthCheck(c *fiber.Ctx) error {
	return c.JSON(fiber.Map{
		"status":  "ok",
		"message": "Server is running",
		"time":    time.Now(),
	})
}

// ProcessPayment handles payment processing
func ProcessPayment(c *fiber.Ctx) error {
	var payment PaymentRequest

	if err := c.BodyParser(&payment); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(APIResponse{
			Success: false,
			Error:   "Invalid request body",
		})
	}

	// Basic validation
	if payment.NameOnCard == "" || payment.CardNumber == "" || payment.CVV == "" {
		return c.Status(fiber.StatusBadRequest).JSON(APIResponse{
			Success: false,
			Error:   "Missing required fields: nameOnCard, cardNumber, and cvv are required",
		})
	}

	if len(payment.CVV) != 3 {
		return c.Status(fiber.StatusBadRequest).JSON(APIResponse{
			Success: false,
			Error:   "CVV must be 3 digits",
		})
	}

	// Simulate payment processing
	// In a real application, you would integrate with a payment gateway here
	response := PaymentResponse{
		PaymentID:   GeneratePaymentID(),
		Status:      "completed",
		Amount:      0.00,
		Currency:    "USD",
		ProcessedAt: time.Now(),
	}

	return c.Status(fiber.StatusOK).JSON(APIResponse{
		Success: true,
		Message: "Payment processed successfully",
		Data:    response,
	})
}

// GetPaymentStatus retrieves the status of a payment
func GetPaymentStatus(c *fiber.Ctx) error {
	paymentId := c.Params("id")

	if paymentId == "" {
		return c.Status(fiber.StatusBadRequest).JSON(APIResponse{
			Success: false,
			Error:   "Payment ID is required",
		})
	}

	// In a real application, you would fetch the payment status from a database
	response := PaymentStatusResponse{
		PaymentID: paymentId,
		Status:    "completed",
		Message:   "Payment was processed successfully",
	}

	return c.JSON(APIResponse{
		Success: true,
		Data:    response,
	})
}

// GetPaymentHistory retrieves payment history (demo endpoint)
func GetPaymentHistory(c *fiber.Ctx) error {
	// In a real application, you would fetch this from a database
	history := []fiber.Map{
		{
			"paymentId":   "PAY-123456789abc",
			"amount":      99.99,
			"currency":    "USD",
			"status":      "completed",
			"processedAt": "2025-10-17T10:30:00Z",
		},
		{
			"paymentId":   "PAY-987654321xyz",
			"amount":      149.99,
			"currency":    "USD",
			"status":      "completed",
			"processedAt": "2025-10-16T15:45:00Z",
		},
	}

	return c.JSON(APIResponse{
		Success: true,
		Message: "Payment history retrieved successfully",
		Data:    history,
	})
}
