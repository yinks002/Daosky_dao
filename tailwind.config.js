/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      "inter-tight": ["Inter Tight", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "hero-bg-image": 'url("/src/assets/images/grid_lines.png")',
        "hero-image": 'url("/src/assets/images/hero_image.jpeg")',
        "noise-grid-01": 'url("/src/assets/images/noise_grid_01.png")',
        "noise-grid-02": 'url("/src/assets/images/noise_grid_02.png")',
        "noise-grid-03": 'url("/src/assets/images/noise_grid_03.png")',
        "noise-grid-04": 'url("/src/assets/images/noise_grid_04.png")',
        "bg-noise-grid": "url('/src/assets/images/big_noise_grid.png')",
      },
    },
  },
  plugins: [],
};
