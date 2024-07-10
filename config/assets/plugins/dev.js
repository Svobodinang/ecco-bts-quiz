const StylelintPlugin = require('stylelint-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = () => {
    const stylelint = new StylelintPlugin({
        files: ['./**/*.s?(a|c)ss'],
        fix: true,
        customSyntax: "postcss-scss"
    });

    const eslint = new ESLintPlugin({
        files: ['./**/*.js'],
        fix: true,
        failOnError: false
    });

    return [
        stylelint,
        eslint
    ];
};
