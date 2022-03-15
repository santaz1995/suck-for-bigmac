const env = process.env.NODE_ENV === "production";
const withImages = require('next-images')

module.exports = withImages({
  exportPathMap: function () {
    return {
      "/": { page: "/" },
    }
  },
  images: {
    domains: [env ? 'https://santaz1995.github.io/suck-for-bigmac/' : '']
  },
  baseUrl: env ? '/suck-for-bigmac/' : '',
  basePath: env ? '/suck-for-bigmac' : '',
  assetPrefix: env ? '/suck-for-bigmac/' : '',
  webpack: (config, { }) => {
    config.module.rules = config.module.rules.map(rule => {
      if(rule.loader === 'babel-loader') {
        rule.options.cacheDirectory = false
      }
      return rule
    })
    return config
  }
})
