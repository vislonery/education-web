module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://39.105.35.189:3000',
                changeOrigin: true
            }
        }
    }
};
