/** @type {import('next').NextConfig} */
const path = require('path');
const stylexPlugin = require('@stylexjs/nextjs-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const nextConfig = {
    // Configure `pageExtensions` to include MDX files
    pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
    transpilePackages: ['@stylexjs/open-props'],
    images: {
        domains: ['raw.githubusercontent.com'],
    },
    output: 'standalone',

    // webpack: (
    //     config,
    //     { buildId, dev, isServer, defaultLoaders, webpack }
    // ) => {
    //     if (!dev) {
    //         config.optimization.minimize = true; // 미니파이 활성화
    //         config.optimization.minimizer = [
    //             new TerserPlugin({}),
    //         ];
    //     }

    //     return config;
    // },
    // Optionally, add any other Next.js config below
};

module.exports = stylexPlugin({
    aliases: {
        '@/*': [path.join(__dirname, '*')],
    },
    rootDir: __dirname,
})(nextConfig);
