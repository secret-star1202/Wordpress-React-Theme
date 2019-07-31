let path = require('path'),
  MinifyPlugin = require('babel-minify-webpack-plugin'),
  UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  target: 'web',
  plugins: [
    new MinifyPlugin({}, {
      comments: false
    })
  ],
  optimization: {
    minimizer: [new UglifyJsPlugin({
      uglifyOptions: {
        output: {
          comments: false,
        },
      },
    })]
  },
  mode: 'production',
  entry: {
    app: './src/index.jsx'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  resolve: {
    alias: {
      'react-router-dom': path.resolve(__dirname, 'node_modules',
        'react-router-dom', 'cjs', 'react-router-dom.min.js'),
      'react-dom/server': path.resolve(__dirname, 'node_modules', 'react-dom',
        'cjs', 'react-dom-server.browser.production.min.js'),
      'react-dom': path.resolve(__dirname, 'node_modules', 'react-dom', 'cjs',
        'react-dom.production.min.js'),
      react: path.resolve(__dirname, 'node_modules',
        'react', 'cjs', 'react.production.min.js'),
      'prop-types': path.resolve(__dirname, 'node_modules', 'prop-types',
        'prop-types.min.js'),
      history: path.resolve(__dirname, 'node_modules', 'history', 'cjs',
        'history.min.js'),
      mediaelement: path.resolve(__dirname, 'node_modules', 'mediaelement',
        'build', 'mediaelement-and-player.min.js')
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          babelrc: true,
          comments: false,
          plugins: ['./babel/hashify']
        }
      },
      {
        test: /\.js$/,
        include: /node_modules\/moment/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['./babel/moment_no_i18n']
          }
        }
      },
      {
        test: /\.js$/,
        include: /node_modules\/mediaelement/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['./babel/mejs_no_i18n', './babel/mejs_no_video']
          }
        }
      }
    ]
  }
};
