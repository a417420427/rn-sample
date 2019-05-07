const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config') 
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = merge(baseConfig, {
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, '../'),
        compress: true,
        port: 9000,
        historyApiFallback: true,
        publicPath: '/',
        disableHostCheck: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../index.html'),
            filename: 'index.html'
        }),
        new webpack.ProvidePlugin({
          regeneratorRuntime: 'regenerator-runtime',
          React: 'react',
          ReactDOM: 'react-dom',
        }),
        new webpack.HotModuleReplacementPlugin(),
        new CopyWebpackPlugin([
          {
            from: { glob: '.', dot: false },
            to: '.',
            ignore: ['images/**/*'],
            context: path.resolve(__dirname, '../src/assets'),
          },
        ]),
    ]
})