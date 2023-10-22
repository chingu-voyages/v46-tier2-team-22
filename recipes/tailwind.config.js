export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "Gunmetal-gray": "#586656",
        Freesia: "#ceb212",
        Cinnabar: "#D64b32",
        Pewter: "#acafac",
        "Burnt-orange": "#a34716",
        Beige: "#b4ac83",
      },
      backgroundImage: {
        Salad: "url('./src/images/salads.jpg')",
        "Many-dishes": "url('./src/images/manyDishes.jpg')",
      },
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        "50%": "50%",
        16: "4rem",
      },
      screens: {
        25: "25in",
      },
    },
  },
  plugins: [],
};
