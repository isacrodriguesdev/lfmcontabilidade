const withReactSvg = require('next-react-svg')
const path = require('path')

module.exports = withReactSvg({
  include: path.resolve(__dirname, './src/assets/images/svg/'),
  webpack(config, options) {
    return config
  },
  devIndicators: {
    autoPrerender: false,
  },
})
