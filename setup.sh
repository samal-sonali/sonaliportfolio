#!/bin/bash

# Sonali Portfolio - Mac/Linux Setup Script

echo "╔═══════════════════════════════════════════════════════════╗"
echo "║   Premium Angular Portfolio Setup - Mac/Linux             ║"
echo "╚═══════════════════════════════════════════════════════════╝"
echo ""

# Check if Node.js is installed
echo "Checking Node.js installation..."
if command -v node &> /dev/null; then
    NODE_VERSION=$(node -v)
    echo "✓ Node.js found: $NODE_VERSION"
else
    echo "✗ Node.js not found. Please install Node.js 18.x or higher"
    echo "  Download from: https://nodejs.org"
    exit 1
fi

echo ""
echo "Checking npm installation..."
if command -v npm &> /dev/null; then
    NPM_VERSION=$(npm -v)
    echo "✓ npm found: $NPM_VERSION"
else
    echo "✗ npm not found."
    exit 1
fi

echo ""
echo "Cleaning up old installations..."

# Remove old node_modules and lock file
if [ -d "node_modules" ]; then
    echo "Removing node_modules..."
    rm -rf node_modules
fi

if [ -f "package-lock.json" ]; then
    echo "Removing package-lock.json..."
    rm -f package-lock.json
fi

echo "✓ Cleanup complete"

echo ""
echo "Clearing npm cache..."
npm cache clean --force > /dev/null 2>&1
echo "✓ Cache cleared"

echo ""
echo "Installing dependencies..."
npm install
if [ $? -ne 0 ]; then
    echo "✗ npm install failed"
    exit 1
fi

echo ""
echo "✓ Installation complete!"

echo ""
echo "╔═══════════════════════════════════════════════════════════╗"
echo "║   Setup Complete! Ready to start development             ║"
echo "╚═══════════════════════════════════════════════════════════╝"

echo ""
echo "Next steps:"
echo "1. Run: npm start"
echo "2. Browser will open to: http://localhost:4200"
echo "3. Edit files in src/app to customize your portfolio"

echo ""
echo "Useful commands:"
echo "  npm start           - Start development server"
echo "  npm run build:prod  - Build for production"
echo "  npm test            - Run tests"

echo ""
