import path from 'path'
import Sass from 'sass'
import webpack, { Configuration } from 'webpack'
import ManifestPlugin from 'webpack-manifest-plugin'

export const NODE_ENV = process.env.NODE_ENV || 'development'

export const isDev = NODE_ENV === 'development'

export const svgoConfig = {
  plugins: [
    { removeTitle: true },
    {
      // https://github.com/svg/svgo/blob/174c37208017e5909d5f7db2e8faba49663a945a/plugins/removeAttrs.js#L22
      removeAttrs: {
        attrs: ['stroke', 'stroke-width'],
      },
    },
  ],
  floatPrecision: 2,
}

export const config: Configuration = {
  mode: NODE_ENV === 'production' ? 'production' : 'development',
  context: path.resolve(__dirname, '..'),
  devtool: 'cheap-source-map',
  node: {
    __filename: true,
    __dirname: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    mainFields: ['typescript:main', 'jsnext:main', 'module', 'main'],
  },
  module: {

  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: isDev ? '[name].[hash].js' : '[name].[chunkhash].js',
  },
  plugins: [
    new ManifestPlugin(),
    new webpack.ProvidePlugin({
      regeneratorRuntime: 'regenerator-runtime',
      React: 'react',
      ReactDOM: 'react-dom',
    }),
  ],
}
