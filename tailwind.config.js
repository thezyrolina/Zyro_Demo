/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#07070B',
          900: '#0B0B14',
          800: '#12121E',
          700: '#1A1A2E',
        },
        cobalt: '#3B3BFF',
        violet: '#7C3AED',
        lavender: '#B8A4FF',
        mint: '#4EE2B4',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'grad-brand': 'linear-gradient(135deg, #3B3BFF 0%, #7C3AED 50%, #A855F7 100%)',
      },
    },
  },
  plugins: [],
};
