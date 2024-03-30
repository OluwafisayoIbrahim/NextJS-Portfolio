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
    // Morning colors: Red or Orange
    return isBefore(now, afternoonStart) ? colors.red[500] : colors.orange[500];
  } else if (isBefore(now, afternoonStart)) {
    // Afternoon colors: Yellow, Green, or Blue
    const afternoonColors = [colors.yellow[500], colors.green[500], colors.blue[500]];
    const randomIndex = Math.floor(Math.random() * afternoonColors.length);
    return afternoonColors[randomIndex];
  } else {
    // Evening colors: Indigo or Violet
    return isBefore(now, eveningStart) ? colors.indigo[500] : colors.violet[500];
  }
}


function getSecondaryColor() {
  const now = new Date();
  const morningStart = setHours(now, 6); // Adjust this time based on your preferences
  const afternoonStart = setHours(now, 12); // Adjust this time based on your preferences
  const eveningStart = setHours(now, 18); // Adjust this time based on your preferences

  if (isBefore(now, morningStart)) {
    // Morning secondary colors: Blue Gray or Cool Gray
    return isBefore(now, afternoonStart) ? colors.blueGray[500] : colors.coolGray[500];
  } else if (isBefore(now, afternoonStart)) {
    // Afternoon secondary colors: Warm Gray or True Gray
    return isBefore(now, eveningStart) ? colors.warmGray[500] : colors.trueGray[500];
  } else {
    // Evening secondary colors: Gray
    return colors.gray[500];
  }
}

