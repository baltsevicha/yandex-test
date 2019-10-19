// const paths = require('../config/webpack/paths');
// const alias = require('../config/webpack/aliases');
// const getWebpackConfig = require('../config/dev.webpack.config');

// const devConfig = getWebpackConfig({});

module.exports = async ({ config }) => {
    // config.entry = [
    //     'react-image-crop/dist/ReactCrop.css',
    //     'react-id-swiper/src/styles/css/swiper.css',
    //     paths.appStyles,
    //     ...config.entry
    // ];

    // config.resolve.alias = alias;
    // config.module.rules = devConfig.module.rules;

    return config;
};
