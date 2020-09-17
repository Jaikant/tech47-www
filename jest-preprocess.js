const babelOptions = {
  presets: ['babel-preset-gatsby'],
  plugins: ['emotion', 'syntax-class-properties', 'transform-class-properties'],
}

module.exports = require('babel-jest').createTransformer(babelOptions)
