// const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const CopyPlugin = require('copy-webpack-plugin');

module.exports = () => {
    const miniCss = new MiniCssExtractPlugin({
        filename: 'assets/css/[name].css'
    });
    // const copy = new CopyPlugin({
    //     patterns: [
    //         { from: path.resolve('public') }
    //       ]
    // });

    return [
        miniCss,
        // copy,
    ];
};
