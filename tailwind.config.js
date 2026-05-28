/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        canvas: {
          light: '#FAFAFA',
          dark: '#09090B',
        },
        surface: {
          light: '#FFFFFF',
          dark: '#18181B',
        },
        ink: {
          primary: '#18181B',
          secondary: '#71717A',
          tertiary: '#A1A1AA',
          light: '#F4F4F5',
          muted: '#A1A1AA',
        },
        accent: {
          DEFAULT: '#F97316',
          hover: '#EA580C',
          muted: 'rgba(249,115,22,0.15)',
        },
        border: {
          whisper: '#E4E4E7',
          dark: '#27272A',
        },
      },
    },
  },
  plugins: [],
};
