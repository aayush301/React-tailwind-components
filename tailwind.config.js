const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        fadeInUp: "fadeInUp 500ms ease-out",
        loader: "loader 600ms linear infinite",
      },
      keyframes: {
        loader: {
          "0%": { transform: "rotate(0)" },
          "50%": { transform: "rotate(180deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        ripple: {
          "0%": { width: 0, height: 0, opacity: 1 },
          "100%": { width: "500px", height: "500px", opacity: 0 },
        },
        slideInFromDown: {
          from: { transform: "translateY(100vh)" },
          to: { transform: "translateY(0px)" },
        },
        slideInFromUp: {
          from: { transform: "translateY(-100vh)" },
          to: { transform: "translateY(0px)" },
        },
        slideInFromLeft: {
          from: { transform: "translateX(-100vw)" },
          to: { transform: "translateX(0px)" },
        },
        slideInFromRight: {
          from: { transform: "translateX(100vw)" },
          to: { transform: "translateX(0px)" },
        },
        zoomIn: {
          from: { transform: "scale(0)" },
          to: { transform: "scale(1)" },
        },
        slideOutToDown: {
          from: { transform: "translateY(0px)" },
          to: { transform: "translateY(100vh)" },
        },
        slideOutToUp: {
          from: { transform: "translateY(0px)" },
          to: { transform: "translateY(-100vh)" },
        },
        slideOutToLeft: {
          from: { transform: "translateX(0px)" },
          to: { transform: "translateX(-100vw)" },
        },
        slideOutToRight: {
          from: { transform: "translateX(0px)" },
          to: { transform: "translateX(100vw)" },
        },
        zoomOut: {
          from: { transform: "scale(1)" },
          to: { transform: "scale(0)" },
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
