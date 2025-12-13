# EKR Construction Website

A modern, accessible static website built with Next.js 16, TypeScript, and Tailwind CSS.

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
