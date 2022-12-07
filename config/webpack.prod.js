const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = merge(common, {
    mode: 'production',

    output: {
        filename: '[name].[contenthash:8].bundle.js',
        path: path.resolve(__dirname, '../build'),
        clean: true,
    },

    optimization: {
        runtimeChunk: true,
        minimizer: [
            new TerserPlugin({
    			parallel: 4,
    			terserOptions: {
    				parse: {
    					ecma: 8,
                    },
                    compress: {
                        ecma: 5,
                        warnings: false,
                        comparisons: false,
                        inline: 2,
                    },
                    mangle: {
                        safari10: true,
                    },
                    output: {
                        ecma: 5,
                        comments: false,
                        ascii_only: true,
                    },
                },
            }),
        ],
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'all',
                    priority: 10, // 优先级
    			    enforce: true
                }
            }
        },
    },

    module: {
        rules: [
            {
                test: /\.(sass | scss)$/,
                use: [ 'style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ]
            }
        ]
    },
    performance: {
        hints: "warning", // 枚举
        maxAssetSize: 10 * 1024 * 1024, // 整数类型（以字节为单位）
        maxEntrypointSize: 10 * 1024 * 1024, // 整数类型（以字节为单位）
    },

    plugins: [
        new MiniCssExtractPlugin()
    ]
});



