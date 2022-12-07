const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval-cheap-module-source-map',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'build'),
        clean: true,
        publicPath: '/'
    },
    devServer: {
        static: path.resolve(__dirname, 'build'),
        historyApiFallback: true,
        hot: true,
        proxy: {
            // port: 8080,
            // host: 'http://localhost',
            // '/api': {
            //     target: 'http://10.21.104.41:80'
            // }
        }
    }
});

