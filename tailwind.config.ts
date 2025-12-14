import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'cornflower-blue': {
          50: '#e8f4fc',
          100: '#d1e9f9',
          200: '#a3d3f3',
          300: '#75bded',
          400: '#47a7e7',
          500: '#165cc5', // Brand color - WCAG AA compliant
          600: '#124a9e',
          700: '#0d3777',
          800: '#09254f',
          900: '#041228',
          950: '#030d1c',
        },
        eggshell: {
          50: '#fefefe',
          100: '#fcfbf8',
          200: '#f9f7ef',
          300: '#f6f3e7',
          400: '#f5f1e3',
          500: '#f3efe0', // Brand color
          600: '#c2bfb3',
          700: '#918f86',
          800: '#615f5a',
          900: '#30302d',
          950: '#1e1e1c',
        },
        'dusty-grape': {
          50: '#ededf1',
          100: '#dbdce3',
          200: '#b7b9c7',
          300: '#9396ab',
          400: '#6d6f8f',
          500: '#474973', // Brand color
          600: '#393b5c',
          700: '#2b2c45',
          800: '#1c1d2e',
          900: '#0e0f17',
          950: '#09090e',
        },
        'tomato-jam': {
          50: '#fcecec',
          100: '#f9d9d8',
          200: '#f3b3b1',
          300: '#ec8c8a',
          400: '#e15f5d',
          500: '#d63230', // Brand color
          600: '#ab2826',
          700: '#801e1d',
          800: '#561413',
          900: '#2b0a0a',
          950: '#1c0707',
        },
        'carbon-black': {
          50: '#f5f5f5',
          100: '#ebebea',
          200: '#d7d6d5',
          300: '#c2c2c0',
          400: '#74736f',
          500: '#252422', // Brand color
          600: '#1e1d1b',
          700: '#161615',
          800: '#0f0e0e',
          900: '#070707',
          950: '#040404',
        },
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};

export default config;
