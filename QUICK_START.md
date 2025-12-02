# TEBITA TECH - Quick Start Guide

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
```

Creates an optimized production build in the `.next` folder.

## Start Production Server

```bash
npm start
```

Runs the production build locally.

## Project Structure

```
project/
├── app/
│   ├── globals.css      # Global styles & animations
│   ├── layout.tsx       # Root layout & SEO metadata
│   └── page.tsx         # Main page with all sections
│
├── components/
│   ├── sections/        # Main page sections
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── Impact.tsx
│   │   ├── Portfolio.tsx
│   │   ├── Philosophy.tsx
│   │   └── Footer.tsx
│   │
│   └── ui-custom/       # Custom UI components
│       ├── CustomCursor.tsx
│       ├── LoadingScreen.tsx
│       └── ScrollProgress.tsx
│
└── Documentation/
    ├── QUICK_START.md (this file)
    ├── PROJECT_STRUCTURE.md
    ├── FEATURES.md
    └── IMPLEMENTATION_SUMMARY.md
```

## Key Sections

### 1. Navigation
- Circular menu button (top-right)
- Click to expand full-screen menu
- Smooth scroll to sections

### 2. Hero
- 3D liquid sphere with mouse tracking
- Main branding and tagline
- Scroll indicator

### 3. Impact (Services)
- Three main services
- Hover to expand details
- Side images with glassmorphism

### 4. Portfolio
- Horizontal scrolling gallery
- Hover for color transition
- Project metadata display

### 5. Philosophy
- Live-coding animation
- Company values and approach
- Split-screen design

### 6. Footer
- Contact information
- Social links
- Large CTA button

## Customization

### Colors
Edit in `app/globals.css`:
```css
:root {
  --void-black: #050505;
  --mist-white: #E0E0E0;
  --mercury-silver: #C0C0C0;
  --liquid-silver: #D4D4D4;
}
```

### Content
Edit component files in `components/sections/`:
- Text content
- Images (Pexels URLs)
- Links and contact info

### Typography
Modify fonts in `app/globals.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk...');
```

### Metadata
Update SEO in `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: 'Your Title',
  description: 'Your Description',
  // ...
};
```

## Technologies Used

- **Framework**: Next.js 13 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS
- **Fonts**: Space Grotesk, JetBrains Mono
- **Images**: Pexels Stock Photos
- **Icons**: Lucide React

## Performance

- Bundle Size: 12.1 kB (main)
- First Load: 91.5 kB (total)
- Export: Static HTML/CSS/JS
- Optimization: Automatic via Next.js

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `out`

### Static Hosting
```bash
npm run build
# Upload `.next` folder to any static host
```

## Features

✓ Monochromatic design (black, white, silver)
✓ Custom cursor with tracking
✓ Loading screen animation
✓ Scroll progress indicator
✓ Ripple menu expansion
✓ Mouse-reactive sphere
✓ Accordion services
✓ Horizontal gallery
✓ Live-coding effect
✓ Magnetic CTA button
✓ Fully responsive
✓ Accessibility compliant
✓ SEO optimized

## Troubleshooting

### Build Errors
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Port Already in Use
```bash
npm run dev -- -p 3001
```

### TypeScript Errors
```bash
npm run typecheck
```

## Support

For questions or issues:
- Check documentation files
- Review component code
- Verify Node.js version (≥18.x)

---

**Status: Production Ready ✓**

The website is fully functional and ready for deployment. All sections are implemented with smooth animations and responsive design.
