const pkgConfig = require('./package.json')
const ENV = process.env.NODE_ENV || 'development'
const isProd = ENV === 'development'
module.exports = {
  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-syntax-dynamic-import',
    '@loadable/babel-plugin',
    ENV === 'development' ? 'react-hot-loader/babel' : undefined,
    [
      'transform-imports',
      {
        ramda: {
          transform: 'ramda/es/${member}',
          preventFullImport: true,
        },
        lodash: {
          transform: 'lodash/${member}',
          preventFullImport: true,
        },
      },
    ],
    isProd ? null : "dynamic-import-node"
  ].filter(i => i),
  presets: [
    '@babel/preset-react',
    [
      '@babel/preset-env',
      {
        modules: ENV === 'test' ? 'commonjs' : false,
        targets: {
          browsers: [
            'last 2 Chrome versions',
            'last 2 Firefox versions',
            'last 2 Edge versions',
            'Safari >= 9',
          ],
        },
      },
    ],
  ],
}
