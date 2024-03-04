import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      jakarta: ['Plus Jakarta Sans', 'sans-serif']
    },

    extend: {
      colors: {
        'background-light': '#EFF0F0',
        'meadow-green': '#27C277',
        'ocean-blue': '#84BCDA',
        'pastel-sky-blue': '#A5CCE0',
        'lush-green-list': '#27C27780',
        'ethereal-frost': '#D8ECF6',
        'silver-mist': '#DBDDE6',
        'shadowed-slate': '#00062640',
        'subdued-slate': '#808393',
        'slate-stone-icon': '#4B4D58',
        'midnight-ink-text': '#051D11',
        'steel-gray-subtitle': '#486284',
        'midnight-slate': '#486284',
        'selected-seat': '#FF5F00',
        'occupied-seat': '#808393',
        'available-seat': '#FFCC00',
        'color-dark': '#1A202C',
        'btn-orange': '#D97706'
      }
    }
  },
  plugins: [daisyui],
  daisyui: {
    themes: ['dark', 'light'],
    prefix: 'daisy-'
  },
  darkMode: 'class'
};
