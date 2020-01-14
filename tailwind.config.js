const { colors, flex } = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    inset: {
      '1/2': '50%',
      '2/100': '2%',
      '0': 0,
      auto: 'auto',
    },
    minHeight: {
      '0': '0',
      'screen': '100vh',
      'full': '100%',
      'min-content': 'min-content',
      '64': '16rem'
    },
    flex: Object.assign({}, flex, {'full': '0 0 100%', '1/10': '0 0 10%', '3/10': '0 0 33%', '1/2': '0 0 50%'}),
    colors: {
      white: colors.white,
      black: colors.black,
      none: "none",
      'black-transparent': 'rgba(0,0,0,0.8)',
      primary: {
        "050": "#FFF",
        "100": "#FAFAFA",
        "200": "#EAEAEA",
        "300": "#999999",
        "400": "#888888",
        "500": "#666666",
        "600": "#444444",
        "700": "#333333",
        "800": "#111111",
        "900": "#000"
      },
      "support-error": {
        "050": "#FF3333",
        "500": "#FF0000",
        "900": "#E60000",
      },
      "support-positive": {
        "050": "#FF0080",
        "300": "#F81CE5",
        "600": "#7928CA",
        "800": "#79FFE1",
      },
      "support-success": {
        "050": "#3291FF",
        "500": "#0070F3",
        "900": "#0366D6",
      },
      "neutral": {
        "050": "#F7B955",
        "500": "#F5A623",
        "900": "#F49B0B",
      }
    }
  },
  
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: []
}
