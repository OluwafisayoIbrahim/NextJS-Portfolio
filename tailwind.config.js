/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const { isAfter, isBefore, setHours } = require("date-fns");

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      ...colors,
      primary: colors.blue,
      secondary: getSecondaryColor(),
    },
  },
  plugins: [],
}

function getSecondaryColor() {
  const secondaryColors = [
    colors.blueGray,
    colors.coolGray,
    colors.warmGray,
    colors.trueGray,
    colors.gray,
  ];
  const randomIndex = Math.floor(Math.random() * secondaryColors.length);
  return secondaryColors[randomIndex];
}
