// const meta = require('../../../src/data/meta.json');
const data = require('../../../src/data/basic.json');

module.exports = () => ({
    test: /\.pug$/,
    exclude: /node_modules/,
    use: [
        {
            loader: 'html-loader',
            options: {
                sources: true
            }
        },
        {
            loader: 'pug-plain-loader',
            options: {
                data: {
                    data,
                },
                pretty: true
            },
        },
    ]
});
