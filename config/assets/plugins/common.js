// const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ResourceHintWebpackPlugin = require('resource-hints-webpack-plugin');

// const meta = require('../../../src/data/meta.json');
// const share = require('../../../src/data/share.json');

module.exports = (isProd) => {
    const clean = new CleanWebpackPlugin();
    // const hashedIds = new webpack.ids.HashedModuleIdsPlugin({
    //     hashFunction: 'md4',
    //     hashDigest: 'base64',
    //     hashDigestLength: 8
    // });
    const html = new HtmlWebpackPlugin({
        template: 'index.pug',
        filename: 'index.html',
        // inject: true,
        // meta: {
        //     viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover',
        //     description: meta.description
        // }
    });

    // const shareKeys = Object.keys(share);
    // const shareHtml = shareKeys.map((sKey) => {
    //     const {
    //         title, description, redirect, image
    //     } = share[sKey];
    //     const isDevMode = !isProd;

    //     return new HtmlWebpackPlugin({
    //         hash: true,
    //         template: 'templates/share.html',
    //         filename: `${sKey}.html`,
    //         minify: isProd,
    //         meta: {
    //             viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover',
    //             description
    //         },
    //         lang: meta.lang,
    //         title,
    //         description,
    //         url: isDevMode ? '/' : meta.url,
    //         redirect: `${(isDevMode ? '/' : meta.url)}${redirect || ''}`,
    //         shareUrl: `${(isDevMode ? '/' : meta.url)}${sKey}.html`,
    //         shareImage: image,
    //         themeColor: meta.themeColor,
    //         accentColor: meta.accentColor
    //     });
    // });
    const resourseHint = new ResourceHintWebpackPlugin();

    return [
        clean,
        // hashedIds,
        html,
        // ...shareHtml,
        resourseHint
    ];
};
