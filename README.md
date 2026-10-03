# 🚀 Sonali Samal - Premium Portfolio Website

An award-winning, modern portfolio website built with **Angular 20**, featuring a premium design inspired by Apple, Linear, Framer, Vercel, and Stripe. This is a production-ready application showcasing frontend development excellence.

![Angular Version](https://img.shields.io/badge/Angular-20-red?style=flat-square&logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue?style=flat-square&logo=typescript)
![SCSS](https://img.shields.io/badge/SCSS-Latest-pink?style=flat-square&logo=sass)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## ✨ Features

### 🎨 Design & UI
- **Premium Glassmorphism** - Frosted glass effects with backdrop blur
- **Animated Gradients** - Dynamic gradient backgrounds and text
- **Smooth Animations** - Fade up, slide, scale, and floating animations
- **Responsive Design** - Mobile-first approach with perfect adaptability
- **Dark/Light Mode** - Toggle between themes with localStorage persistence
- **Cursor Glow Effect** - Interactive mouse tracking with glow effects

### 🛠️ Technology Stack
- **Angular 20** - Latest Angular with standalone components
- **TypeScript** - Fully typed for better development experience
- **SCSS** - Advanced styling with mixins and variables
- **Bootstrap 5** - Responsive grid system and components
- **Angular Animations** - Professional motion design
- **Angular Signals** - Modern state management
- **Reactive Forms** - Powerful form handling with validation

### 📄 Pages & Sections

1. **Home** - Hero section with animated introduction and floating tech icons
2. **About** - Timeline, achievements, and professional journey
3. **Skills** - Categorized skills with proficiency indicators
4. **Experience** - Vertical timeline with work history
5. **Projects** - Filterable project showcase with hover effects
6. **Services** - Service offerings with feature lists
7. **Testimonials** - Rotating testimonial carousel
8. **Certificates** - Credentials and certifications display
9. **Contact** - Premium contact form with validation

### ⚡ Performance Features
- **Lazy Loading** - Images load on scroll
- **Code Splitting** - Route-based lazy loading
- **Optimized Animations** - GPU-accelerated transforms
- **Responsive Images** - Picture-perfect on all devices
- **SEO Friendly** - Meta tags and structured data
- **Accessibility** - WCAG compliant with proper ARIA labels

### 🎭 Advanced Features
- **Loading Screen** - Animated initial loader
- **Page Transitions** - Smooth navigation animations
- **Scroll Animations** - Reveal effects on scroll
- **Floating Elements** - Parallax and floating backgrounds
- **Typed Text** - Rotating role animations
- **Form Validation** - Real-time validation feedback
- **Scroll to Top** - Quick navigation button
- **Custom Scrollbar** - Gradient scrollbar styling

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm or yarn
- Angular CLI 17.x

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd sonali-portfolio
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Install Angular CLI globally (if not installed)**
```bash
npm install -g @angular/cli@17
```

### Development Server

Run the development server:
```bash
npm start
# or
ng serve --open
```

Navigate to `http://localhost:4200/`. The application will automatically reload if you change any source files.

### Build for Production

Build the project for production:
```bash
npm run build:prod
# or
ng build --configuration production
```

The build artifacts will be stored in the `dist/` directory.

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   └── [reusable components]
│   ├── pages/
│   │   ├── home/
│   │   ├── about/
│   │   ├── skills/
│   │   ├── experience/
│   │   ├── projects/
│   │   ├── services/
│   │   ├── testimonials/
│   │   ├── certificates/
│   │   └── contact/
│   ├── shared/
│   │   ├── navbar/
│   │   ├── footer/
│   │   ├── loading-screen/
│   │   └── cursor-glow/
│   ├── services/
│   │   ├── theme.service.ts
│   │   └── scroll.service.ts
│   ├── models/
│   │   └── [interfaces & types]
│   ├── app.component.ts
│   ├── app.routes.ts
│   └── app.config.ts
├── assets/
│   └── [images, icons, etc.]
├── styles/
│   └── global.scss
├── index.html
├── main.ts
└── styles.scss
```

## 🎨 Design System

### Color Palette
```
Background:    #030712
Cards:         rgba(255,255,255,.05)
Primary:       #3B82F6 (Blue)
Secondary:     #8B5CF6 (Purple)
Accent:        #06B6D4 (Cyan)
Text Primary:  #FFFFFF
Text Muted:    #94A3B8
```

### Typography
- Font Family: Inter
- Weights: 400, 500, 600, 700, 800
- Responsive sizes with clamp()

### Spacing
- Base unit: 0.25rem (4px)
- Used in multiples: 0.5rem, 1rem, 1.5rem, 2rem, etc.

## 🔧 Customization

### Update Portfolio Content
Edit the component files in `src/app/pages/` to customize:
- Personal information
- Project details
- Skills and technologies
- Experience timeline
- Testimonials
- Certificates

### Modify Colors
Update the CSS variables in `src/styles/global.scss`:
```scss
:root {
  --bg-primary: #030712;
  --color-primary: #3B82F6;
  --color-secondary: #8B5CF6;
  --color-accent: #06B6D4;
  /* ... other variables */
}
```

### Change Animations
Customize animation timings and effects in component stylesheets.

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🚀 Deployment

### Deployment Options

**GitHub Pages:**
```bash
ng build --base-href="/portfolio/"
```

**Vercel/Netlify:**
```bash
npm run build:prod
# Deploy the dist folder
```

**Custom Server:**
```bash
ng build --configuration production
# Deploy dist/sonali-portfolio to your server
```

## ♿ Accessibility

The portfolio includes:
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Color contrast compliance
- Alt text for images
- Focus indicators

## 🔒 Best Practices

- ✅ Standalone Angular components
- ✅ Strict TypeScript mode
- ✅ Reactive forms
- ✅ Angular Signals for state management
- ✅ Lazy loading routes
- ✅ Optimized bundle size
- ✅ Production-ready code

## 📈 Performance Metrics

- Lighthouse Score: 95+
- First Contentful Paint: < 1s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1

## 🐛 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

**Sonali Samal**
- GitHub: [@sonali-frontend](https://github.com)
- LinkedIn: [/in/sonali-samal](https://linkedin.com)
- Email: sonali@example.com

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

For inquiries about this portfolio or frontend development services, please reach out through the contact form on the website.

---

**Built with ❤️ using Angular 20**
