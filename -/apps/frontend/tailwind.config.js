/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'apps/frontend/pages/**/*.{js,ts,jsx,tsx}',
    'apps/frontend/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          'fox-orange': '#FF6600',
          'fox-yellow': '#F4E726',
          'fox-red': '#8A432F',
          'fox-light-orange': '#E56238',
        },
      },
    },
  },
  plugins: [],
};
