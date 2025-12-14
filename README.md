# EKR Construction Website

A modern, accessible static website built with Next.js 16, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4
- **Package Manager:** pnpm
- **Deployment:** Vercel (static export)

## Getting Started

1. **Install dependencies:**
   ```bash
   pnpm install
   ```

2. **Run development server:**
   ```bash
   pnpm dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build for production:**
   ```bash
   pnpm build
   ```
   Static files will be generated in the `out/` directory.

## Project Structure

```
website/
├── src/
│   ├── app/          # Next.js App Router pages
│   ├── components/   # Reusable UI components
│   ├── sections/     # Page sections (Hero, About, Contact, etc.)
│   └── styles/       # Global styles and CSS modules
├── public/           # Static assets (images, fonts, etc.)
└── out/              # Static export output (generated)
```

## Development

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production (static export)
pnpm build

# Lint code
pnpm lint
```

## Accessibility

This site is built to meet WCAG 2.1 Level AA compliance standards.

## Deployment

Configured for static export to Vercel.
