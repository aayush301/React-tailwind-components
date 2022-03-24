module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "fadeInUp": "fadeInUp 500ms ease-out",
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(calc(-50% + 80px)) translateX(-50%)' },
          '100%': { opacity: 1, transform: 'translateY(-50%) translateX(-50%)' },
        },
      }
    },
  },
  plugins: [],
}