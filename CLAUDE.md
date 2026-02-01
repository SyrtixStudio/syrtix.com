# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

syrtix.com is a React-based website for a web development agency in Chile. The site showcases services, pricing packages, and portfolio with a focus on conversion-oriented design.

## Development Commands

```bash
npm run dev        # Start development server (Vite)
npm run build      # Production build
npm run preview    # Preview production build
npm run lint       # Run ESLint
npm run lint:fix   # Run ESLint with auto-fix
npm run format     # Format code with Prettier
```

## Tech Stack

- **Framework**: React 18 with Vite
- **Routing**: react-router-dom v7 with lazy loading
- **Styling**: Tailwind CSS with custom color tokens
- **Forms**: react-hook-form
- **Icons**: lucide-react
- **Animations**: AOS (Animate On Scroll)
- **Linting**: ESLint + Prettier

## Architecture

### Directory Structure
```
src/
├── components/
│   ├── home/        # Home page section components
│   ├── layout/      # Header, Footer (persistent layout)
│   └── ui/          # Reusable UI: Loader, WhatsAppButton
├── data/            # Static data (services, portfolio, packages, testimonials)
├── pages/           # Route-level page components (lazy loaded)
├── sections/        # Page sections (Hero, Contact)
├── utils/           # Helper functions and formatters
└── constants/       # Route definitions
```

### Key Patterns

**Data Layer**: Static data extracted to `src/data/` for maintainability. Import from `../data` index.

**Component Structure**: Home page uses modular section components from `src/components/home/`.

**Lazy Loading**: All pages are lazy-loaded via `React.lazy()` for code splitting. Each page generates a separate JS chunk.

**Icon Resolution**: Icons are resolved by name via `IconResolver.jsx` to keep data files free of JSX.

**Routing**: Routes defined in `App.jsx` with `Suspense` fallback.

**Tailwind Custom Colors** (defined in `tailwind.config.js`):
- `primary`: #c8aa5a (gold)
- `secondary`: #0021ad (blue)
- `base`: #fdfdfd (white background)
- `base2`: #efefef (alternate background)

### Code Style

- ESLint + Prettier enforced
- Single quotes, semicolons required
- Import order: React → external → internal
- No unused imports of `React` (React 17+ JSX transform)

### Spanish Language

The codebase uses Spanish for:
- UI text and labels
- URL paths (`/paquetes`, `/nosotros`, `/servicios`, `/contacto`)
- Code comments
