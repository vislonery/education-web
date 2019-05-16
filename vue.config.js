// const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV);
module.exports = {
    devServer: {
        open: true,
        proxy: 'http://39.105.35.189:3000'
    }
};
