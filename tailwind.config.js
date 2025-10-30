/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        coral: {
          50: '#fff5f3',
          100: '#ffe8e3',
          200: '#ffd5cc',
          300: '#ffb8a8',
          400: '#ff8f73',
          500: '#FF5F4F',
          600: '#f03d2d',
          700: '#d42c1c',
          800: '#b02618',
          900: '#91241a',
        },
        sunset: {
          50: '#fff8ed',
          100: '#ffefd4',
          200: '#ffdca8',
          300: '#ffc271',
          400: '#ff9d38',
          500: '#FFB63A',
          600: '#f09020',
          700: '#c76f17',
          800: '#9f5818',
          900: '#804a17',
        },
        cocoa: {
          50: '#f7f3f2',
          100: '#e9e0dd',
          200: '#d4c0ba',
          300: '#ba9c93',
          400: '#a17c70',
          500: '#8c6658',
          600: '#6d4e42',
          700: '#4d3520',
          800: '#44311e',
          900: '#3d2c1c',
        },
      },
    },
  },
  plugins: [],
};
