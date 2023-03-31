/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ffbe34",
        primary2: "#091242",
        secondary: "#f4f4f4",
        heading: "#1c1f35",
        paragraph: "#666c89",
        bg:"rgba(255,182,41)",
        gradient:"rgba(9, 18, 66, 0.25)",
        nav:"rgba(255, 255, 255, 0.2)",
        bgFooter:"rgba(255, 255, 255, 0.08)"
      },
    },
  },
  plugins: [],
}

