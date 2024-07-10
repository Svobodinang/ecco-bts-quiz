const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const commonOptions = {
    test: /\.(css|scss)$/,
    exclude: /node_modules/
};

const commonLoaders = [
    {
        loader: 'css-loader',
        options: {
            importLoaders: 1,
            sourceMap: true
        }
    },
    {
        loader: 'postcss-loader',
        options: {
            postcssOptions: {
                syntax: 'postcss-scss',
                // config: path.dirname('./'),
                plugins: {
                    autoprefixer: {},
                    'postcss-import': {},
                    'postcss-initial': {},
                    'postcss-font-variant': {},
                    'postcss-easing-gradients': {},
                    'postcss-env-function': {},
                    'postcss-flexbugs-fixes': {},
                    'postcss-custom-media': {
                        importFrom: [
                            'src/css/custom-media.pcss'
                        ]
                    },
                    'postcss-preset-env': {
                        stage: 0
                    }
                }
            }
            // config: {
            //     path: './'
            // }
        }
    },
    {
        loader: 'sass-loader',
        options: {
            sourceMap: true
        }
    }
];

module.exports = {
    dev: {
        ...commonOptions,
        use: [
            'style-loader',
            ...commonLoaders
        ]
    },
    prod: {
        ...commonOptions,
        use: [
            MiniCssExtractPlugin.loader,
            ...commonLoaders
        ]
    }
};
