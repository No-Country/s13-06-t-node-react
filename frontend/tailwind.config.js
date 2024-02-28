import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      jakarta: ['Plus Jakarta Sans', 'sans-serif']
    },
    extend: {}
  },
  plugins: [daisyui],
  daisyui: {
    themes: ['dark', 'light'],
    prefix: 'daisy-'
  },
  darkMode: 'class'
};
