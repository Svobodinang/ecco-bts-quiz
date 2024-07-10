const getPlugins = require('./assets/plugins/dev');
const { dev: css } = require('./assets/rules/css');
const { dev: js } = require('./assets/rules/js');

module.exports = ({ dist = '' }) => ({
    mode: 'development',
    devtool: 'eval',
    devServer: {
        // contentBase: dist,
        compress: false,
        // hot: true,
        // port: 8080,
        liveReload: true,
    },
    module: {
        rules: [
            js,
            css
        ]
    },
    plugins: getPlugins()
});
