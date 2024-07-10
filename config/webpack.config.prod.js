const getPlugins = require('./assets/plugins/prod');
const { prod: css } = require('./assets/rules/css');
const { prod: js } = require('./assets/rules/js');

module.exports = () => ({
    mode: 'production',
    devtool: 'source-map',
    module: {
        rules: [
            js,
            css
        ]
    },
    plugins: getPlugins()
});

