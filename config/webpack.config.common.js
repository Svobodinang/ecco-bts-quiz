const getPlugins = require('./assets/plugins/common');
const { images, fonts } = require('./assets/rules/files');
const pug = require('./assets/rules/pug');

module.exports = ({ src = '', dist = '', isProd = false }) => ({
    mode: 'production',
    context: src,
    entry: {
        app: './app.js'
    },
    stats: {
        assets: false,
        builtAt: false,
        cached: false,
        children: true,
        chunks: false,
        chunkModules: false,
        chunkOrigins: false,
        entrypoints: false,
        errorDetails: true,
        errors: true,
        hash: false,
        modules: false,
        moduleTrace: false,
        timings: false,
        version: false,
        warnings: true
    },
    output: {
        path: dist,
        filename: 'assets/js/[name].js',
    },
    optimization: {
        // runtimeChunk: true,
        splitChunks: {
            chunks: 'all',
            minSize: 30000,
            // maxSize: 0,
            minChunks: 1,
            minRemainingSize: 0,
            maxAsyncRequests: 30,
            maxInitialRequests: 30,
            automaticNameDelimiter: '~'
        }
    },
    module: {
        rules: [
            pug(isProd),
            images,
            fonts
        ]
    },
    plugins: getPlugins(isProd)
});
