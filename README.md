# Kanagala Balarama Krishna — Memorial Website

A complete, production-quality digital memorial and biography website preserving the life story, memories, values, and legacy of Kanagala Balarama Krishna.

## Design Philosophy

**Warm Editorial Heritage** — The website follows an editorial memoir aesthetic, resembling a beautifully designed family book translated into an interactive digital experience. The design prioritizes emotion, clarity, and timelessness over trends or decoration.

## Technology Stack

- **React 19** — UI framework
- **Vite 8** — Build tool and development server
- **Tailwind CSS v4** — Design system and responsive styling
- **Motion for React** — Sophisticated animations
- **Lucide React** — Minimal UI icons
- **react-i18next** — English/Telugu bilingual support
- **Cormorant Garamond + Inter + Noto Serif Telugu + Noto Sans Telugu** — Editorial typography

## Features

### Complete Story Flow
1. **Hero** — Dark editorial portrait with ambient decorations and choreographed animation
2. **Welcome from the Family** — Personal greeting and purpose statement
3. **Who Was He?** — Concise introduction to his character
4. **Life Biography** — 7-chapter editorial timeline with sticky navigation
5. **The Final Journey** — Dignified storytelling of final events
6. **Gift of Life** — Organ donation narrative
7. **Organ Donation Legacy** — Details of selfless final act
8. **Certificates & Recognition** — Archive-style certificate viewer
9. **Photo Gallery** — Categorized family photograph archive
10. **His Legacy** — Reflection on lasting impact
11. **Closing** — Final family message

### Design System
- **Color Palette**: Warm ivory, soft sand, deep charcoal, bronze accents
- **Typography**: Editorial display fonts with readable body text
- **Spacing**: Generous whitespace for editorial feel
- **Decorative Language**: Thin lines, bronze dots, stars, circular rings
- **Animation**: Slow, subtle, purposeful Motion animations

### Bilingual Support
- English and Telugu languages
- Language switcher in header and footer
- Separate translation files for maintainability
- Telugu-appropriate typography (Noto Serif Telugu, Noto Sans Telugu)

### Responsive Design
- Desktop (1440px+): Editorial layouts with sticky navigation
- Tablet (768-1023px): Adapted compositions
- Mobile (320-767px): Vertical story flow
- Intentional mobile design, not merely shrunk desktop

### Accessibility
- Semantic HTML structure
- Keyboard navigation
- Visible focus states
- Reduced-motion support
- ARIA labels where necessary
- Proper heading hierarchy
- Sufficient contrast ratios

## Requirements

Node.js 20.19+ or 22.12+ (required for Vite 8)

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Open the local Vite URL (typically http://localhost:5173/)

## Build

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── layout/          # Header, Footer, LanguageSwitcher
│   ├── hero/            # Hero, HeroPortrait, ScrollCue
│   ├── sections/        # Welcome, WhoWasHe, Biography, etc.
│   ├── biography/       # BiographyChapter, ChapterNavigation
│   ├── transitions/     # ChapterTransition
│   ├── gallery/         # Gallery components (placeholder)
│   ├── certificates/    # Certificate components (placeholder)
│   └── ui/              # Button, Divider, SectionLabel
├── content/
│   ├── en/              # English translations
│   └── te/              # Telugu translations
├── i18n/                # i18next configuration
├── hooks/               # Custom React hooks
├── styles/              # Global CSS and Tailwind
├── App.jsx              # Main application component
└── main.jsx             # Entry point
```

## Adding Content

### Biography Content
Edit `src/content/en/translations.json` and `src/content/te/translations.json` to update biography chapters. The structure supports:

- Chapter numbers and titles
- Year/date metadata
- Narrative content
- Future chapter additions

### Missing Content Placeholders
The following sections have placeholders awaiting family-provided content:

- Family welcome message
- Final journey details
- Organ donation specifics
- Certificate information
- Gallery photographs
- Legacy message
- Final family message

These are clearly marked as `[CONTENT TO BE PROVIDED]` in the translation files.

### Adding Photographs
Place images in `public/images/`. The hero portrait should be a transparent PNG at:
```
public/images/nanna-image.png
```

Gallery images should be organized by category and optimized (WebP/AVIF where practical).

## Design Tokens

### Colors
- Primary background: `#F7F4EE`
- Secondary background: `#EEE8DE`
- Surface: `#FCFAF6`
- Primary text: `#24221F`
- Secondary text: `#5E5952`
- Muted text: `#817A70`
- Accent bronze: `#A3835A`
- Border: `#D8D0C4`
- Dark hero: `#171614`

### Typography
- English display: Cormorant Garamond
- English body/UI: Inter
- Telugu display: Noto Serif Telugu
- Telugu body/UI: Noto Sans Telugu

## Deployment

The site is optimized for deployment on:
- Vercel
- Netlify
- Any static hosting service

Build output is in the `dist/` directory.

## Important Notes

- **No Fabrication**: All personal information must be provided by the family. No dates, events, or details are invented.
- **Authentic Portrait**: The hero photograph is never modified or regenerated. Visual effects happen around the photograph only.
- **Timeless Design**: The aesthetic is designed to remain appropriate for years, avoiding trends.
- **Privacy**: Sensitive information (recipient identities, medical details, etc.) is not published without explicit family authorization.

## License

This is a private family memorial website. All rights reserved by the Kanagala family.
