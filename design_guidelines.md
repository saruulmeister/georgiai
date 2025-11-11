# Georgi AI Marketing Site - Design Guidelines

## Design Approach
**Reference-Based**: Drawing from modern fintech and SaaS leaders (Stripe, Linear, Vercel) combined with premium VC aesthetic (Sequoia, a16z). Dark, sophisticated, trustworthy.

## Core Visual System

### Typography
- **Headlines**: Inter or Space Grotesk, 700-800 weight, 48-72px hero, 32-40px sections
- **Subheadings**: 24-28px, 600 weight
- **Body**: Inter, 16-18px, 400 weight, increased line-height (1.7) for readability
- **Accent text**: 14px, 500 weight, letter-spacing: 0.05em for labels/tags

### Layout System
**Spacing Units**: Tailwind 4, 6, 8, 12, 16, 20, 24, 32 for consistent rhythm
- **Section padding**: py-20 desktop, py-12 mobile
- **Container**: max-w-7xl with px-6 for generous breathing room
- **Card spacing**: p-8 for content, gap-8 between cards

### Component Library

**Navigation**
- Sticky header with backdrop blur and subtle border-bottom
- Logo left, navigation center, "Book a Demo" button right (gradient, prominent)
- Height: 72px, semi-transparent dark background

**Cards**
- Rounded-2xl borders, dark background with subtle lighter fill
- Soft shadow (shadow-xl with reduced opacity)
- Border: 1px solid with 10% white overlay for definition
- Hover: Subtle lift (translate-y-1) and increased shadow

**Buttons**
- Primary (CTA): Gradient indigo-to-blue, rounded-lg, px-8 py-3, bold text
- Secondary: Outlined, border-2, transparent background
- Blur backgrounds when over images

**Form Elements**
- Dark inputs with light borders, rounded-lg
- Focused state: Indigo glow (ring-2)
- Generous padding (px-4 py-3)

## Section-Specific Design

**Hero Section**
- Full viewport height (90vh) with centered content
- Large gradient headline with subtle animation
- Two-column on desktop: Left (headline + CTAs), Right (dashboard preview image/graphic)
- Dual CTAs: Primary gradient + Secondary outlined

**Problem Section**
- 3-column grid of problem cards (2-col tablet, 1-col mobile)
- Each card: Icon top, bold title, concise description
- Icons: Simple line icons in indigo accent color

**Features Section**
- Alternating layout: Feature card left, visual right, then reversed
- 4-5 key features with detailed descriptions
- Use subtle gradient backgrounds for visual separation

**Why Georgi Section**
- 3-column benefit cards with metrics/stats
- Large numbers/stats in gradient text
- Short compelling copy beneath each stat

**Team Section**
- 4-column grid (3-col tablet, 2-col mobile) of profile cards
- Circular headshots, name, title, LinkedIn icon link
- Consistent card treatment matching other sections

**Contact/Demo Form**
- Two-column layout: Form left (60%), context right (40%)
- Form fields: Name, Email, Company, Message (textarea)
- Large submit button with gradient
- Right side: Contact info, response time, trust indicators

## Images

**Hero Background**: Subtle abstract gradient mesh or flowing particles suggesting AI/data, very dark with indigo highlights, positioned behind content

**Feature Visuals**: Dashboard screenshots or UI mockups showing Georgi interface (4-5 images), use subtle shadows and rounded corners, positioned as alternating right/left placements

**Team Photos**: Professional headshots against neutral backgrounds, circular crop, 200x200px minimum

**No stock photos** - use abstract graphics, interface mockups, or data visualizations that feel native to the product

## Animations
- Subtle scroll-triggered fade-ins for section content (stagger children)
- Smooth scroll behavior for navigation links
- Hover states: Cards lift slightly, buttons brighten
- **Minimize elsewhere** - keep focus on content clarity

## Accessibility
- WCAG AA contrast ratios (challenging with dark theme - ensure sufficient contrast)
- Clear focus indicators with indigo ring
- Semantic HTML throughout
- Form labels and ARIA attributes

## Dark Theme Execution
- **Background**: Slate-900 base (#0f172a)
- **Surface**: Slate-800 for cards (#1e293b)
- **Accents**: Indigo-500 to Blue-500 gradients
- **Text**: White primary, Slate-300 secondary
- **Borders**: Slate-700 with subtle white overlay

This creates a premium, trustworthy experience that communicates sophistication and technical excellence to VC/PE audiences.