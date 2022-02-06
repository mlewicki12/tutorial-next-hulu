module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '2000px'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
