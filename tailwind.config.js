module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Open sans', 'Montserrat']
      },
      fontSize: {
        16: ['16px', '30px'],
        14: ['14px', '24px'],
        13: ['13px', '23px'],
        18: ['18px', '22px'],
        12: ['12px', '20px'],
        20: ['20px', '38px'],
        10: ['10px', '18px'],
        24: ['24px', '32px'],
        26: ['26px', '34px'],
        48: ['48px', '50px'],
        36: ['36px', '38px'],
        38: ['38px', '40px'],
        34: ['34px', '36px'],
        30: ['30px', '40px'],
        22: ['22px', '36px'],
        28: ['28px', '38px'],
        40: ['40px', '40px'],
        42: ['42px', '42px'],
        60: ['60px', '60px'],
        50: ['50px', '50px'],
        32: ['32px', '50px'],
      },
      height: {
        400: '400px',
        475: '475px',
        300: '300px',
        500: '500px',
        1200: '1200px',
        40: '40px',
        30: '30px',
        200: '200px',
        150: '150px',
        100: '100px',
        '70vh': '70vh',
        '828': '828px',
        '60px': '60px'
      },
      width: {
        'statFull': '300px',
        40: '40px',
        30: '30px',
        150: '150px',
        200: '200px',
        406: '406px',
        '1300px': '1300px'
      },
      colors: {
        'mist': '#e9e1ce',
        'dark-grey': '#3d3d3c',
        'brown-r28': '#482122'
      },
      inset: {
        '95': '95px',
        '56': '56px',
      },
      gridTemplateColumns: {
        'biz-cols': 'repeat(6, auto)',
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
