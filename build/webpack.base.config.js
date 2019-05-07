const path = require('path')
const Sass = require('sass')

module.exports = {
    entry: path.resolve(__dirname, "../src/index.tsx"),
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "../dist"),
        publicPath: '/'
    },

    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"],
        alias: {
          'assetsRoot': path.resolve(__dirname, '../src/assets')
        }
    },

    module: {
        rules: [
            {
              test: /\.tsx?$/,
              include: [path.resolve(__dirname, '../src')],
              use: ['babel-loader', 'ts-loader'],
            },
            {
              test: /\.css$/,
              use: [
                { loader: 'style-loader' },
                { loader: 'css-loader' },
              ],
            },
            {
              test: /\.(scss|sass)$/,
              use: [
                {
                  loader: 'style-loader',
                },
                {
                  loader: 'css-loader',
                  options: {
                    sourceMap: true,
                  },
                },
                {
                  loader: 'sass-loader',
                  options: {
                    sourceMap: true,
                    implementation: Sass,
                  },
                },
              ],
            },

            {
              test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2)$/,
              exclude: /node_modules/,
              use: [
                {
                  loader: 'url-loader',
                  options: {
                    limit: 10000,
                    name: 'static/[name].[hash:8].[ext]',
                  },
                },
              ],
            },
          ],
    },
};