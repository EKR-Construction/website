import type { Config } from 'tailwindcss';

/**
 * Tailwind CSS v4 Configuration
 *
 * In Tailwind v4, theme customization is done using CSS @theme directive
 * in globals.css. This config file only specifies content paths.
 *
 * See src/app/globals.css for:
 * - Brand color scales (cornflower-blue, eggshell, dusty-grape, tomato-jam, carbon-black)
 * - Typography scale (font sizes and line heights)
 * - Breakpoints (sm, md, lg, xl, 2xl)
 * - Font families
 */
const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
};

export default config;
