const path = require('path');
module.exports = {
    presets: ['next/babel'],
    plugins: [
        [
            '@stylexjs/babel-plugin',
            {
                dev: process.env.NODE_ENV === 'development',
                test: process.env.NODE_ENV === 'test',
                // runtimeInjection:
                //     process.env.NODE_ENV === 'development'
                //         ? true
                //         : false,
                runtimeInjection: false,
                genConditionalClasses: true,
                treeshakeCompensation: true,
                aliases: {
                    '@/*': [path.join(__dirname, '*')],
                },
                unstable_moduleResolution: {
                    type: 'commonJS',
                    rootDir: __dirname,
                },
            },
        ],
        '@babel/plugin-transform-private-methods',
    ],
};
