# Design Guidelines: Descent into Rajasthan - The Secret Life of Stepwells

## Design Approach

**Reference-Based Approach** drawing inspiration from:
- **Apple's product pages**: Scroll-driven narrative and cinematic transitions
- **The Boat (SBS)**: Immersive parallax storytelling
- **Airbnb Experiences**: Cultural storytelling with rich imagery
- **Neal.fun projects**: Playful interactivity with educational depth

**Core Principle**: Create a descending journey that mimics physically walking down into a stepwell, with each scroll revealing deeper layers of history, architecture, and culture.

## Typography System

**Primary Font**: 'Crimson Pro' (Google Fonts) - Elegant serif for storytelling
- Hero Headlines: 72px (desktop) / 48px (mobile), font-weight 600
- Section Headers: 48px (desktop) / 32px (mobile), font-weight 500
- Body Text: 20px, font-weight 400, line-height 1.8
- Captions/Labels: 14px, font-weight 400, uppercase tracking

**Secondary Font**: 'Inter' (Google Fonts) - Clean sans-serif for UI elements
- Interactive Labels: 16px, font-weight 500
- Navigation: 14px, font-weight 600

## Layout & Spacing System

**Tailwind Spacing Units**: Use 4, 8, 16, 24, 32 units consistently
- Section padding: py-32 (desktop) / py-16 (mobile)
- Component spacing: gap-8 or gap-16
- Content containers: max-w-6xl for narrative, max-w-prose for text blocks

**Viewport Strategy**: 
- Hero: Full viewport (100vh) for impact
- Story sections: Natural height based on content (80vh-120vh range)
- Interactive elements: Centered within their viewport sections

## Color Palette (Rajasthani Miniature Painting Inspired)

Deep indigo blues, terracotta oranges, sandstone beiges, and gold accents will be specified in separate styling phase.

## Section Structure (5 Main Chapters)

### 1. Hero Section (Full Viewport)
- Large atmospheric image: Aerial view of Chand Baori stepwell at golden hour
- Centered typography overlay with blurred background button
- Headline: "Descent into Rajasthan" with animated water ripple effect on scroll hint
- Scroll indicator with gentle pulse animation

### 2. "The Surface" - Introduction (80vh)
- Split layout: 60% immersive stepwell entrance image (left) / 40% text (right) on desktop
- Animated step counter showing "3,500 steps descending"
- Floating stat cards with key facts (build date, depth, architectural style)
- Parallax scrolling with image moving slower than text

### 3. "First Landing" - Social Life (Full viewport)
- Interactive hotspot image: Women gathering at stepwell mid-level
- 4-6 clickable zones revealing stories (water collection rituals, gossip culture, refuge from heat)
- Modal overlays with archival illustrations and narrative text
- Background: Historical painting of stepwell social scene

### 4. "The Descent" - Architecture (120vh)
- 3D interactive cross-section of stepwell in center
- Scroll to rotate and zoom into architectural details
- Side annotations appearing progressively: geometric patterns, engineering genius, symmetry
- Technical diagrams fade in/out as user explores

### 5. "The Depths" - Water & Ecology (100vh)
- Animated water level visualization
- Before/after slider: Abandoned (dry) vs. Restored (water-filled) stepwell
- Timeline showing seasonal water changes
- Ecological impact statistics with icon illustrations

### 6. "Ascent" - Modern Context (80vh)
- Photo grid of current stepwell conditions (3x3 masonry layout)
- Preservation stories with hover reveals
- Call-to-action: "Explore more heritage sites" with map integration

## Interactive Components

**3D Stepwell Model**:
- Three.js implementation with orbital controls
- Subtle ambient lighting to highlight carved details
- Tap/click zones for architectural feature popups

**Audio Integration**:
- Ambient sound layers: Wind → water echoes → distant voices
- Triggered by scroll position, fade between sections
- Mute toggle in fixed top-right corner

**Scroll Animations**:
- Parallax depth on all image backgrounds
- Fade-in for text blocks (stagger by 100ms per line)
- Number counters animating on entrance
- Smooth scroll-snapping between major sections

## Navigation

**Fixed Header** (after hero):
- Minimal: Logo left, section indicators center, sound toggle right
- Glass morphism effect (backdrop-blur)
- Progress bar showing descent depth (0-100%)

**Section Indicators**: 
- Vertical dots on right edge (desktop only)
- Active state highlighting current chapter

## Images Required

1. **Hero**: Dramatic aerial/wide shot of Chand Baori or similar stepwell (high-res, golden hour lighting)
2. **Social scene**: Historical painting or staged photo of women at stepwell
3. **Architectural details**: Close-ups of carved pillars, geometric patterns (6-8 images)
4. **Before/After**: Matched pairs of abandoned vs. restored stepwells (2 images)
5. **Modern photos**: Current state documentation (9 images for grid)
6. **Textures**: Sandstone, water reflections for backgrounds (3-4)

## Accessibility & Performance

- Reduced motion alternative: Static sections with fade transitions
- Lazy loading for images below fold
- WebP format with fallbacks
- Focus states on all interactive elements
- ARIA labels for 3D controls and hotspots
- Keyboard navigation for all interactive zones

## Unique Features

- **Hidden Easter Eggs**: Clickable decorative elements revealing folklore snippets
- **Depth Counter**: Always visible, counts down from ground level to water
- **Constellation Mode**: Optional view showing all stepwells across Rajasthan map
- **Share Moments**: Capture and share specific discoveries with generated cards

This design creates an unforgettable journey that educates while mesmerizing, turning an architectural subject into an emotional experience.