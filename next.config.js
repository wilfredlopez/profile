const debug = process.env.NODE_ENV !== 'production'

const withImages = require('next-images')
module.exports = withImages({
  esModule: true,
  exportPathMap: function (defaultPathMap = {}) {
    return {
      ...defaultPathMap,
      '/': { page: '/' },
      '/home': { page: '/' },
      '/projects': { page: '/projects' },
      '/contact': { page: '/contact' },
      // '/newyear': { page: '/newyear' },
    }
  },
  assetPrefix: !debug ? '.' : '',
  webpack(config, options) {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty',
    }
    config.module.rules = config.module.rules.map(rule => {
      if (rule.loader === 'babel-loader') {
        rule.options.cacheDirectory = false
      }
      return rule
    })
    return config
  },
})
