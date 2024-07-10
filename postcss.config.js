module.exports = ({ cwd }) => ({
    sourceMap: true,
    ident: 'postcss',
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
                `${cwd}/src/css/custom-media.pcss`
            ]
        },
        'postcss-preset-env': {
            stage: 0
        }
    }
});
