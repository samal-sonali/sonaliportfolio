# 🚀 Getting Started - Sonali Portfolio

Welcome to your premium Angular portfolio! This guide will help you get up and running in minutes.

## ✅ Prerequisites

Before starting, make sure you have:
- **Node.js** v18.x or higher ([Download](https://nodejs.org))
- **npm** v9.x or higher (comes with Node.js)
- A code editor (VS Code recommended)

Verify installation:
```bash
node -v
npm -v
```

## 🚀 Quick Start (Choose One)

### Option 1: Automated Setup (Recommended)

**Windows (PowerShell):**
```powershell
# Right-click the setup.ps1 file and select "Run with PowerShell"
# OR run in terminal:
.\setup.ps1
```

**Mac/Linux:**
```bash
chmod +x setup.sh
./setup.sh
```

### Option 2: Manual Setup

**Step 1: Install Dependencies**
```bash
npm install
```

Wait for completion (takes 2-5 minutes). You should see:
```
added 500+ packages in XXs
```

**Step 2: Start Development Server**
```bash
npm start
```

Your browser will automatically open to `http://localhost:4200` 🎉

**Step 3: Start Building**
Edit files in `src/app/` to customize your portfolio!

---

## 📂 Project Structure

```
sonali-portfolio/
├── src/
│   ├── app/
│   │   ├── pages/          # 9 page components
│   │   ├── shared/         # Navbar, Footer, etc.
│   │   ├── services/       # Business logic
│   │   └── app.component.ts
│   ├── styles/             # Global SCSS
│   ├── index.html          # HTML entry
│   └── main.ts             # Bootstrap
├── angular.json            # Angular config
├── package.json            # Dependencies
└── README.md               # Full documentation
```

---

## 🎯 Available Commands

```bash
# Start development server (opens browser)
npm start

# Build for production
npm run build:prod

# Watch mode (rebuild on file changes)
npm run watch

# Run tests
npm test

# Run linting
npm lint
```

---

## 📝 Customization

### 1. Update Your Information

**Home Page** - Edit `src/app/pages/home/home.component.ts`
```typescript
// Change name, roles, description, links
```

**About Section** - Edit `src/app/pages/about/about.component.ts`
```typescript
// Update timeline, achievements
```

**Skills** - Edit `src/app/pages/skills/skills.component.ts`
```typescript
// Add/remove skills and proficiency levels
```

**Projects** - Edit `src/app/pages/projects/projects.component.ts`
```typescript
// Add your projects with images and links
```

### 2. Change Colors

Edit `src/styles/global.scss`:
```scss
:root {
  --bg-primary: #030712;        // Background
  --color-primary: #3B82F6;     // Primary blue
  --color-secondary: #8B5CF6;   // Purple
  --color-accent: #06B6D4;      // Cyan
  --text-primary: #FFFFFF;      // White
  --text-muted: #94A3B8;        // Gray
}
```

### 3. Update Social Links

Edit components and update URLs:
- GitHub: Change `https://github.com`
- LinkedIn: Change `https://linkedin.com`
- Email: Change `sonali@example.com`

### 4. Add Your Images

1. Create folders:
   ```bash
   mkdir -p src/assets/images
   mkdir -p src/assets/icons
   ```

2. Place images in `src/assets/images/`

3. Reference in components:
   ```html
   <img src="assets/images/your-image.jpg" alt="Description">
   ```

---

## 🌐 Build & Deploy

### Build for Production
```bash
npm run build:prod
```

Output: `dist/sonali-portfolio/`

### Deploy Options

**GitHub Pages:**
```bash
# Install Angular deploy
npm install -g angular-cli-ghpages

# Deploy
ng build --base-href="/your-repo-name/"
ngh
```

**Vercel:**
1. Push code to GitHub
2. Connect repo to Vercel
3. Vercel auto-deploys on push

**Netlify:**
1. Connect GitHub repo
2. Build command: `npm run build:prod`
3. Publish directory: `dist/sonali-portfolio`

---

## 🐛 Troubleshooting

### Error: Port 4200 Already in Use
```bash
ng serve --port 4201
```

### Error: Dependencies Not Installing
```bash
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

### Error: Angular CLI Not Found
```bash
npm install -g @angular/cli@17
npm install
npm start
```

### TypeScript Errors in IDE
```bash
# Reload VS Code
Press: Ctrl+Shift+P > Reload Window
```

---

## 📚 Learn More

- [Angular Documentation](https://angular.io/docs)
- [Bootstrap Docs](https://getbootstrap.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [SCSS Guide](https://sass-lang.com/documentation)

---

## 📋 Deployment Checklist

Before deploying, verify:

- [ ] Updated your name and bio
- [ ] Added your projects
- [ ] Updated social media links
- [ ] Tested on mobile devices
- [ ] Theme toggle works (dark/light)
- [ ] All links work
- [ ] No console errors
- [ ] Lighthouse score > 90

---

## 💡 Tips & Tricks

### Hot Reload
Changes auto-save and reload in browser. No need to restart!

### Debugging
Open DevTools (F12) to see console logs and network requests.

### Responsive Testing
```bash
# While npm start is running
# Press F12 → Toggle device toolbar (Ctrl+Shift+M)
```

### Performance Testing
```bash
# Open DevTools → Lighthouse → Generate report
```

---

## 🎓 Next Steps

1. ✅ Install and run the project
2. ✅ Customize your information
3. ✅ Add your projects and images
4. ✅ Test on different devices
5. ✅ Deploy to the web
6. ✅ Share your portfolio!

---

## 📞 Support

- Check `README.md` for detailed documentation
- Review `COMPONENTS.md` for component details
- Check `FOLDER_STRUCTURE.md` for file organization

---

**Happy coding! 🚀**

Your premium portfolio awaits!
