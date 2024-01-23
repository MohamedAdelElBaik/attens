/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: {
        900: 'hsla(111, 64%, 39%, 1)',
        800: 'hsla(111, 64%, 39%, 0.8)',
        600: 'hsla(111, 64%, 39%, 0.6)',
        400: 'hsla(111, 64%, 39%, 0.4)',
        300: 'hsla(111, 64%, 39%, 0.3)',
        200: 'hsla(111, 64%, 39%, 0.2)',
        100: 'hsla(111, 64%, 39%, 0.08)',
      },
      red: {
        900: 'hsla(0, 63%, 48%, 1)',
        500: 'hsla(0, 100%, 70%, 1)',
      },
      yellow: 'hsla(43, 100%, 50%, 1)',
      white: '#fff',
      gray: 'hsla(212, 15%, 51%, 1)',
      grayLight: '#F1F5F0',
      black: '#000',
    },
    fontFamily: {
      sans: ['Readex Pro', 'sans-serif'],
    },
    extend: {
      fontSize: {
        'vsm': '0.625rem',
        'sm': '0.9375rem',
        'base': '1rem',
        'xl': '1.25rem',
        // '2xl': '1.563rem',
        // '3xl': '1.953rem',
        '4xl': '2.25rem',
        // '5xl': '3.052rem',
      },
      backgroundImage: {
        'hello-card': "url('/hello-card-background.svg')",
      },
    },
  },
  plugins: [],
};
