module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        genova: ['genova', 'sans-serif'],
        titlefont: ['titlefont', 'sans-serif'],
        hoverfont: ['hoverfont', 'sans-serif'],
        h1font: ['h1font', 'sans-serif'],
        paragrabhfont: ['paragrabhfont', 'sans-serif'],
      },

      colors: {
        maxLight: "#ffffff",
        minLight: "#F6F5F2",

        minGray: '#EFEFEF',
        maxGray: '#BBBBBB70',

        maxDark: "#171717",
        minDark: '#2B2B2B',
        minDarkOP: '#2B2B2B40',

        textDark: "#7D7C7C",
        textGray: "#B2B1B9",
        textLight: "#E8E2E2",
        textWhite: "#F4F6FF",
        textMild: "#c8c8c8",

        blue: "#7AB2D3",
        yelloww: "#FFF9B6",
        violet: "#CDC1FF",
        green: "#C1F2B0",
        pink: "#F4BEEE",
        redd: "#CA7373",

      },

      boxShadow: {
        'mid': '0 0px 5px rgba(0, 0, 0, 0.5)',
        'lrg': '0 0px 10px rgba(0, 0, 0, 0.7)',
      },
      keyframes: {
        zoomIn: {
          '0%': { transform: 'scale(0)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
      },
      animation: {
        zoomIn: 'zoomIn 0.3s ease-out',
      },
    },

    screens: {
      'xs': '320px',
      'ms': '375px',
      sm: '425px',
      md: '768px',
      xl: '1024px',
      // xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}
