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
      primary: getPrimaryColor(),
      secondary: getSecondaryColor(),
    },
  },
  plugins: [],
}

function getPrimaryColor() {
  const now = new Date();
  const morningStart = setHours(now, 6); // Adjust this time based on your preferences
  const afternoonStart = setHours(now, 12); // Adjust this time based on your preferences
  const eveningStart = setHours(now, 18); // Adjust this time based on your preferences

  if (isBefore(now, morningStart)) {
    // Night colors
    const nightColors = [colors.indigo, colors.purple, colors.pink, colors.blue, colors.teal];
    const randomIndex = Math.floor(Math.random() * nightColors.length);
    return nightColors[randomIndex];
  } else if (isBefore(now, afternoonStart)) {
    // Morning colors
    const morningColors = [colors.red, colors.orange, colors.yellow, colors.green, colors.cyan];
    const randomIndex = Math.floor(Math.random() * morningColors.length);
    return morningColors[randomIndex];
  } else if (isBefore(now, eveningStart)) {
    // Afternoon colors
    const afternoonColors = [colors.blue, colors.green, colors.orange, colors.purple, colors.yellow];
    const randomIndex = Math.floor(Math.random() * afternoonColors.length);
    return afternoonColors[randomIndex];
  } else {
    // Evening colors
    const eveningColors = [colors.orange, colors.red, colors.pink, colors.purple, colors.indigo];
    const randomIndex = Math.floor(Math.random() * eveningColors.length);
    return eveningColors[randomIndex];
  }
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

