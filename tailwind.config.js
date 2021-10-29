module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // extend: {},
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#3490dc',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
      'customColor1':'#48b8b3',
      'customColor2':'#0f20a3',
      'customColor3':'rgb(90 173 249)',
      'customColor4':'rgb(12 83 199 / 50%)',


     }),
    //  borderRadius: {
    //   'large': '10px',
    //  }
   },
  variants: {
    extend: {},
  },
  plugins: [],
}
