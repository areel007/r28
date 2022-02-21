module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat']
      },
      fontSize: {
        16: ['16px', '24px'],
        14: ['14px', '18px'],
        18: ['18px', '32px'],
        12: ['12px', '18px'],
        20: ['20px', '30px'],
        10: ['10px', '16px'],
      },
      height: {
        400: '400px',
        475: '475px',
        300: '300px',
        500: '500px',
        1200: '1200px',
        40: '40px',
        30: '30px',
      },
      width: {
        'statFull': '300px',
        40: '40px',
        30: '30px',
      }
    },
  },
  variants: {
    extend: {
      margin: ['first', 'last'],
    },
  },
  plugins: [],
}
