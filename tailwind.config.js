/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      'primary-one': '#606AFF',
      'primary-two': '#F1F2FF',
      secondary: '#00C4A1',
    },
    fontFamily: {
      'regular': ['CarbonaTest-Regular', 'sans-serif'],
      'semiBold': ['CarbonaTest-SemiBold', 'sans-serif'],
      'bold': ['CarbonaTest-Bold', 'sans-serif'],
      'extraBold': ['CarbonaTest-ExtraBold', 'sans-serif'],
    },
    fontWeight: {
      regular: 400,
      semiBold: 600,
      bold: 700,
      extraBold: 800,
    },
  },
};
