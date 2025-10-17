.PHONY: run build clean test install dev

# Run the application
run:
	@echo "🚀 Starting PayFlow Backend API..."
	@go run .

# Build the application
build:
	@echo "🔨 Building application..."
	@go build -o bin/payflow-api .
	@echo "✅ Build complete! Binary: bin/payflow-api"

# Clean build artifacts
clean:
	@echo "🧹 Cleaning..."
	@rm -rf bin/
	@rm -rf tmp/
	@echo "✅ Clean complete!"

# Run tests
test:
	@echo "🧪 Running tests..."
	@go test -v ./...

# Install dependencies
install:
	@echo "📦 Installing dependencies..."
	@go mod download
	@go mod tidy
	@echo "✅ Dependencies installed!"

# Development mode with hot reload (requires Air)
dev:
	@echo "🔥 Starting development mode with hot reload..."
	@if command -v air > /dev/null; then \
		air; \
	else \
		echo "❌ Air is not installed. Install it with: go install github.com/cosmtrek/air@latest"; \
		echo "Or run: make install-air"; \
	fi

# Install Air for hot reload
install-air:
	@echo "📦 Installing Air..."
	@go install github.com/cosmtrek/air@latest
	@echo "✅ Air installed!"

# Format code
fmt:
	@echo "🎨 Formatting code..."
	@go fmt ./...
	@echo "✅ Code formatted!"

# Lint code
lint:
	@echo "🔍 Linting code..."
	@if command -v golangci-lint > /dev/null; then \
		golangci-lint run; \
	else \
		echo "❌ golangci-lint is not installed. Install it from: https://golangci-lint.run/usage/install/"; \
	fi

# Show help
help:
	@echo "Available commands:"
	@echo "  make run          - Run the application"
	@echo "  make build        - Build the application"
	@echo "  make clean        - Clean build artifacts"
	@echo "  make test         - Run tests"
	@echo "  make install      - Install dependencies"
	@echo "  make dev          - Run with hot reload (requires Air)"
	@echo "  make install-air  - Install Air for hot reload"
	@echo "  make fmt          - Format code"
	@echo "  make lint         - Lint code"
	@echo "  make help         - Show this help message"
