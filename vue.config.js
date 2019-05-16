const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV);
module.exports = {
    open: IS_PROD,
    devServer: {
        proxy: 'http://39.105.35.189:3000'
    }
};
