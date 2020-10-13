module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
   
    extend: {
      borderRadius: {
        xlg: '14px',
        xxlg:'50px'
      },
      height: {
        
        lg: '400px',
        md:'250px',

      },
      width:{
        xlg:'20rem',
        xxlg:'50rem'
      },
      margin:{
        lg:'600px'
      }
    }
  },
  prefix: 'tw-',
  variants: {},
  plugins: []
};
