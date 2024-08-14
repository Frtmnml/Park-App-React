/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#FC7F36',
        secondary: '#FF5F00',
        lightgray: '#E8E2E2',
        lightbg: '#E5E1E1',
        light: '#F5F5F5',
        darkgray: '#202020',
        darkbg: '#333333',
        dark: '#151A23',
        danger: '#e91f00',
        success: '#54B435',
        warning: '#ffbb52',
      },
      backgroundImage: {
        'hero-pattern': "url('/images/bg.png')",
      },
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      arvo: ['Arvo', 'serif'],
    },
  },
  plugins: [],
};
