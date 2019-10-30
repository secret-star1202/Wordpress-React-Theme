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
  mode: process.env.DEV_MODE ? 'development' : 'production',
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
      history: path.resolve(__dirname, 'node_modules', 'history', 'cjs',
        'history.min.js')
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
          plugins: process.env.DEV_MODE ? [] : ['./babel/hashify']
        }
      },
      {
        test: /\.jsx?$/,
        include: /react/,
        loader: 'babel-loader',
        options: {
          comments: false,
          plugins: process.env.DEV_MODE ? [] :
            ['@babel/plugin-proposal-throw-expressions',
              './babel/rightify', './babel/rightify-react']
        }
      },
      {
        test: /\.jsx?$/,
        include: /prop-types/,
        loader: 'babel-loader',
        options: {
          comments: false,
          plugins: process.env.DEV_MODE ? [] : ['@babel/plugin-proposal-throw-expressions', './babel/rightify']
        }
      },
      {
        test: /\.jsx?$/,
        include: /styled-components/,
        loader: 'babel-loader',
        options: {
          comments: false,
          plugins: process.env.DEV_MODE ? [] : ['@babel/plugin-proposal-throw-expressions', './babel/rightify']
        }
      },
    ]
  },
};
