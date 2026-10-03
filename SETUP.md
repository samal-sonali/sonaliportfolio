# 🚀 Quick Start Guide

## Prerequisites
- **Node.js**: v18.x or higher
- **npm**: v9.x or higher (comes with Node.js)
- **Angular CLI**: v17.x (will be installed with dependencies)

## Installation Steps

### Step 1: Install Dependencies
```bash
cd sonali-portfolio
npm install
```

This will install all required packages:
- Angular 20
- Bootstrap 5
- RxJS
- TypeScript

### Step 2: Start Development Server
```bash
npm start
```

The application will automatically open in your browser at `http://localhost:4200`

### Step 3: Open in Your Browser
Navigate to `http://localhost:4200` to see the portfolio in action!

## Available Commands

```bash
# Start development server
npm start
# or
ng serve --open

# Build for production
npm run build:prod
# or
ng build --configuration production

# Watch mode (rebuild on file changes)
npm run watch

# Run tests
npm test

# Run linting
npm lint
```

## 🎯 Project Structure

The project is organized following Angular best practices:

```
src/
├── app/
│   ├── pages/              # Page components (home, about, skills, etc.)
│   ├── shared/             # Shared components (navbar, footer, etc.)
│   ├── services/           # Angular services
│   ├── app.component.ts    # Root component
│   └── app.routes.ts       # Route configuration
├── assets/                 # Static assets
├── styles/                 # Global SCSS styles
├── index.html             # Main HTML file
└── main.ts               # Bootstrap file
```

## 📝 Key Features

✅ **Premium Modern Design** - Inspired by Apple, Linear, Framer, Vercel
✅ **Glassmorphism Effects** - Modern UI with blur and transparency
✅ **Smooth Animations** - Professional motion design throughout
✅ **Responsive Design** - Perfect on all devices
✅ **Dark/Light Mode** - Theme switching capability
✅ **Interactive Elements** - Hover effects, animations, transitions
✅ **Performance Optimized** - Lazy loading, code splitting
✅ **Accessibility** - WCAG compliant

## 🎨 Customization

### Update Your Information

1. **Home Page**: Edit `src/app/pages/home/home.component.ts`
   - Change name, roles, and description
   - Update social links

2. **About Section**: Edit `src/app/pages/about/about.component.ts`
   - Modify timeline entries
   - Update personal information

3. **Skills Section**: Edit `src/app/pages/skills/skills.component.ts`
   - Add/remove skills
   - Update proficiency levels

4. **Projects**: Edit `src/app/pages/projects/projects.component.ts`
   - Add your projects
   - Update links and descriptions

5. **Contact Information**: Edit `src/app/pages/contact/contact.component.ts`
   - Update email and social links
   - Modify contact methods

### Modify Colors

Edit `src/styles/global.scss` to change the color scheme:

```scss
:root {
  --bg-primary: #030712;          // Background
  --color-primary: #3B82F6;       // Primary blue
  --color-secondary: #8B5CF6;     // Secondary purple
  --color-accent: #06B6D4;        // Accent cyan
  --text-primary: #FFFFFF;        // White text
  --text-muted: #94A3B8;         // Muted gray
}
```

## 🌐 Deployment

### GitHub Pages
```bash
ng build --base-href="/portfolio/"
ng deploy
```

### Vercel
```bash
npm run build:prod
# Connect your GitHub repo to Vercel
```

### Netlify
```bash
npm run build:prod
# Deploy the dist/sonali-portfolio folder
```

## 🔍 File Structure Details

### Component Architecture

Each page component follows this structure:
```
component-name/
├── component-name.component.ts      # Component logic
└── styles (inline)                  # Component styles
```

### Services

- **ThemeService**: Manages dark/light mode
- **ScrollService**: Handles scroll detection and animations

### Shared Components

- **NavbarComponent**: Navigation with theme toggle
- **FooterComponent**: Footer with social links
- **LoadingScreenComponent**: Initial page loader
- **CursorGlowComponent**: Interactive cursor tracking

## 📱 Responsive Design

The portfolio is fully responsive:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px  
- **Mobile**: Below 768px

Test responsiveness:
```bash
# Open DevTools and toggle device toolbar
# Or use: npm start and resize browser
```

## 🐛 Troubleshooting

### Port Already in Use
```bash
ng serve --port 4201
```

### Dependencies Not Installing
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
```bash
# Clear Angular cache
ng cache clean
npm install
npm run build:prod
```

## 📚 Resources

- [Angular Documentation](https://angular.io/docs)
- [Bootstrap Documentation](https://getbootstrap.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [SCSS Documentation](https://sass-lang.com/documentation)

## 🎓 Learning Resources

- Understand Angular routing: Study `app.routes.ts`
- Learn animations: Check component stylesheets
- Responsive design: Review `global.scss` media queries
- State management: Look at service implementations

## ✅ Checklist Before Deployment

- [ ] Update all personal information
- [ ] Replace placeholder images
- [ ] Update social media links
- [ ] Test on multiple devices
- [ ] Check accessibility (Lighthouse)
- [ ] Optimize images
- [ ] Test form submission
- [ ] Verify all links work
- [ ] Test dark/light mode toggle
- [ ] Check performance metrics

## 🚀 Production Build

```bash
# Create optimized production build
npm run build:prod

# Build output in: dist/sonali-portfolio/

# Test production build locally
npx http-server dist/sonali-portfolio/
```

## 📞 Support

For issues or questions:
1. Check the README.md
2. Review component comments
3. Check Angular documentation
4. Raise an issue on GitHub

---

**Happy coding! 🎉**
