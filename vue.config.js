const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV);
module.exports = {
    devServer: {
        overlay: {
          warnings: true,
          errors: true
        },
        open: IS_PROD,
        host: '0.0.0.0',
        port: 8000,
        https: false,
        hotOnly: false,
        proxy: {
            '/api': {
                target: 'http://39.105.35.189:3000',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/'
                }
            }
        }
        // proxy:'http://39.105.35.189:3000'
    }
}


