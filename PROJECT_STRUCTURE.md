# TEBITA TECH - Liquid Obsidian Website

## Design Philosophy: "Liquid Obsidian"

Technology is fluid. A single line of code (a droplet) creates a ripple effect of automation and utility.

## Color Palette

- **Void Black (#050505)**: Deep, matte background
- **Mist White (#E0E0E0)**: Primary text, softened for eye comfort
- **Mercury Silver (#C0C0C0)**: Interactive elements with liquid metal effect

## Typography

- **Headers**: Space Grotesk (Clean, geometric, authoritative)
- **Body/Code**: JetBrains Mono (Technical, precise)

## Sections

### 1. Navigation
- Circular ripple-expansion menu
- Minimal, elegant navigation experience

### 2. Hero Section
- 3D liquid mercury sphere with distortion effects
- Mouse-reactive surface tension simulation
- Reflected code terminal in sphere

### 3. Impact Section (Services)
- Vertical accordion list of services
- Hover-triggered image reveals with glassmorphism
- Three core services:
  - Artificial Intelligence
  - Full Stack Architecture
  - Hyper-Automation

### 4. Portfolio Section
- Horizontal scrolling gallery
- Grayscale to color transition on hover
- Project cards with metadata

### 5. Philosophy Section
- Live-coding animation
- Split-screen design philosophy explanation
- Real-time code writing/erasing effect

### 6. Footer
- Magnetic button with cursor attraction
- Social links and contact information
- Grid layout with service links

## Interactive Features

- **Custom Cursor**: Dual-ring cursor with pointer detection
- **Loading Screen**: Animated progress bar
- **Scroll Progress**: Top-of-page progress indicator
- **Ripple Effects**: Hover-triggered distortion effects
- **Glassmorphism**: Frosted glass UI elements
- **Smooth Scrolling**: Momentum-based scroll physics

## Tech Stack

- **Framework**: Next.js 13 (React)
- **Styling**: Tailwind CSS + Custom CSS
- **Fonts**: Google Fonts (Space Grotesk, JetBrains Mono)
- **Images**: Pexels stock photos
- **Animations**: CSS transitions and transforms
- **Export**: Static HTML/CSS/JS

## File Structure

```
app/
├── globals.css          # Global styles & animations
├── layout.tsx           # Root layout & metadata
└── page.tsx            # Main entry point

components/
├── sections/
│   ├── Navigation.tsx   # Ripple menu
│   ├── Hero.tsx        # Liquid sphere section
│   ├── Impact.tsx      # Services accordion
│   ├── Portfolio.tsx   # Horizontal gallery
│   ├── Philosophy.tsx  # Split-screen philosophy
│   └── Footer.tsx      # Contact & CTA
└── ui-custom/
    ├── CustomCursor.tsx     # Dual-ring cursor
    ├── LoadingScreen.tsx    # Initial loader
    └── ScrollProgress.tsx   # Top progress bar
```

## Key Features

1. **Monochromatic Excellence**: Strictly black, white, and silver tones
2. **Physics-Based Interactions**: Distortion maps, surface tension effects
3. **Performance Optimized**: Static export, minimal dependencies
4. **Responsive Design**: Mobile-first approach with breakpoints
5. **Accessibility**: ARIA labels, keyboard navigation support

## Build Commands

```bash
npm run dev      # Development server
npm run build    # Production build
npm run start    # Start production server
```

## Design Principles

- **Show, Don't Tell**: Advanced DOM manipulation proves technical expertise
- **Confident Minimalism**: Clean design without decoration
- **Memorable Experience**: Unique "Dark Liquid" aesthetic
- **Professional Polish**: Attention to micro-interactions and details
