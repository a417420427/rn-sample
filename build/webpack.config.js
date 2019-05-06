const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Sass = require('sass')
const env = process.env.NODE_ENV
const webpack = require('webpack')
module.exports = {
    mode: env,
    entry: path.resolve(__dirname, "../src/index.tsx"),
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },

    // Enable sourcemaps for debugging webpack's output.
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
            // {
            //   test: /\.(svg|svgz)$/,
            //   issuer: /(\.tsx?)$/,
            //   use: [
            //     {
            //       loader: 'babel-loader',
            //     },
            //     {
            //       loader: 'react-svg-loader',
            //       options: {
            //         svgo: svgoConfig,
            //       },
            //     },
            //   ],
            // },
            {
              test: /\.(svg|svgz)$/,
              use: [
                {
                  loader: 'url-loader',
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
                  },
                },
              ],
            },
          ],
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
 
    devServer: {
        contentBase: path.join(__dirname, '../dist'),
        compress: true,
        port: 9000,
        historyApiFallback: true,
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
        })
    ]
};