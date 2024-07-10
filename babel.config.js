const plugins = [
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-private-methods'
];

const presets = {
    dev: [
        ['@babel/preset-env', {
            // use this targets rule if you want to serve and test
            // your dev code only in modern browsers.
            targets: [
                'last 1 chrome version',
                'last 1 firefox version'
            ],
            // // use this targets rule if you want to serve and test
            // your dev code in both modern and legacy browsers.
            // targets: ['> 0.25%', 'IE 11'],
            useBuiltIns: 'usage',
            corejs: {
                version: '3',
                proposals: true
            },
            modules: 'auto'
        }]
    ],
    prod: [
        ['@babel/preset-env', {
            targets: '> 0.25%, not dead',
            useBuiltIns: 'usage',
            corejs: {
                version: '2.4.0',
                proposals: true
            },
            modules: false
        }]
    ]
};


module.exports = ({ env }) => {
    const isProd = env() === 'production';

    return {
        presets: isProd ? presets.prod : presets.dev,
        plugins
    };
};
