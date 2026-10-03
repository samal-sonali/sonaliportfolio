# Sonali Portfolio - Windows Setup Script

Write-Host "╔═══════════════════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║   Premium Angular Portfolio Setup - Windows              ║" -ForegroundColor Cyan
Write-Host "╚═══════════════════════════════════════════════════════════╝" -ForegroundColor Cyan
Write-Host ""

# Check if Node.js is installed
Write-Host "Checking Node.js installation..." -ForegroundColor Yellow
$nodeVersion = node -v 2>$null
if ($nodeVersion) {
    Write-Host "✓ Node.js found: $nodeVersion" -ForegroundColor Green
} else {
    Write-Host "✗ Node.js not found. Please install Node.js 18.x or higher" -ForegroundColor Red
    Write-Host "  Download from: https://nodejs.org" -ForegroundColor Yellow
    exit
}

Write-Host ""
Write-Host "Checking npm installation..." -ForegroundColor Yellow
$npmVersion = npm -v 2>$null
if ($npmVersion) {
    Write-Host "✓ npm found: $npmVersion" -ForegroundColor Green
} else {
    Write-Host "✗ npm not found." -ForegroundColor Red
    exit
}

Write-Host ""
Write-Host "Cleaning up old installations..." -ForegroundColor Yellow

# Remove old node_modules and lock file
if (Test-Path "node_modules") {
    Write-Host "Removing node_modules..." -ForegroundColor Gray
    Remove-Item -Recurse -Force "node_modules" -ErrorAction SilentlyContinue
}

if (Test-Path "package-lock.json") {
    Write-Host "Removing package-lock.json..." -ForegroundColor Gray
    Remove-Item -Force "package-lock.json" -ErrorAction SilentlyContinue
}

Write-Host "✓ Cleanup complete" -ForegroundColor Green

Write-Host ""
Write-Host "Clearing npm cache..." -ForegroundColor Yellow
npm cache clean --force | Out-Null
Write-Host "✓ Cache cleared" -ForegroundColor Green

Write-Host ""
Write-Host "Installing dependencies..." -ForegroundColor Yellow
npm install
if ($LASTEXITCODE -ne 0) {
    Write-Host "✗ npm install failed" -ForegroundColor Red
    exit
}

Write-Host ""
Write-Host "✓ Installation complete!" -ForegroundColor Green

Write-Host ""
Write-Host "╔═══════════════════════════════════════════════════════════╗" -ForegroundColor Green
Write-Host "║   Setup Complete! Ready to start development             ║" -ForegroundColor Green
Write-Host "╚═══════════════════════════════════════════════════════════╝" -ForegroundColor Green

Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. Run: npm start" -ForegroundColor White
Write-Host "2. Browser will open to: http://localhost:4200" -ForegroundColor White
Write-Host "3. Edit files in src/app to customize your portfolio" -ForegroundColor White

Write-Host ""
Write-Host "Useful commands:" -ForegroundColor Cyan
Write-Host "  npm start           - Start development server" -ForegroundColor Gray
Write-Host "  npm run build:prod  - Build for production" -ForegroundColor Gray
Write-Host "  npm test            - Run tests" -ForegroundColor Gray

Write-Host ""
