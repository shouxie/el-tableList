
const cooking = require('cooking');
const webpack = require('webpack');
const config = require('./config');

cooking.set({
  entry: './src/index.js',
  dist: './lib',
  clean: false,
  format: 'umd',
  moduleName: 'DLJ-TABLE',
  extends: ['vue2'],
  alias: config.alias,
  externals: { vue: config.vue }
});

cooking.add('output.filename', 'index.js');
cooking.add('loader.js.exclude', config.jsexclude);
cooking.add('loader.scss', {
  test: /\.scss$/,
  loaders: ['style-loader', 'css-loader', 'sass-loader']
});
cooking.add('vue.preserveWhitespace', false);

module.exports = cooking.resolve();
