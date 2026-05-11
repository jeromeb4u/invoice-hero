# InvoiceHero — Spec

## 1. Concept & Vision

InvoiceHero is a fast, no-friction invoice generator for freelancers and small businesses. The core promise: stop losing money to ugly, slow invoices. Generate a beautiful PDF in 60 seconds, attach a Stripe payment link, and send via email or WhatsApp. Get paid 3x faster.

**Tagline:** "Invoices that get you paid — not ignored."

---

## 2. Design Language

### Aesthetic
Premium financial SaaS — clean, confident, airy. Think Stripe meets Linear. Trust and speed signals.

### Color Palette
| Token       | Hex       | Usage                        |
|-------------|-----------|------------------------------|
| background  | #f8fafc   | Page background              |
| surface     | #ffffff   | Cards, navbar                |
| border      | #e2e8f0   | Dividers, card borders       |
| primary     | #059669   | CTAs, highlights (green)     |
| secondary   | #0284c7   | Links, accent (blue)         |
| text        | #0f172a   | Headings, body                |
| muted       | #64748b   | Subtext, captions             |

### Typography
- Font: **Inter** (Google Fonts, weights 400/500/600/700)
- Fallback: system-ui, sans-serif

### Spatial System
- Section vertical padding: 80px–120px
- Card padding: 24px–32px
- Border radius: 12px (cards), 8px (buttons), 6px (inputs)

### Motion
- Subtle hover lifts on cards (translateY -2px, shadow increase)
- Button hover: slight darken + scale(1.02)
- Stats counter fade-in on scroll (CSS only)

---

## 3. Layout & Structure

### Page Sections (top to bottom)
1. **NavBar** — sticky, white/surface, logo left, nav links center, CTA right
2. **Hero** — centered, headline + sub + dual CTAs, floats above a mock invoice preview
3. **Invoice Preview** — floating mock invoice card with "Pay Now" Stripe button
4. **Features** — 3x2 grid of feature cards
5. **How It Works** — 4-step horizontal flow with icons
6. **Stats Bar** — dark background strip with 3 metrics
7. **Testimonials** — 3-column cards
8. **Pricing** — 3-column pricing cards (Free / Starter / Growth)
9. **CTA Banner** — full-width call to action
10. **Footer** — links, copyright

### Responsive Strategy
- Mobile-first Tailwind breakpoints
- Grid collapses: 3-col → 1-col (mobile), 2-col (tablet)
- NavBar collapses to hamburger on mobile

---

## 4. Features & Interactions

### NavBar
- Logo: "InvoiceHero" with a small bolt/payment icon
- Links: Features, Templates, Pricing (scroll anchors), Login (outlined button), Create Free (filled green)
- Sticky on scroll with subtle shadow

### Hero
- Headline: "Invoices that get you paid — not ignored"
- Sub: "Generate a beautiful PDF invoice in 60 seconds. Add a Stripe payment link. Send via email or WhatsApp. Get paid 3x faster."
- CTA 1: "Create Free Invoice" (green, filled)
- CTA 2: "See How It Works" (ghost/outline)
- Background: subtle radial gradient from #f8fafc to #e2e8f0

### Invoice Preview Mock
- Floating card: white surface, card shadow
- Shows: invoice number, client name, amount, line items
- "Pay Now" green button visible (mock Stripe button)
- Subtle float animation (CSS keyframe)

### Features Grid (6 cards)
1. Instant PDF Invoice — FileText icon
2. Stripe Payment Link — CreditCard icon
3. WhatsApp / Email Send — Send icon
4. Recurring Invoices — RefreshCw icon
5. Client Portal — Users icon
6. Late Payment Reminders — Bell icon

Each card: icon (colored circle bg), title, 2-line description

### How It Works (4 steps)
1. Pick a Template → LayoutTemplate
2. Add Your Details → Pencil
3. Add Stripe Link → Link
4. Send & Get Paid → Send

Horizontal on desktop, vertical stacked on mobile.

### Stats Bar
- Dark background (#0f172a)
- 3 stats: "48 hrs — Avg payment time", "2M+ — Invoices sent", "98% — Client satisfaction"
- Large bold numbers, muted labels below

### Testimonials (3 freelancers)
- Cards with quote, name, role, avatar placeholder (initials circle)
- Realistic names and quotes

### Pricing (3 tiers)
| Tier     | Price        | Invoices/mo | Features                        |
|----------|--------------|-------------|---------------------------------|
| Free     | $0           | 5           | PDF invoice, Stripe fee applies |
| Starter  | $15/mo       | 50          | Custom branding, no Stripe fee  |
| Growth   | $35/mo       | Unlimited   | Auto-reminders, API access      |

Highlighted tier: Starter (most popular badge)

### CTA Banner
- Primary green bg, white text
- Headline: "Stop waiting. Start getting paid."
- CTA: "Create Your First Invoice Free"

### Footer
- Logo + tagline left
- 3 link columns: Product, Company, Legal
- Copyright line

---

## 5. Component Inventory

| Component         | States                                          |
|-------------------|-------------------------------------------------|
| NavBar            | default, scrolled (shadow)                      |
| Button (primary)  | default, hover (darken+scale), active           |
| Button (outline)  | default, hover (fill bg), active                 |
| Feature Card      | default, hover (lift + shadow)                   |
| Step Card         | default, active                                  |
| Testimonial Card  | default                                          |
| Pricing Card      | default, highlighted (scale + ring)             |
| Footer            | default                                          |

---

## 6. Technical Approach

- **Framework:** Next.js 15, App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (`@import "tailwindcss"`, `@theme {}` block)
- **Icons:** Lucide React
- **Font:** Inter via `next/font/google`
- **Build:** `next build`
- **Deploy:** Vercel CLI (`npx vercel --yes --token <token>`)
- **Output:** Static-ready (no server components requiring runtime)

### File Structure
```
invoice-hero/
├── SPEC.md
├── package.json
├── next.config.js
├── tsconfig.json
├── postcss.config.js
├── .gitignore
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
```
