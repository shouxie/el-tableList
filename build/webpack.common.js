const path = require('path');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const config = require('./config');

module.exports = {
  mode: 'production',
  entry: {
    app: ['./src/index.js']
  },
  output: {
    path: path.resolve(process.cwd(), './lib'),
    publicPath: '/dist/',
    filename: 'dlj-components.common.js',
    chunkFilename: '[id].js',
    libraryExport: 'default',
    library: 'DLJCOMPONENTS',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: config.alias,
    modules: ['node_modules']
  },
  externals: config.externals,
  performance: {
    hints: false
  },
  stats: {
    children: false
  },
  optimization: {
    minimize: false
  },
  module: {
    rules: [
      {
        test: /\.(jsx?|babel|es6)$/,
        include: process.cwd(),
        exclude: config.jsexclude,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            preserveWhitespace: false
          }
        }
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
          test: /\.less$/,
          exclude : '/node_modules',
          use: [
              {
                  loader: 'style-loader'
              },
              {
                  loader: 'css-loader',   
                  options: {
                      importLoaders: 1
                  }
              },
              {
                  loader: 'postcss-loader',
                  options: {
                      ident: 'postcss',
                      plugins: (loader) => [
                        require('postcss-import')({ root: loader.resourcePath }),
                        require('postcss-cssnext')(),
                        require('autoprefixer')(),
                        require('cssnano')()
                      ]
                    }
              },
              {
                  loader: 'less-loader',  // 
                  options: {
                      importLoaders: 1
                  }
              }
          ]
      },
      {
        test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: path.posix.join('static', '[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: [
    new ProgressBarPlugin(),
    new VueLoaderPlugin()
  ]
};
