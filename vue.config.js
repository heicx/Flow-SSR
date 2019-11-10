let proxyObj = {};

const PROXY_PATH = ['/public/api/'];
const path = require('path');

function resolve (dir) {
  return path.join(__dirname, dir)
}

PROXY_PATH.forEach(value => {
  proxyObj[value] = {
    target: 'https://flow-admin-uat.blueo.tech/',
    changeOrigin: true,
    secure: false
  }
});

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
      .set('assets',resolve('assets'))
      .set('components',resolve('components'))
      .set('core',resolve('core'))

      if (process.env.analyzer) {
        config
          .plugin('webpack-bundle-analyzer')
          .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin);
      }
  },
  devServer: {
    disableHostCheck: true,
    stats: 'minimal',
    proxy: proxyObj
  }
}
