# Agent Development Instructions

This document provides development guidelines for all agents (AI or human) working on the EKR Construction website project.

## Project Overview

- **Tech Stack**: Next.js 16, TypeScript, Tailwind CSS v4, React
- **Build Target**: Static export for Vercel deployment
- **Domain**: https://ekr.construction
- **Package Manager**: pnpm
- **Accessibility Standard**: WCAG 2.1 Level AA

## Core Principles

### 1. DRY (Don't Repeat Yourself)

- **Component Reusability**: Before creating new components, check if existing components can be extended or reused
- **Utility Functions**: Extract repeated logic into utility functions
- **Constants**: Define constants once in a central location, never hardcode values multiple times
- **Style Patterns**: Use Tailwind's utility classes consistently; extract common patterns into components

**Example:**

```tsx
// ❌ Bad: Repeated button styling
<button className="px-6 py-3 rounded font-semibold bg-tomato-jam-500 text-eggshell-500">Click</button>
<button className="px-6 py-3 rounded font-semibold bg-tomato-jam-500 text-eggshell-500">Submit</button>

// ✅ Good: Reusable Button component
<Button variant="accent">Click</Button>
<Button variant="accent">Submit</Button>
```

### 2. Component-First Development

- **Default to Components**: Always prefer creating or modifying existing components over inline implementations
- **Component Location**: Place components in `/src/components/`
- **Single Responsibility**: Each component should have one clear purpose
- **Prop Interfaces**: Always define TypeScript interfaces for component props
- **Composition**: Build complex UIs by composing smaller components

**Component Checklist:**

- [ ] Is there an existing component that can be extended?
- [ ] Does this pattern appear more than once in the design?
- [ ] Can this be broken into smaller, reusable pieces?
- [ ] Are prop types clearly defined?
- [ ] Is the component documented with JSDoc comments?

### 3. Brand Color Usage

**Always use brand colors or their shades.** Never use arbitrary color values.

#### Brand Color Scale (500 = Base Brand Color)

Our brand colors are defined at the 500-level in the color scale:

- **cornflower-blue-500**: `#165cc5` (Primary) - WCAG AA compliant on eggshell backgrounds
- **eggshell-500**: `#f3efe0` (Background)
- **dusty-grape-500**: `#474973` (Secondary)
- **tomato-jam-500**: `#d63230` (Accent/CTA)
- **carbon-black-500**: `#252422` (Text/Dark backgrounds)

Each brand color has a full scale (50-950) available in `src/app/globals.css`.

#### Color Usage Rules

1. **Use Semantic Colors**: Reference colors by their brand name, not by hex values
2. **Use Appropriate Shades**:
   - 50-200: Very light variants (backgrounds, subtle borders)
   - 300-400: Light variants (hover states, secondary elements)
   - 500: Base brand color (primary usage)
   - 600-700: Dark variants (hover states on dark backgrounds)
   - 800-950: Very dark variants (dark backgrounds, text on light backgrounds)
3. **Tailwind v4 Syntax**: Use class names like `text-eggshell-500` or `bg-carbon-black-500`
4. **No Arbitrary Values**: Never use `text-[#abc123]` - always use defined brand colors

**Example:**

```tsx
// ❌ Bad: Arbitrary color
<div className="bg-[#333333]">

// ✅ Good: Brand color shade
<div className="bg-carbon-black-600">

// ❌ Bad: Generic color
<button className="bg-red-500">

// ✅ Good: Brand accent color
<button className="bg-tomato-jam-500">
```

#### Contrast Requirements

Always verify color combinations meet WCAG AA standards:

- Normal text (< 18pt): Minimum 4.5:1 contrast ratio
- Large text (≥ 18pt or bold ≥ 14pt): Minimum 3:1 contrast ratio
- UI components: Minimum 3:1 contrast ratio

Reference `CONTRAST_VERIFICATION.md` for approved color pairings.

### 4. Accessibility (a11y) Requirements

**All code must meet WCAG 2.1 Level AA standards.**

#### Keyboard Navigation

- All interactive elements must be keyboard accessible
- Implement proper focus states with visible focus indicators
- Use `focus:outline-none` only when providing custom focus styles
- Support Tab, Enter, Escape, and Arrow keys where appropriate

#### ARIA Labels and Landmarks

- Use semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<footer>`)
- Provide ARIA labels for icons and icon-only buttons
- Use `aria-label` or `aria-labelledby` for non-obvious interactive elements
- Include `aria-expanded`, `aria-controls` for expandable components
- Use `aria-hidden="true"` for decorative icons

#### Focus Management

- Trap focus in modals and overlays
- Return focus to trigger element when closing modals
- Provide skip-to-content links for keyboard users
- Ensure logical tab order (avoid positive tabindex values)

#### Screen Reader Support

- Use descriptive link text (avoid "click here")
- Provide alt text for all images
- Use `sr-only` class for screen reader-only content
- Announce dynamic content changes with ARIA live regions

#### Color and Contrast

- Never rely on color alone to convey information
- Meet contrast ratio requirements (see Brand Color Usage)
- Ensure focus indicators have sufficient contrast

**Example:**

```tsx
// ❌ Bad: Icon-only button without label
<button onClick={handleClick}>
  <Icon icon={faClose} />
</button>

// ✅ Good: Proper ARIA label
<button onClick={handleClick} aria-label="Close menu">
  <Icon icon={faClose} aria-hidden="true" />
</button>

// ❌ Bad: Generic link text
<a href="#services">Click here</a>

// ✅ Good: Descriptive link text
<a href="#services">View our services</a>
```

## Technical Guidelines

### Tailwind CSS v4

- **Configuration**: Theme defined in `src/app/globals.css` using `@theme` directive
- **Import**: Use `@import 'tailwindcss'` (not individual @tailwind directives)
- **No Dynamic Classes**: Avoid string interpolation for class names (Tailwind can't detect them)
- **Static Classes Only**: All classes must be statically analyzable

**Example:**

```tsx
// ❌ Bad: Dynamic class names
<div className={`bg-${color}-500`}>

// ✅ Good: Static class names with variants
const variants = {
  primary: 'bg-cornflower-blue-500',
  accent: 'bg-tomato-jam-500'
};
<div className={variants[color]}>
```

### TypeScript

- **Strict Mode**: Always enabled
- **Type Everything**: No implicit `any` types
- **Interface over Type**: Prefer `interface` for object shapes
- **Export Types**: Export interfaces for reusable component props

### Next.js

- **App Router**: Use Next.js 16 App Router conventions
- **Client Components**: Mark with `'use client'` only when needed (state, effects, event handlers)
- **Static Export**: Code must work with `output: 'export'` (no server-side features)
- **Metadata**: Define SEO metadata in layout.tsx and page.tsx

### File Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Tailwind config and global styles
├── components/             # Reusable components
│   ├── Button.tsx
│   ├── Icon.tsx
│   └── Header.tsx
└── sections/              # Page sections (future)
    └── Hero.tsx
```

## Code Style

### Component Structure

```tsx
'use client'; // Only if needed

import { useState } from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

// 1. Type definitions
interface ComponentProps {
  title: string;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}

// 2. Constants (outside component)
const VARIANT_STYLES = {
  primary: 'bg-cornflower-blue-500',
  secondary: 'bg-dusty-grape-500',
};

// 3. Component definition
export default function Component({
  title,
  variant = 'primary',
  onClick,
}: ComponentProps) {
  // 4. Hooks
  const [isOpen, setIsOpen] = useState(false);

  // 5. Event handlers
  const handleClick = () => {
    setIsOpen(!isOpen);
    onClick?.();
  };

  // 6. Render
  return (
    <div className={VARIANT_STYLES[variant]}>
      <h2>{title}</h2>
    </div>
  );
}
```

### Naming Conventions

- **Components**: PascalCase (`Button.tsx`, `NavigationMenu.tsx`)
- **Utilities**: camelCase (`formatDate.ts`, `validateEmail.ts`)
- **Constants**: UPPER_SNAKE_CASE (`MAX_WIDTH`, `API_ENDPOINT`)
- **CSS Classes**: kebab-case for custom classes, Tailwind utilities as-is

### Comments

- **When to Comment**: Explain "why", not "what"
- **JSDoc**: Use for component and function documentation
- **TODO Comments**: Link to GitHub issue when possible

```tsx
// ❌ Bad: Obvious comment
// Set the color to red
const color = 'tomato-jam-500';

// ✅ Good: Explains reasoning
// Using accent color for CTA to meet client branding requirements (Issue #42)
const ctaColor = 'tomato-jam-500';

/**
 * Button component with consistent brand styling
 * @param variant - Color variant: primary, secondary, or accent
 * @param href - Optional link destination (renders as <a> tag)
 */
export default function Button({ variant, href }: ButtonProps) {
  // ...
}
```

## Testing and Quality

### Before Committing

- [ ] Run `pnpm build` - Build must succeed
- [ ] Run `pnpm lint` - ESLint must pass (or use `--fix`)
- [ ] Check TypeScript compilation (no errors)
- [ ] Verify accessibility with keyboard navigation
- [ ] Test on mobile viewport (responsive design)
- [ ] Check color contrast meets WCAG AA

### Git Workflow

1. Create feature branch from `main`: `git checkout -b feature-name`
2. Make atomic commits with clear messages
3. Push branch and create Pull Request
4. Ensure GitHub Actions pass
5. Request review if working with a team
6. Merge to `main` when approved

### Commit Messages

Follow conventional commits format:

```
type: brief description

Longer explanation if needed.

Closes #issue-number
```

**Types**: `feat`, `fix`, `refactor`, `docs`, `style`, `test`, `chore`

**Important**: Do NOT include AI co-authorship attribution (e.g., "Generated with Claude Code" or "Co-Authored-By: Claude") in commit messages. All commits should appear as standard developer contributions without AI attribution.

## Common Patterns

### Responsive Design

Use Tailwind's mobile-first breakpoints:

- Default: Mobile (< 640px)
- `sm:` Small (≥ 640px)
- `md:` Medium (≥ 768px)
- `lg:` Large (≥ 1024px)
- `xl:` Extra large (≥ 1280px)

```tsx
// Mobile first: stack vertically, then horizontal on medium+
<div className="flex flex-col md:flex-row">
```

### Conditional Rendering

```tsx
// ✅ Good: Clear boolean conditions
{
  isOpen && <Menu />;
}
{
  items.length > 0 && <List items={items} />;
}

// ✅ Good: Ternary for either/or
{
  isLoading ? <Spinner /> : <Content />;
}
```

### Event Handlers

```tsx
// ✅ Good: Extract to named function for complex logic
const handleSubmit = (e: FormEvent) => {
  e.preventDefault();
  // ... complex logic
};

// ✅ Good: Inline for simple operations
<button onClick={() => setOpen(true)}>Open</button>;
```

## Resources

- **Brand Colors**: See `src/app/globals.css` and `CONTRAST_VERIFICATION.md`
- **Components**: See `src/components/` for existing components
- **Design Files**: See `designs/` folder for reference mockups
- **Issues**: https://github.com/EKR-Construction/website/issues
- **WCAG Guidelines**: https://www.w3.org/WAI/WCAG21/quickref/

## Questions?

When in doubt:

1. Check existing code patterns in the repository
2. Refer to this document
3. Consult WCAG 2.1 Level AA guidelines for accessibility
4. Create a GitHub issue for clarification
