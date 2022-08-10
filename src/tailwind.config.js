/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        outline: {
          '0%, 100%': {
            'outline-width': '5px',
            'outline-offset': '-5px',
        },
          '50%': {
            'outline-width:': '20px',
            'outline-offset': '20px',
        }
      }
    },
    animation: {
      outline: 'outline 4s ease-in-out infinite',
    }
  }
  },
  plugins: [],
}
