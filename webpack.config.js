const path = require('path');
const { merge } = require('webpack-merge');

const getDevConfig = require('./config/webpack.config.dev');
const getProdConfig = require('./config/webpack.config.prod');
const getCommonConfig = require('./config/webpack.config.common');

module.exports = () => {

    const env = process.env.NODE_ENV || 'development';
    const options = {
        isProd: process.env.NODE_ENV === 'production',
        src: path.join(__dirname, 'src'),
        dist: path.resolve(__dirname, 'docs')
    };

    switch (env) {
        case 'development': {
            return merge(getCommonConfig(options), getDevConfig(options));
        }
        default: {
            return merge(getCommonConfig(options), getProdConfig(options));
        }
    }
};
