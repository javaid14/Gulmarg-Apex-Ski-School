/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        alpine: {
          950: '#081522',
          900: '#0B1F33',
          800: '#122A46',
          700: '#1B3A5C',
        },
        ice: {
          100: '#EAF3FB',
          200: '#D3E6F7',
          400: '#A9C6E8',
          600: '#6E97C4',
        },
        ember: {
          400: '#F0A247',
          500: '#E8871E',
          600: '#C96C0F',
        },
        snow: '#F7FAFC',
        slate: {
          950: '#0F172A',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
