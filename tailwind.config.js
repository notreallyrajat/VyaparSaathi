/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        brand: {
          bg: '#F9F8F5',
          surface: '#FFFFFF',
          panel: '#F3F2EE',
          dark: '#152232',
          darker: '#0F1824',
          slate: '#2B3747',
          body: '#3D4653',
          muted: '#6C7582',
          border: '#E2E5EA',
          borderDark: '#2D3848',
          accent: '#152232',
        }
      }
    },
  },
  plugins: [],
};

