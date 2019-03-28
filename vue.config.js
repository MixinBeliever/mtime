module.exports = {
    devServer: {
      // port:8000, //随便改端口号 -
      proxy: {
        '/Service': {
          target: 'http://m.mtime.cn',
          host: 'm.mtime.cn',
          changeOrigin: true
          // pathRewrite: {
          //     '^/v4/api': '/v4/api'
          //   }
        },
      }
    }
  }
  