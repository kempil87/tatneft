/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

export const colors = {
  primary: '#0d6efd',
  danger: '#ff3860',
  secondary: '#a12ec2',
  success: '#20ee4f',
  info: '#17a2b8',
  bg: '#1a1a1a',
  light_grey: '#F4F4F4',
  border: '#27272a',
  accent: '#18181c',
  placeholder: '#828283',
};

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      colors,
    },
    screens: {
      ...defaultTheme.screens,
    },
    spacing: {
      ...defaultTheme.spacing,
      4.5: '18px',
    },
  },
  darkMode: 'class',
  plugins: [
    function ({ addUtilities, theme, addVariant }) {
      const spacing = theme('width');

      const sizeUtility = Object.entries(spacing).reduce(
        (acc, [key, value]) => {
          acc[`.min-size-${key.replace(/[./]/g, '\\$&')}`] = {
            'min-width': value,
            'min-height': value,
          };
          acc[`.max-size-${key.replace(/[./]/g, '\\$&')}`] = {
            'max-width': value,
            'max-height': value,
          };
          return acc;
        },
        {},
      );

      const clampUtility = Object.entries(spacing).reduce(
        (acc, [key, value]) => {
          acc[`.clamp-${key.replace(/[./]/g, '\\$&')}`] = {
            width: value,
            height: value,
            'min-width': value,
            'min-height': value,
            'max-width': value,
            'max-height': value,
          };

          return acc;
        },
        {},
      );

      addVariant('children', '& > *');
      addVariant('children-after', '& > *:after');
      addVariant('span', '& > span');
      addVariant('p', '& > p');
      addVariant('div', '& > div');
      addVariant('svg', '& > svg');

      addUtilities({
        ...sizeUtility,
        ...clampUtility,
        '.flex-center': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        '.flex-between': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        },
        '.pos-abs': {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        },
        '.pos-abs-x': {
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
        },
        '.pos-abs-y': {
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
        },
      });
    },
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
