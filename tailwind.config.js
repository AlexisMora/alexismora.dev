/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4A89F8',
        darkerPrimary: '#041F4E',
        dark: '#010814'
      },
      fontFamily: {
        'GT-America-CT': ['GT-America-CT'],
        'GT-America-Expanded': ['GT-America-Expanded'],
        'GT-America-Standard': ['GT-America-Standard']
      }
    }
  },
  plugins: []
}
