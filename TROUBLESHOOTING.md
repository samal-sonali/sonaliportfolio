# 🔧 Troubleshooting Guide

## Common Issues & Solutions

### 1. ❌ Error: Could not find '@angular-devkit/build-angular:dev-server'

**Problem:** Angular dependencies not installed properly

**Solutions:**

**Solution A: Clean Reinstall (Recommended)**
```bash
# Stop npm start (press Ctrl+C)
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
npm start
```

**Solution B: Check Node/npm Versions**
```bash
node -v  # Should be 18.x or higher
npm -v   # Should be 9.x or higher
```

If versions are old, download latest from https://nodejs.org

**Solution C: Install Angular CLI**
```bash
npm install -g @angular/cli@17
npm install
npm start
```

---

### 2. ❌ Error: Port 4200 Already in Use

**Problem:** Another app is using port 4200

**Solutions:**

```bash
# Use different port
ng serve --port 4201

# Or kill process on Windows (PowerShell - Admin)
Get-Process node | Stop-Process

# Or on Mac/Linux
lsof -ti:4200 | xargs kill -9
```

---

### 3. ❌ Error: ENOENT - File not found

**Problem:** Missing files or wrong paths

**Solutions:**

```bash
# Verify folder structure
ls src/app/pages     # Should show 9 folders
ls src/app/shared    # Should show 4 folders
ls src/app/services  # Should show 2 .ts files

# Check if all config files exist
ls angular.json tsconfig.json package.json
```

---

### 4. ❌ TypeScript Errors in VS Code

**Problem:** IDE showing errors but code works

**Solutions:**

```bash
# Reload VS Code
Press: Ctrl+Shift+P
Type: Reload Window
Press: Enter

# Or restart VS Code completely
```

Also verify `tsconfig.json` exists in project root.

---

### 5. ❌ npm install Stuck or Failing

**Problem:** Installation hangs or times out

**Solutions:**

```bash
# Increase npm timeout
npm install --fetch-timeout=60000

# Use different registry
npm install --registry https://registry.npmjs.org/

# Clear cache and retry
npm cache clean --force
npm install
```

---

### 6. ❌ Browser Won't Open Automatically

**Problem:** Application running but browser doesn't open

**Solutions:**

```bash
# Open manually
# Go to http://localhost:4200 in your browser

# Or use flag to skip opening
ng serve --open=false

# Then manually navigate to localhost:4200
```

---

### 7. ❌ Changes Not Reflecting in Browser

**Problem:** You edited a file but changes don't appear

**Solutions:**

```bash
# Hard refresh browser
Ctrl+Shift+R  (Windows/Linux)
Cmd+Shift+R   (Mac)

# Or clear browser cache
# DevTools (F12) → Settings → Clear site data

# Check console for errors
Press F12 → Console tab
Look for red error messages
```

---

### 8. ❌ Blank Page or White Screen

**Problem:** App loads but shows nothing

**Solutions:**

```bash
# Check browser console for errors (F12)
# Look for red error messages

# Verify assets exist
ls -la src/assets/

# Check that global.scss is loading
# Look in DevTools → Network tab
```

---

### 9. ❌ Styling Not Applied (No Styles)

**Problem:** Page loads but has no CSS

**Solutions:**

```bash
# Verify global.scss is imported in angular.json
# Check: angular.json → projects.sonali-portfolio.architect.build.options.styles

# Restart dev server
Ctrl+C
npm start

# Clear browser cache (Ctrl+Shift+Delete)
```

---

### 10. ❌ Git/GitHub Issues

**Problem:** Can't push to GitHub

**Solutions:**

```bash
# Initialize git (if not done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit"

# Add remote
git remote add origin https://github.com/YOUR-USERNAME/sonali-portfolio.git

# Push
git push -u origin main
```

---

## Performance Issues

### ❌ Slow Development Server

**Solutions:**

```bash
# Close other apps using resources
# Restart dev server
Ctrl+C
npm start

# Check build time in terminal
# Should compile in < 5 seconds
```

### ❌ Slow Page Load

**Solutions:**

```bash
# Build for production and test
npm run build:prod

# Test production build locally
npx http-server dist/sonali-portfolio/

# Check performance in Lighthouse
# DevTools → Lighthouse → Generate report
```

---

## Development Environment Issues

### ❌ VS Code Won't Recognize TypeScript

**Solutions:**

1. Install TypeScript Extension:
   - Open VS Code Extensions (Ctrl+Shift+X)
   - Search "TypeScript Vue Plugin"
   - Install Official TypeScript extension

2. Restart VS Code

### ❌ Angular Language Service Not Working

**Solutions:**

```bash
# Install Angular Language Service
npm install --save-dev @angular/language-service

# Reload VS Code
```

---

## Folder/File Issues

### ❌ Renamed Folder But VS Code Won't Update

**Solutions:**

```bash
# Close VS Code completely
# Rename folder in File Explorer
# Reopen folder in VS Code
```

### ❌ Can't Delete node_modules

**Problem:** Folder locked or contains long paths

**Solutions (Windows):**
```powershell
# Use rimraf (Node-based remover)
npm install -g rimraf
rimraf node_modules

# Or use 7-Zip to delete
# Right-click node_modules → 7-Zip → Delete
```

**Solutions (Mac/Linux):**
```bash
sudo rm -rf node_modules
```

---

## Network/Connectivity Issues

### ❌ npm install Times Out

**Solutions:**

```bash
# Increase timeout
npm install --fetch-timeout=120000 --fetch-retry-mintimeout=20000

# Use different npm registry
npm config set registry https://registry.npmjs.org/

# Check internet connection
ping google.com
```

---

## Memory/System Issues

### ❌ Out of Memory Error

**Problem:** `FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed`

**Solutions:**

```bash
# Increase Node memory
set NODE_OPTIONS=--max-old-space-size=4096  (Windows)
export NODE_OPTIONS=--max-old-space-size=4096  (Mac/Linux)

npm install
```

### ❌ High CPU Usage

**Solutions:**

- Close other applications
- Reduce number of Chrome tabs
- Disable extensions in VS Code

---

## Component/Build Errors

### ❌ Component Not Found Error

**Problem:** `Can't find component 'XyzComponent'`

**Solutions:**

```bash
# Check component exists
ls src/app/pages/xyz/

# Check it's imported in app.component.ts
# Verify path is correct in imports

# Restart dev server
```

### ❌ Module Not Found Error

**Problem:** `Can't find module '@angular/core'`

**Solutions:**

```bash
# Reinstall node_modules
rm -rf node_modules package-lock.json
npm install

# Verify angular.json exists
ls angular.json
```

---

## Form/Validation Issues

### ❌ Form Not Submitting

**Problem:** Form submit button doesn't work

**Solutions:**

```typescript
// Check in contact.component.ts:
// 1. Form validation is correct
// 2. submitForm() method exists
// 3. Reactive Forms is imported

import { ReactiveFormsModule } from '@angular/forms';

// Check imports in component
imports: [ReactiveFormsModule]
```

---

## Animation Issues

### ❌ Animations Not Working

**Problem:** Page doesn't animate on load

**Solutions:**

```bash
# Verify animations module is imported
# Check: app.component.ts imports

# Check browser DevTools (F12)
# Elements tab → Check element classes
# Should see: fade-up, slide-left, etc.

# Restart dev server if just added animations
Ctrl+C
npm start
```

---

## API/External Service Issues

### ❌ External Links Not Working

**Problem:** GitHub/LinkedIn links show 404

**Solutions:**

```typescript
// Update links in components
// Example in navbar.component.ts:
href="https://github.com/YOUR-USERNAME"
href="https://linkedin.com/in/YOUR-PROFILE"
```

---

## Deployment Issues

### ❌ Build Fails in Production

**Problem:** `npm run build:prod` shows errors

**Solutions:**

```bash
# Check for TypeScript errors
npm run build:prod

# Read full error message
# Usually shows exact file and line number

# Fix the error and retry
npm run build:prod
```

### ❌ Deployed Site Has Wrong Styling

**Problem:** Assets not loading from deployed URL

**Solutions:**

```bash
# For GitHub Pages, set base-href:
ng build --base-href="/sonali-portfolio/"

# Then deploy dist/ folder

# For other hosts, base-href is usually "/"
ng build --base-href="/"
```

---

## Getting More Help

1. **Check Error Message**
   - Read full error in terminal
   - Google the exact error message

2. **Check VS Code Problems Tab**
   - Ctrl+Shift+M
   - Shows all TypeScript errors

3. **Check Browser Console**
   - F12 → Console tab
   - Shows runtime errors

4. **Check README.md**
   - Full project documentation

5. **Check Component Files**
   - Error stack trace usually shows exact file
   - Go to that file and line number

---

## Nuclear Option (Last Resort)

If nothing works:

```bash
# Remove everything
rm -rf node_modules package-lock.json dist/ .angular/

# Start fresh
npm install
npm start
```

This usually fixes 99% of issues!

---

**Still stuck?** Check the error message carefully - it usually tells you exactly what's wrong and where! 🔍
