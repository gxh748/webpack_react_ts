const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
// const chalk = require('chalk');
// import chalk from 'chalk';
const { resolveApp, appSrc } = require('./path');

module.exports = {

    entry: {
        index: './src/index.tsx'
    },

    resolve: {
        alias: {
            '@': appSrc
        },
        extensions: [ '.tsx', '.ts', '.js', '.jsx' ],
        modules: [ 'node_modules', appSrc ]
    },

    cache: {
        type: 'filesystem'
    },

    module: {
        rules: [
            {
                test: /\.(png | jpg | svg | gif)$/i,
                type: 'assets/resources'
            },
            {
                test: /\.(woff | eot | woff2 | tff |otf)$/,
                type: 'assets/resources'
            },
            {
                test: /\.(scss|sass|css)$/,
                include: appSrc,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]
            },
            {
                test: /\.(tsx|ts|js|jsx)$/,
                include: appSrc,
                use: [
                    {
                        loader: 'esbuild-loader',
                        options: {
                            loader: 'tsx',
                            target: 'es2015'
                        }
                    }
                ]
            },
            {
                test: /\.css$/i,
                use: [
                    // compiles Less to CSS
                    'style-loader',
                    'css-loader',
                ],
            },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Analytics',
            template: '/public/index.html',
        }),
        new ProgressBarPlugin({
            format: `  :msg [:bar]  (:elapsed s)`
        })
    ]

};
