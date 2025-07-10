# Portfolio Website Branding Guide

## Core Design Philosophy
Modern, sophisticated dark theme with glass morphism effects and vibrant sky blue accents. The design emphasizes professionalism, technical expertise, and attention to detail through subtle animations and premium visual effects.

## Color Palette

### Primary Colors
- **Background Base**: `#030712` (gray-950)
- **Background Gradient**: `from-gray-950 via-gray-900 to-black`
- **Hero Background**: `from-black via-sky-950 to-black`

### Accent Colors
- **Primary Accent**: Sky Blue Gradient `from-sky-300 to-sky-500` (#7dd3fc to #0ea5e9)
- **Text Glow**: Sky cyan with shadow `[text-shadow:0_0_10px_rgba(0,242,255,0.5)]`
- **Interactive Hover**: `sky-300` (#7dd3fc)

### Component Colors
- **Card Background**: `from-gray-800 via-slate-900 to-gray-800`
- **Borders**: `border-sky-900/50` or `border-gray-700`
- **Tags/Pills**: `bg-sky-900/50 text-sky-300`
- **Glass Effect**: `bg-white/6 backdrop-blur-xl border-white/25`

## Typography

### Font System
- **Primary Font**: 'Open Sans', sans-serif
- **Font Smoothing**: antialiased
- **Text Color**: White/gray scale for contrast

### Font Sizes
- **Hero Title**: `text-6xl md:text-9xl`
- **Section Headings**: `text-3xl md:text-4xl`
- **Subheadings**: `text-xl md:text-2xl`
- **Body Text**: `text-sm` to `text-lg`
- **Small Text**: `text-xs` to `text-sm`

### Font Weights
- Regular (400) for body text
- Medium (500) for emphasis
- Semibold (600) for subheadings
- Bold (700) for primary headings

## Component Styling

### Glass Morphism Theme
All interactive elements use pure glass effect:
```
bg-white/6 backdrop-blur-xl text-white border border-white/25 
hover:bg-white/10 hover:border-white/40 hover:shadow-[0_10px_40px_rgba(255,255,255,0.12)]
```

### Standard Spacing
- **Container**: `max-w-6xl mx-auto px-6`
- **Section Padding**: `py-20`
- **Component Gaps**: `gap-6` to `gap-8`
- **Card Padding**: `p-6` to `p-8`

### Border Radius
- **Cards/Containers**: `rounded-lg`
- **Buttons/Pills**: `rounded-full`
- **Small Elements**: `rounded-md`

## Animation & Interactions

### Transition Standards
- **Duration**: `duration-300` (standard), `duration-700` (emphasis)
- **Easing**: Default with `ease-out` for custom animations
- **Properties**: `transition-all` for comprehensive coverage

### Hover Effects
- **Scale**: `hover:scale-110` for small elements
- **Opacity**: Increase on hover for interactive elements
- **Color**: Transition to `sky-300` for links/buttons
- **Shadow**: Add glow effects on hover

### Scroll Animations
- **Pattern**: Fade in with upward movement
- **Hidden State**: `opacity-0 translate-y-8`
- **Visible State**: `opacity-100 translate-y-0`
- **Stagger**: Dynamic delays for sequential reveals

## Special Effects

### Visual Effects
- **Text Gradients**: `bg-gradient-to-r bg-clip-text text-transparent`
- **Glow Effects**: Custom text shadows with sky blue
- **Glass Morphism**: Backdrop blur with low opacity backgrounds
- **Canvas Cursor**: Interactive mouse trail in hero section

### Layout Patterns
- **Grid Systems**: Responsive with `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- **Flex Layouts**: Primary for component organization
- **Z-indexing**: Minimal, only for overlapping elements

## Implementation Guidelines

### Consistency Rules
1. Always use Tailwind utility classes
2. Maintain glass morphism theme across all interactive elements
3. Use sky blue gradient for primary headings
4. Apply consistent hover states and transitions
5. Follow mobile-first responsive design

### Performance Considerations
1. Minimize custom CSS
2. Use CSS transforms for animations
3. Implement lazy loading for heavy components
4. Optimize backdrop filters for performance

### Accessibility
1. Maintain high contrast ratios
2. Provide hover/focus states for all interactive elements
3. Use semantic HTML structure
4. Include proper ARIA labels where needed

## Quick Reference for AI/LLM Usage

When implementing new features or modifications:
1. **Background**: Use `bg-gray-950` or gradient variations
2. **Text**: White with sky blue accents for emphasis
3. **Buttons**: Apply glass morphism theme from `theme-config.ts`
4. **Animations**: 300ms transitions with `translate-y` for reveals
5. **Spacing**: Follow `py-20` for sections, `p-6` for cards
6. **Interactive**: Add `hover:scale-110` and color transitions
7. **Headings**: Use sky blue gradient with text shadow glow