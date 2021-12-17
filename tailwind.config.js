module.exports = {
  mode: 'jit',
  purge: ['**/*.html'],
  content: ["**/*.html"],
  theme: {
    extend: {
      colors: {
        gray33: '#333',
        whiteYellow: '#fff',
      },
      screens: {
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }

        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }

        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
}
