# 📦 Component Documentation

## Project Overview

This is an award-winning portfolio website built with Angular 20, featuring premium modern design inspired by Apple, Linear, Framer, Vercel, and Stripe.

## 🏗️ Architecture

### Standalone Components
All components use Angular's standalone component architecture for better modularity and reduced boilerplate.

### Project Structure
```
src/app/
├── pages/              # Full-page components
│   ├── home/
│   ├── about/
│   ├── skills/
│   ├── experience/
│   ├── projects/
│   ├── services/
│   ├── testimonials/
│   ├── certificates/
│   └── contact/
├── shared/            # Reusable layout components
│   ├── navbar/
│   ├── footer/
│   ├── loading-screen/
│   └── cursor-glow/
├── services/          # Business logic
│   ├── theme.service.ts
│   └── scroll.service.ts
├── models/            # TypeScript interfaces
├── app.component.ts   # Root component
├── app.routes.ts      # Routing configuration
└── styles/            # Global styles
```

## 📄 Page Components

### 1. **Home Component** (`home.component.ts`)
**Features:**
- Full-screen hero section with gradient mesh background
- Animated introduction with rotating roles
- Floating tech icons with parallax effects
- Call-to-action buttons
- Social proof badges
- Quick statistics cards
- Smooth scroll animations

**Key Elements:**
- Hero text section with greeting animation
- Glass card with floating tech icons
- Scroll indicator with mouse animation
- Quick stats grid with counters
- Role carousel (Angular Developer, Frontend Developer, UI Developer)

### 2. **About Component** (`about.component.ts`)
**Features:**
- Professional image placeholder
- Career timeline with animated markers
- Milestone descriptions
- Animated entrance effects

**Timeline Milestones:**
1. Started Frontend Journey
2. CRM Development Experience
3. Full Stack Growth
4. Design & Development Lead

### 3. **Skills Component** (`skills.component.ts`)
**Features:**
- Categorized skill cards (Frontend, Backend, Design, Tools)
- Animated skill badges
- Proficiency level indicators with progress bars
- Hover effects on skill items

**Skill Categories:**
1. **Frontend**: Angular, React, HTML5, CSS3, SCSS, Bootstrap, Tailwind, TypeScript, JavaScript
2. **Backend & APIs**: PHP, CodeIgniter, Laravel, REST APIs, Node.js, Express.js
3. **Design & Tools**: Figma, Canva, Adobe XD, UI/UX Design
4. **Tools & Platforms**: Git, GitHub, VS Code, Webpack, Jest, Docker

### 4. **Experience Component** (`experience.component.ts`)
**Features:**
- Vertical animated timeline
- Experience cards with company info
- Technology tags for each role
- Date ranges and descriptions

**Experience Entries:**
1. Senior Frontend Developer (2024 - Present)
2. Frontend Developer (2023 - 2024)
3. Junior Frontend Developer (2022 - 2023)

### 5. **Projects Component** (`projects.component.ts`)
**Features:**
- Filterable project showcase
- Project cards with hover overlays
- Live demo and GitHub links
- Category filtering (All, Angular, React, Fullstack)
- Animated project cards

**Sample Projects:**
1. CRM Application (Angular)
2. E-Commerce Platform (React)
3. Admin Dashboard (Angular)
4. Social Media App (React)
5. AI Chat Interface (React)
6. Project Management Tool (Angular)

### 6. **Services Component** (`services.component.ts`)
**Features:**
- Service cards with icons
- Feature lists for each service
- Hover animations
- Responsive grid layout

**Services Offered:**
1. Web Development
2. Angular Development
3. UI/UX Design
4. Dashboard Design
5. API Integration
6. Landing Pages

### 7. **Testimonials Component** (`testimonials.component.ts`)
**Features:**
- Automated carousel rotation
- Star ratings
- Manual navigation dots
- Smooth transitions between testimonials
- Glass card design

**Features:**
- 4 rotating testimonials
- Star rating display
- Author name and title
- Auto-rotate every 5 seconds
- Manual navigation support

### 8. **Certificates Component** (`certificates.component.ts`)
**Features:**
- Certificate cards with issuer info
- Dates and credential links
- Icon representation
- Hover effects

**Certificates:**
1. Angular Mastery (Udemy)
2. React Advanced Patterns (Frontend Masters)
3. UI/UX Design Fundamentals
4. Web Performance Optimization
5. TypeScript Professional
6. Full Stack Web Development

### 9. **Contact Component** (`contact.component.ts`)
**Features:**
- Professional contact form with validation
- Reactive Forms implementation
- Contact information display
- Social media links
- Success message feedback

**Form Fields:**
- Name (required)
- Email (required, email validation)
- Subject (required)
- Message (required, min 10 chars)

**Contact Methods:**
- Email: sonali@example.com
- LinkedIn: /in/sonali-samal
- GitHub: @sonali-frontend
- Location: Hyderabad, India

## 🎨 Shared Components

### 1. **Navbar Component** (`navbar.component.ts`)
**Features:**
- Fixed navigation bar
- Logo with gradient text and animated dot
- Navigation links with active state highlighting
- Theme toggle button (dark/light mode)
- Social media links
- Hamburger menu for mobile
- Scroll detection for background blur effect
- Smooth transitions

**Functionality:**
- Router links to all pages
- Active route highlighting
- Mobile responsive hamburger menu
- Theme switching
- GitHub and LinkedIn links
- Sticky navigation with blur effect on scroll

### 2. **Footer Component** (`footer.component.ts`)
**Features:**
- Company information section
- Quick links navigation
- Services overview
- Social media connections
- Scroll to top button
- Footer divider animation
- Responsive grid layout

**Sections:**
- About information
- Quick links
- Services links
- Social media icons
- Copyright and back-to-top button

### 3. **Loading Screen Component** (`loading-screen.component.ts`)
**Features:**
- Initial page loader
- Animated logo
- Animated loading bars
- Gradient effects
- Fade out animation on completion

**Animation:**
- Scaling logo entrance
- Animating loading bars
- Pulsing text
- Smooth fade out

### 4. **Cursor Glow Component** (`cursor-glow.component.ts`)
**Features:**
- Mouse tracking for interactive glow effect
- Dual circle effect (primary and secondary)
- Performance optimized
- Only visible on hover-capable devices

**Features:**
- Real-time mouse position tracking
- Dual border circles with gradient glow
- Smooth following animation
- Desktop-only (hidden on touch devices)

## 🔧 Services

### 1. **Theme Service** (`theme.service.ts`)
**Functionality:**
- Manages light/dark mode switching
- Persists theme preference in localStorage
- Respects system color scheme preference
- Applies theme to DOM

**Methods:**
- `initTheme()`: Initialize theme on app start
- `toggleTheme()`: Switch between light and dark modes
- `isDarkMode()`: Signal for current theme state

### 2. **Scroll Service** (`scroll.service.ts`)
**Functionality:**
- Detects scroll position
- Identifies active section on scroll
- Smooth scroll to element
- Calculates scroll progress

**Methods:**
- `scrollToElement(elementId)`: Scroll to specific section
- `scrollToTop()`: Scroll to top
- `isScrolled()`: Check if page is scrolled
- `getScrollProgress()`: Get scroll percentage

## 🎨 Design System

### Colors
```
Background:    #030712 (Dark navy)
Cards:         rgba(255,255,255,0.05) (Semi-transparent white)
Primary:       #3B82F6 (Bright blue)
Secondary:     #8B5CF6 (Purple)
Accent:        #06B6D4 (Cyan)
Text Primary:  #FFFFFF (White)
Text Muted:    #94A3B8 (Gray)
```

### Typography
- **Font Family**: Inter (system font fallback)
- **Weights**: 400, 500, 600, 700, 800
- **Line Heights**: 1.2 (headings), 1.6 (body), 1.8 (paragraphs)

### Spacing System
- Base unit: 0.25rem (4px)
- Scale: 0.5rem, 1rem, 1.5rem, 2rem, 2.5rem, 3rem, 4rem, 6rem

### Border Radius
- `--border-radius-sm`: 12px (small elements)
- `--border-radius-md`: 16px (cards)
- `--border-radius-lg`: 24px (large sections)

## ✨ Animation Library

### Keyframe Animations
- `float`: Vertical floating effect (3-25s duration)
- `wave`: Hand waving animation
- `slideInOut`: Text carousel effect
- `gradient-shift`: Gradient color rotation
- `spin`: 360° rotation
- `bounce`: Vertical bounce effect
- `wheel-scroll`: Mouse wheel animation
- `pulse`: Opacity pulsing
- `fadeUp`: Fade in with upward movement
- `slideLeft`: Slide in from right with fade
- `slideRight`: Slide in from left with fade
- `fillProgress`: Progress bar fill animation

### Animation Utilities
- `.fade-up`: Fade up entrance
- `.slide-left`: Slide left entrance
- `.slide-right`: Slide right entrance
- `.scale-in`: Scale entrance
- `.delay-1` to `.delay-5`: Animation delays

## 🚀 Performance Features

### Lazy Loading
- Images load on scroll with Intersection Observer
- Route-based lazy loading via Angular Router
- Dynamic component imports

### Optimization
- GPU-accelerated animations (transform, opacity)
- Minimal reflows with CSS transforms
- Efficient event handling with debouncing
- Responsive images with max-width constraints

### Accessibility
- Semantic HTML elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Color contrast compliance (WCAG AA+)
- Focus indicators on buttons and links

## 📱 Responsive Breakpoints

```scss
Mobile:  < 480px
Tablet:  480px - 768px
Desktop: 768px - 1024px
Large:   > 1024px
XL:      > 1200px
```

## 🔗 Routing

```typescript
Routes:
/          -> Home
/about     -> About
/skills    -> Skills
/experience -> Experience
/projects  -> Projects
/services  -> Services
/testimonials -> Testimonials
/certificates -> Certificates
/contact   -> Contact
```

## 📦 Dependencies

### Core
- `@angular/core`: Angular framework
- `@angular/common`: Common directives
- `@angular/router`: Routing
- `@angular/forms`: Form handling
- `@angular/animations`: Animation support

### Utilities
- `bootstrap`: CSS framework
- `rxjs`: Reactive programming
- `zone.js`: Zone management

## 🎯 Key Features Summary

✅ 9 Full-page components
✅ 4 Shared layout components
✅ 2 Business logic services
✅ Responsive design (mobile-first)
✅ Dark/Light mode switching
✅ Smooth animations and transitions
✅ Glassmorphism UI effects
✅ Interactive hover states
✅ Scroll animations and effects
✅ Form validation with feedback
✅ Social media integration
✅ Performance optimized
✅ Accessibility compliant
✅ Production-ready code
✅ TypeScript strict mode

## 📝 Code Quality

- Standalone components
- Typed with TypeScript
- Reactive patterns
- Angular Signals for state
- Proper error handling
- Comments and documentation
- Clean code practices
- SOLID principles

---

For more information, see README.md and SETUP.md
