module.exports = {
  darkMode: 'class', // or 'media' if you prefer automatic dark based on system
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
    },
    animation: {
      ripple: "ripple 3s linear infinite",
    },
    keyframes: {
      ripple: {
        "0%": {
          transform: "translate(-50%, -50%) scale(1)",
          opacity: "1",
        },
        "100%": {
          transform: "translate(-50%, -50%) scale(2)",
          opacity: "0",
        },
      },
    },
  },
  plugins: [],
}
