/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        neutral: {
          10: '#FFFFFF',
          20: '#F5F6F5',
          30: '#EEEEEE',
          40: '#E1E3E2',
          50: '#C4C6C5',
          60: '#A1A5A3',
          70: '#7A7F7C',
          80: '#666C69',
          90: '#48504C',
          100: '#08120D',
        },
        primary: {
          main: '#8EA99B',
          10: '#E8EEEB',
          20: '#C6D4CD',
          30: '#768D81',
          40: '#47554E',
        },
        secondary: '#F5BB5E',
        passed: '#258034',
        rejected: '#8D0100',
      },
    },
    fontFamily: {
      sans: ['Proxima Nova', ...defaultTheme.fontFamily.sans],
    }
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.appearance-textfield::-webkit-inner-spin-button': {
          '-webkit-appearance': 'none',
          'margin': '0',
        },
        '.appearance-textfield::-webkit-outer-spin-button': {
          '-webkit-appearance': 'none',
          'margin': '0',
        },
        '.appearance-textfield': {
          '-moz-appearance': 'textfield',
        },
      };
      addUtilities(newUtilities, ['responsive']);
    },
  ],
};
