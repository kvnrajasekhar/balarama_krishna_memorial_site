# Kanagala Balarama Krishna Memorial Website — Complete Design & Development Plan

> **Design direction:** Warm Editorial Heritage  
> **Project type:** Personal memorial / biography / family legacy website  
> **Primary languages:** English + Telugu  
> **Core goal:** Preserve and present Kanagala Balarama Krishna's life, memories, values, final journey, organ-donation legacy, official recognitions, and photographs in a dignified, timeless digital space.

---

# 1. Recommended Technology Stack

Your choice is good.

| Area | Technology | Purpose |
|---|---|---|
| Framework | **React** | UI |
| Build tool | **Vite** | Fast development/build |
| Styling | **Tailwind CSS** | Design system + responsive styling |
| Animation | **Motion for React** | Scroll/reveal/page animations |
| Icons | **Lucide React** | Minimal UI icons |
| Language | **react-i18next** | English/Telugu |
| Routing | **React Router** | Future multi-page/navigation support |
| Fonts | **Cormorant Garamond + Inter + Telugu fonts** | Editorial typography |
| Image handling | Native WebP/AVIF + PNG | Performance |
| Deployment | Vercel / Netlify | Hosting |
| Version control | Git + GitHub | Source control |

### One important choice

For animations, I'd use **Motion for React**, rather than trying to implement everything manually with CSS.

For example:

```js
import { motion } from "motion/react";
```

It will be particularly useful for:

- Hero reveal
- Decorative elements
- Scroll-triggered text
- Timeline activation
- Image reveals
- Chapter transitions
- Decorative elements
- Mobile animations

But we should follow one rule:

> **Animation should support the story, never become the story.**

---

# 2. The Design Direction

I'd establish the design language as:

> ### **Warm Editorial Heritage**

Not:

- Funeral website
- Religious website
- Corporate website
- Wedding website
- Generic memorial template

Instead:

**Editorial + Heritage + Human + Elegant + Contemporary**

Think of a beautifully designed **family memoir/book**, translated into an interactive website.

---

# 3. 🎨 Master Color Palette

I would avoid pure black and pure white.

Your father's photograph already has a strong human presence, so the surrounding UI should feel warm and timeless.

## Primary palette

| Token | Color | Hex | Usage |
|---|---|---:|---|
| Primary | Deep Charcoal | `#24221F` | Main headings, important UI |
| Secondary | Warm Bronze | `#A3835A` | Accent, decorative elements |
| Background | Warm Ivory | `#F7F4EE` | Main background |
| Background Secondary | Soft Sand | `#EEE8DE` | Alternate sections |
| Surface | Warm White | `#FCFAF6` | Cards/content surfaces |
| Border | Soft Taupe | `#D8D0C4` | Dividers |
| Muted | Warm Gray | `#817A70` | Secondary information |
| Dark Background | `#171614` | Hero / dramatic sections |
| Dark Surface | `#211F1C` | Dark sections |

---

# 4. Text Colors

I'd define them explicitly rather than randomly choosing Tailwind grays throughout the application.

```text
--text-primary:      #24221F
--text-secondary:    #5E5952
--text-muted:        #817A70
--text-inverse:      #F7F4EE
--text-accent:       #8B6D47
```

### Usage

**Primary text**

Headings, important paragraphs.

**Secondary text**

Descriptions.

**Muted text**

Dates, captions, metadata.

**Accent**

Important phrases, chapter numbers, decorative labels.

---

# 5. Button Colors

Your recurring **Next Chapter** buttons need to become part of the visual identity.

## Primary button

```text
Background: #24221F
Text:       #F7F4EE
Hover:      #3A3631
```

Example:

```text
┌─────────────────────────────┐
│     LIFE BIOGRAPHY    →     │
└─────────────────────────────┘
```

## Secondary button

```text
Background: transparent
Border:     #A3835A
Text:       #8B6D47
Hover:      #A3835A
```

## Ghost button

```text
Background: transparent
Text:       #5E5952
Border:     transparent
```

Use the ghost style for things such as:

> View all memories →

---

# 6. ✨ Accent Color — Bronze

The bronze should be used **sparingly**.

For example:

```text
✦
────
01
```

or

```text
24 DECEMBER 1960
```

or

```text
NEXT CHAPTER
```

Don't make every button, heading and border gold.

That would quickly become wedding/invitation-like.

Think:

> **5–10% bronze, 90–95% neutral palette.**

---

# 7. Typography — This Is VERY Important

Because you have **English + Telugu**, typography needs more thought than a normal website.

## English Display Font

### **Cormorant Garamond**

Use for:

- Hero name
- Major headings
- Chapter titles
- Important quotes

It gives us the editorial/heritage feeling.

Example:

> **His Life**

> **The Final Journey**

---

## English UI / Body

### **Inter**

Use for:

- Body text
- Navigation
- Buttons
- Metadata
- Dates
- Captions

This keeps everything readable.

---

# 8. Telugu Typography

For Telugu, I'd use:

### **Noto Serif Telugu**

for major headings where appropriate.

And:

### **Noto Sans Telugu**

for body/UI text.

So our typography system becomes:

```text
ENGLISH

Display:
Cormorant Garamond

Body:
Inter


TELUGU

Display:
Noto Serif Telugu

Body:
Noto Sans Telugu
```

This is important because we should **not force the English font onto Telugu text**.

---

# 9. Typography Scale

I'd establish a fixed scale from the beginning.

### Hero

```text
Hero Name
clamp(3rem, 7vw, 7rem)
```

### Chapter title

```text
clamp(2.5rem, 5vw, 5rem)
```

### Section title

```text
clamp(2rem, 3.5vw, 3.5rem)
```

### Subheading

```text
1.25rem – 1.75rem
```

### Body

```text
1rem – 1.125rem
```

### Small text

```text
0.75rem – 0.875rem
```

---

# 10. Body Text Width

This is something people often overlook.

Don't let biography paragraphs stretch across the entire screen.

Maximum:

```text
max-width: 680px
```

Approximately.

For long-form reading, something around **60–75 characters per line** is comfortable.

So instead of:

```text
████████████████████████████████████████████████████
████████████████████████████████████████████████████
```

we want:

```text
        Balarama Krishna was born...

        He spent his childhood...

        His journey began...
```

Much more editorial.

---

# 11. Spacing System

Use a consistent spacing scale.

I'd primarily use Tailwind's spacing system, but establish a design philosophy:

```text
XS     4px
SM     8px
MD     16px
LG     24px
XL     40px
2XL    64px
3XL    96px
4XL    128px
5XL    180px
```

For major chapters, **generous whitespace is a feature**.

Don't be afraid of empty space.

---

# 12. Border Radius

I'd keep it restrained.

```text
Small UI:     6px
Cards:        10px
Images:       12px
Buttons:      9999px only where appropriate
```

I wouldn't make everything heavily rounded.

This isn't a SaaS dashboard.

---

# 13. Hero Design System

For the photograph you've uploaded, after you remove the background, the hero should roughly follow:

```text
                    DARK HERO
────────────────────────────────────────

       ✦                    ·

                 ╭────────╮
              ·  │        │  ✦
                 │  DAD   │
              ✦  │        │
                 ╰────────╯

              soft radial glow

        KANAGALA BALARAMA KRISHNA

                24 DEC 1960
                    —
                [DATE]

          A Life. A Journey. A Gift.

                    ↓

────────────────────────────────────────
```

### Hero background

```text
#171614
```

with a very subtle radial gradient.

Not a flat black screen.

---

# 14. Decorative Language

We should establish a **single decorative language** and reuse it throughout the website.

I'd use:

### Thin lines

```text
────────────
```

### Small bronze dots

```text
•
```

### Tiny stars

```text
✦
```

### Circular rings

```text
◯
```

### Fine geometric arcs

These can appear around the hero portrait and occasionally at chapter transitions.

The important thing:

> **The decoration should feel like an archival/editorial motif, not religious decoration.**

---

# 15. Chapter Numbering

This is something I'd introduce throughout the site.

For example:

```text
01

HIS EARLY YEARS
```

Then:

```text
02

THE ARMY DREAM
```

Then:

```text
03

FINDING HIS PATH
```

This gives the entire website a **documentary/book structure**.

---

# 16. Your Next-Chapter Component

Let's make this a reusable React component from day one.

Conceptually:

```jsx
<ChapterTransition
  nextChapter="Life Biography"
  label="Continue His Story"
/>
```

Visually:

```text
────────────────────────────────

           NEXT CHAPTER

         LIFE BIOGRAPHY

              →

────────────────────────────────
```

Every chapter uses the same component.

Later:

```jsx
<ChapterTransition
  nextChapter="The Final Journey"
/>
```

Then:

```jsx
<ChapterTransition
  nextChapter="Gift of Life"
/>
```

Then:

```jsx
<ChapterTransition
  nextChapter="Recognition"
/>
```

This will make the entire site feel **deliberately designed rather than assembled section by section**.

---

# 17. Animation System

I'd define animation categories.

### A. Page entrance

Very subtle:

```text
opacity: 0 → 1
y: 20 → 0
```

Duration:

```text
0.6 – 0.9s
```

---

### B. Image reveal

Use a masked reveal.

```text
image
↓
clip-path expands
```

---

### C. Chapter heading

```text
small label
     ↓
heading
     ↓
description
```

Each appearing with a tiny delay.

---

### D. Timeline

When a milestone enters the viewport:

```text
line → illuminates
dot → expands
content → reveals
```

---

### E. Hero

Hero animation should be the most sophisticated:

1. Background appears.
2. Decorative ring appears.
3. Ambient glow begins.
4. Father's PNG reveals.
5. Name appears.
6. Dates appear.
7. Tagline appears.
8. Scroll indicator begins subtle movement.

---

# 18. Animation Rules

I'd establish these rules now:

### Never

❌ Bounce  
❌ Excessive zoom  
❌ Fast spinning  
❌ Flashing  
❌ Constant particles  
❌ Huge parallax  
❌ Animation on every paragraph

### Prefer

✅ Fade  
✅ Slide  
✅ Mask reveal  
✅ Slow scale  
✅ Opacity  
✅ Subtle parallax  
✅ Line drawing

The website should feel **calm**.

---

# 19. Responsive Design

We should design for:

### Desktop

1440px+

### Laptop

1024–1439px

### Tablet

768–1023px

### Mobile

320–767px

But don't think of mobile as:

> Desktop squeezed into 375px.

For the biography, the desktop layout:

```text
LEFT CHAPTERS | RIGHT STORY
```

becomes on mobile:

```text
01
EARLY YEARS

[IMAGE]

Story...

────────────

02
ARMY DREAM

[IMAGE]

Story...
```

The sticky left navigation disappears and becomes a compact chapter indicator.

---

# 20. Bilingual Architecture

This should be designed **from the beginning**, not added later.

Don't write:

```jsx
<h1>His Life</h1>
```

everywhere.

Instead:

```jsx
<h1>{t("chapters.life.title")}</h1>
```

And our translations:

```text
en.json
te.json
```

Example:

```json
{
  "chapters": {
    "life": {
      "title": "His Life",
      "next": "Life Biography"
    }
  }
}
```

Telugu:

```json
{
  "chapters": {
    "life": {
      "title": "ఆయన జీవితం",
      "next": "జీవిత చరిత్ర"
    }
  }
}
```

This will save us **a huge amount of work later**.

---

# 21. Content Should Be Separate From Components

This is another important architectural decision.

Don't put your father's biography directly inside JSX.

Instead:

```text
src/
├── content/
│   ├── en/
│   │   ├── biography.js
│   │   ├── chapters.js
│   │   └── memories.js
│   │
│   └── te/
│       ├── biography.js
│       ├── chapters.js
│       └── memories.js
```

Then:

```text
components
       ↓
consume content
```

This means when you give me the **final accident story, organ donation story, certificate descriptions, etc.**, we simply add content.

We don't have to rewrite UI components.

---

# 22. Recommended Project Structure

I'd start with:

```text
src/
│
├── assets/
│   ├── images/
│   ├── certificates/
│   └── icons/
│
├── components/
│   ├── layout/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── LanguageSwitcher.jsx
│   │
│   ├── hero/
│   │   ├── Hero.jsx
│   │   └── HeroDecorations.jsx
│   │
│   ├── biography/
│   │   ├── LifeOverview.jsx
│   │   ├── LifeTimeline.jsx
│   │   ├── ChapterNavigation.jsx
│   │   ├── BiographyChapter.jsx
│   │   └── ChapterTransition.jsx
│   │
│   ├── gallery/
│   │   ├── Gallery.jsx
│   │   └── Lightbox.jsx
│   │
│   └── ui/
│       ├── Button.jsx
│       ├── Divider.jsx
│       └── SectionLabel.jsx
│
├── content/
│   ├── en/
│   └── te/
│
├── hooks/
│
├── i18n/
│
├── pages/
│
├── styles/
│   └── globals.css
│
├── App.jsx
└── main.jsx
```

---

# 23. Important: Don't Over-Engineer It

This is a personal website.

We **do not need**:

❌ Redux  
❌ Zustand initially  
❌ Backend initially  
❌ Database initially  
❌ Authentication  
❌ Complex API layer

The first version can be a beautifully structured static React application.

Later, if you want family members to contribute memories or manage content, we can introduce a backend/CMS.

---

# 24. Accessibility

Because this is going to exist for years, accessibility matters.

We should have:

- Proper semantic headings
- `alt` text for every photograph
- Keyboard-accessible navigation
- Visible focus states
- Sufficient contrast
- Reduced-motion support
- Proper language attributes

For example, when Telugu is active:

```html
<html lang="te">
```

And English:

```html
<html lang="en">
```

---

# 25. Performance

This site will eventually contain **a lot of photographs**.

So from the beginning:

### Don't upload everything as huge JPEGs.

Use:

```text
WebP
AVIF where practical
PNG only when transparency is needed
```

Your hero subject PNG will obviously remain PNG if we need transparency.

For gallery images:

```text
original
   ↓
optimized WebP/AVIF
   ↓
responsive sizes
```

We can use lazy loading for gallery images.

---

# 26. SEO / Sharing

Even though this is a personal website, I'd implement:

- Page title
- Meta description
- Open Graph image
- Twitter/X card metadata
- Canonical URL
- Proper heading hierarchy
- Favicon
- Social preview

When someone shares the website on WhatsApp, for example, it should show a beautiful preview containing **your father's photograph and name**, rather than a generic Vite icon.

---

# 27. The Design Tokens We Should Put Into Tailwind

I would make these available as named tokens rather than scattering hex codes throughout components.

Conceptually:

```text
primary
primary-dark

accent
accent-light

background
background-secondary
surface

text-primary
text-secondary
text-muted
text-inverse

border
```

Then components say:

```text
bg-background
text-text-primary
border-border
text-accent
```

instead of:

```text
bg-[#F7F4EE]
text-[#24221F]
```

everywhere.

That makes future refinement **much easier**.

---

# 🏛️ Final Design System

So if we lock the foundation today, I'd define it as:

### Brand

**Kanagala Balarama Krishna**

### Design philosophy

**Warm Editorial Heritage**

### Primary background

`#F7F4EE`

### Secondary background

`#EEE8DE`

### Hero / dark background

`#171614`

### Primary text

`#24221F`

### Secondary text

`#5E5952`

### Muted text

`#817A70`

### Accent

`#A3835A`

### Border

`#D8D0C4`

### English display

**Cormorant Garamond**

### English body/UI

**Inter**

### Telugu display

**Noto Serif Telugu**

### Telugu body/UI

**Noto Sans Telugu**

### Primary button

Charcoal → Ivory

### Secondary button

Transparent → Bronze border

### Animation

**Motion for React**

### Iconography

**Lucide**

### Language

**react-i18next**

### Architecture

**Content-driven + component-based**

### Responsive strategy

**Desktop editorial → mobile vertical story**

---

# 🚀 Development Order I Recommend

Don't start by building the whole website.

I'd build it in this exact order:

```text
PHASE 01
Project setup
React + Vite + Tailwind
        ↓
PHASE 02
Design system
Colors + typography + spacing
        ↓
PHASE 03
Hero
Your father's transparent PNG
+ decorations + animation
        ↓
PHASE 04
Welcome section
        ↓
PHASE 05
Biography architecture
Timeline + sticky chapter navigation
        ↓
PHASE 06
Chapter transition system
        ↓
PHASE 07
English/Telugu architecture
        ↓
PHASE 08
Final Journey
        ↓
PHASE 09
Gift of Life
        ↓
PHASE 10
Certificates / archive
        ↓
PHASE 11
Gallery
        ↓
PHASE 12
Legacy + final screen
        ↓
PHASE 13
Responsive + accessibility
        ↓
PHASE 14
Performance + SEO
```

---

# Phase 01–03 Scope

We should **start with Phase 01–03 only**.

Once the **hero is visually perfect**, we establish that as the reference for the rest of the site. Then the biography sections inherit the same visual language.

### Phase 01

Project setup:

- React
- Vite
- Tailwind CSS
- Motion for React
- Initial folder structure

### Phase 02

Design system:

- Colors
- Typography
- Spacing
- Buttons
- Borders
- Decorative language
- Responsive foundations

### Phase 03

Hero:

- Your father's transparent PNG
- Dark editorial background
- Decorative rings
- Ambient glow
- Subtle particles
- Portrait reveal
- Name reveal
- Dates
- Tagline
- Scroll indicator
- Responsive composition

And one particularly important thing:

> **Don't start by writing all the biography into components.** Build the reusable design system and chapter components first, then feed your father's story into them. That will make the later information you haven't curated yet—especially the final journey and organ-donation story—much easier to integrate.
