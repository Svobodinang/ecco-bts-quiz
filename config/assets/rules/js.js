const commonOptions = {
    test: /\.js$/,
    exclude: /node_modules/
};

const commonLoaders = [
    { loader: 'babel-loader' }
];

module.exports = {
    dev: {
        ...commonOptions,
        use: [
            ...commonLoaders,
            // {
            //     loader: 'eslint-webpack-plugin',
            //     options: {
            //         fix: true,
            //         cache: false,
            //         configFile: '.eslintrc.json'
            //     }
            // }
        ]
    },
    prod: {
        ...commonOptions,
        use: [
            ...commonLoaders
        ]
    }
};
