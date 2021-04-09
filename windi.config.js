const colors = require('windicss/colors')

module.exports = {
    darkMode: 'class',
    plugins: [typography],
    theme: {
      extend: {
        colors: {
          teal: colors.teal,
        },
      }
    },
  }