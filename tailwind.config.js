// tailwind.config.js

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cursive: ['"Your Cursive Font"', 'cursive', 'verdana'],
      },
    },
  },
  darkMode: 'class', // Enabling dark mode
  // ... other theme configuration
  plugins: [],
}
