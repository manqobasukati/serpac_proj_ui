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
        xxlg:'40rem',
        lg: '400px',
        mdlg:'20rem',
        md:'250px',
        xxxlg:'30rem'

      },
      width:{
        xlg:'20rem',
        xxlg:'56rem'
      },
      margin:{
        lg:'30rem'
      }
    }
  },
  prefix: 'tw-',
  variants: {},
  plugins: []
};
