module.exports = {
    images: {
        test: /\.(gif|png|jpe?g|svg)$/i,
        type: 'asset/resource',
        generator : {
            filename : 'assets/images/[name][hash][ext][query]',
        }
    },
    fonts: {
        test: /\.(woff(2)?|ttf|eot|otf)(\?v=\d+\.\d+\.\d+)?$/,
        type: 'asset/resource',
        generator : {
            filename : 'assets/fonts/[name][hash][ext][query]',
        }
    }
};
