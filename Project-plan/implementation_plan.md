# SoftNova — Freelance Agency Website Implementation Plan

This plan outlines the architecture, design strategy, and development steps for **SoftNova** (Software + Nova), your personal freelance agency website. Heavily inspired by the sleek, dark-themed reference design provided. Focuses on Web Development and SEO services with modern 2026 web paradigms.

> [!TIP]
> **2026 Web Design Trends applied here:**
> - **Bento-Box Layouts**: Asymmetrical grids for portfolios and services (seen in your reference).
> - **Dark Mode with Neon/Glassmorphism**: Deep black/charcoal backgrounds with subtle glowing borders and blurred overlays.
> - **Micro-Interactions**: Elements reacting fluidly to cursor proximity.
> - **AI-Enhanced Visuals**: 3D interactive elements that feel intelligent (Three.js floating logic nodes).

## 1. Tech Stack
- **Framework:** React 18+ (initialized via **Vite** for speed).
- **Language:** TypeScript (for type safety and better component architecture).
- **Styling UI:** MUI (Material-UI) v5/v6. We will customize the MUI Theme heavily to achieve the dark, premium aesthetic (overriding default paper, button, and typography styles).
- **Animations (UI):** **Framer Motion** (essential for scroll reveals, bento-box hover effects, and spring animations).
- **Animations (3D):** **Three.js** via `@react-three/fiber` and `@react-three/drei` (for the futuristic hero graphic).

## 2. Branding & Color Palette — ✅ FINALIZED: "Neon Copper Tech"
Warm, trustworthy, luxurious tech. Copper provides warmth while deep blacks maintain a premium feel.

| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| **Primary** | Neon Copper | `#FF6B35` | CTA buttons, glowing highlights, active states |
| **Secondary** | Electric Indigo | `#4361EE` | Gradients, hover states, trust/tech elements |
| **Tertiary** | Cyber Purple | `#7209B7` | AI-related sections, 3D glowing shadows |
| **Background** | Void Black | `#0A0A0B` | Page background |
| **Surface** | Charcoal | `#141416` | Cards, elevated containers |
| **Text Primary** | Off-White | `#F8F9FA` | Headings, body text |
| **Text Secondary** | Muted Gray | `#8B949E` | Captions, helper text |

## 3. Reusable Components
Built once and reused across the site:
- `<GlowingChip />` — Pill-shaped floating stats ("99% Client Retention").
- `<BentoCard />` — Glassmorphism container with mouse-tracking hover glow. Used for Services & Portfolio.
- `<GradientButton />` — Copper CTA button with glow effect on hover.
- `<SectionHeading />` — Consistent typography for section titles ("PROCESS", "SHOWCASING OUR CRAFT").
- `<FAQAccordion />` — MUI Accordion customized for dark mode.

## 4. Folder Structure
Scalable, feature-based project structure:

```text
src/
├── assets/          # Images, logos, 3D models (GLTF/GLB)
├── components/      # Reusable UI elements
│   ├── ui/          # Buttons, Cards, Chips, Inputs
│   ├── layout/      # Navbar, Footer, SectionWrapper
│   └── 3d/          # Three.js canvas components
├── theme/           # MUI Theme config (colors, fonts, overrides)
├── data/            # JSON/constants for services, portfolio, FAQs
├── pages/           # Page components (Home, About, Contact)
├── hooks/           # Custom hooks (useScroll, useMousePosition)
├── styles/          # Global CSS overrides & variables
└── utils/           # Helper functions
```

## 5. Section Content & Freelance Copy

### Hero Section
- **Heading:** "Building Future-Ready Digital Experiences"
- **Sub-heading:** "I craft high-performance websites and data-driven SEO strategies that guarantee visibility and conversions."
- **3D Visual:** Interactive web/node structure in the center.

### Services Section (Bento Grid)
1. **Custom Web Development** — "High-speed, scalable, and tailored React applications."
2. **SEO Optimization** — "Data-backed organic growth strategies to dominate search rankings."
3. **UI/UX Design** — "Pixel-perfect interfaces designed for user retention and conversion."
4. **Performance Audits** — "Core Web Vitals optimization and architectural reviews."
5. **E-Commerce Solutions** — "Custom storefronts that maximize your digital ROI."
6. **Technical SEO** — "Fixing the underlying code that holds your site back from page one."

### Process Section (Timeline)
1. **Discovery** — Understanding goals & auditing existing assets.
2. **Strategy** — Planning architecture & SEO keywords.
3. **Design & Build** — Agile development sprints.
4. **Launch & Optimize** — Going live with performance monitoring.

## 6. Visuals & Image Creation Strategy
- **3D Hero:** Three.js interactive particles/web nodes.
- **AI Image Generation:** I will generate abstract tech visuals. Prompt style: *"Abstract 3D glowing circuit board, dark mode, copper and orange lighting, 8k."*
- **Portfolio Placeholders:** Generated using built-in image tool or Midjourney v6 / DALL-E 3.

## 7. Animation Strategy
1. **Scroll Reveals (Framer Motion):** `BentoCard`s stagger-fade upwards into view on scroll.
2. **Hover States:** Translucent gradient follows the mouse cursor over service cards.
3. **Continuous 3D (Three.js):** Hero "brain/circuit" slowly rotates and tilts toward mouse position.

## 8. 📦 Resources Required From You (Attach Before Build Starts)

> [!IMPORTANT]
> Provide everything below before I begin. Once attached, I will build the **full website end-to-end** without stopping.

### ✅ Required (Must Have)

| # | Resource | What to Provide | If Not Available |
|---|----------|-----------------|------------------|
| 1 | **Your Agency Name** | Your brand name (e.g. "SoftKnow", "MGK Digital") | I'll use a placeholder you can change later |
| 2 | **Logo** | PNG/SVG file (transparent background, light version for dark bg) | I'll create a clean text-based logo |
| 3 | **Your Photo / Avatar** | Professional headshot for "About Me" or hero section | I'll use an abstract avatar or silhouette |
| 4 | **Tagline / One-Liner** | e.g. "Turning Ideas Into Digital Reality" | I'll write one based on your services |
| 5 | **Contact Email** | Your business email for the contact form | I'll use `hello@yourdomain.com` as placeholder |
| 6 | **Social Media Links** | LinkedIn, GitHub, Instagram, Twitter/X, Behance, etc. | I'll add `#` placeholder links |

### 🟡 Optional (Nice to Have — Makes It Premium)

| # | Resource | Why It Helps |
|---|----------|-------------|
| 7 | **Portfolio Projects (2-4)** | Real project screenshots, titles, descriptions, and live URLs. Makes the "Showcasing Our Craft" section authentic |
| 8 | **Client Testimonials (2-3)** | Name, company, quote. Builds trust on the site |
| 9 | **Your Resume / Bio** | 2-3 lines about yourself, years of experience, key skills. Used in the About/Hero section |
| 10 | **Custom Domain Name** | If you have one (e.g. `www.youragency.com`) for deployment config |
| 11 | **Favicon** | 32x32 or 64x64 icon. If not provided, I'll generate one from your logo |
| 12 | **Google Analytics ID** | `G-XXXXXXX` tracking ID for SEO analytics |

### 🤖 What I Will Generate Myself (No Input Needed)

| Resource | How |
|----------|-----|
| **Hero 3D Visual** | Built with Three.js (interactive circuit/node animation) |
| **Portfolio Placeholder Images** | Generated via AI image tool (dark tech aesthetic, copper accents) |
| **Abstract Background Textures** | Gradient meshes & particle fields matching "Neon Copper Tech" palette |
| **Service Icons** | MUI Icons or custom SVG icons per service card |
| **SEO Meta Tags** | Auto-generated title, description, Open Graph tags |
| **FAQ Content** | Common freelance questions (pricing, timeline, process) |

## 9. ✅ Agency Name — FINALIZED: **SoftNova**

| Field | Value |
|-------|-------|
| **Brand Name** | SoftNova |
| **Full Meaning** | Software + Nova (a new star) |
| **Tagline** | "Innovation that shines" |
| **Vibe** | Futuristic, innovative, bright, premium |

## 10. 🎨 Logo Concepts (Generated for SoftNova)

````carousel
### Logo V1 — "Nova Burst"
Stylized "S" with a copper-to-indigo starburst explosion. Bold, energetic, eye-catching.
![Logo V1 - Nova Burst](C:/Users/Administrator/.gemini/antigravity/brain/ba1bee3c-2413-48bb-9507-219b2ac032d6/softnova_logo_v1_1779367597818.png)
<!-- slide -->
### Logo V2 — "Geometric Star"
Abstract faceted nova star in copper + purple. Clean, minimal, premium with "Software + Innovation" tagline.
![Logo V2 - Geometric Star](C:/Users/Administrator/.gemini/antigravity/brain/ba1bee3c-2413-48bb-9507-219b2ac032d6/softnova_logo_v2_1779367624688.png)
````

> [!NOTE]
> These are AI-generated concepts for direction. For the final website, I'll render the chosen style as an SVG logo for pixel-perfect display.

## Status
> [!NOTE]
> ✅ Color palette finalized: **Neon Copper Tech**
> ✅ Agency name finalized: **SoftNova**
> ✅ Logo concepts generated
> ⏳ **Pick your logo style (V1 or V2)**, then attach remaining resources from Section 8 to start the build.
