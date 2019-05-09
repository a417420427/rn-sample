const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin')
const MinCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = merge(baseConfig, {
    mode: 'production',
    // entry: {
    //     index: path.resolve(__dirname, "../src/index.tsx"),
    //     vendors:
    // }, 
    optimization: {
        namedChunks: true,
        namedModules: true,
        concatenateModules: false,
        runtimeChunk: true,
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                vendors: {
                    test: /\bnode_modules\b/,
                },
            },
        },
        minimizer: [
            new TerserWebpackPlugin({
                sourceMap: true,
                parallel: true,
                terserOptions: {
                    mangle: {
                        keep_classnames: true,
                        keep_fnames: true,
                    },
                    compress: {
                        keep_classnames: true,
                        keep_fnames: true,
                    },
                },
            }),
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: path.resolve(__dirname, '../index.html')
            }),
            new MinCssExtractPlugin({
                filename: '[name].css'
            })
        ],
    },
})