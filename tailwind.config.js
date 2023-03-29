const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        fadeInUp: "fadeInUp 500ms ease-out",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(calc(-50% + 80px)) translateX(-50%)" },
          "100%": { opacity: 1, transform: "translateY(-50%) translateX(-50%)" },
        },
        ripple: {
          "0%": { width: 0, height: 0, opacity: 1 },
          "100%": { width: "500px", height: "500px", opacity: 0 },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".rotate-y-90": {
          transform: "rotateY(90deg)",
        },
      });
    }),
  ],
};
