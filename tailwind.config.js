/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#c8aa5a',
        secondary: '#0021ad',
        base: '#fdfdfd',
        base2: '#efefef',
      },
    },
  },
  plugins: [],
};
