let path = require('path'),
  MinifyPlugin = require('babel-minify-webpack-plugin'),
  TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  target: 'web',
  plugins: [
    new MinifyPlugin({}, {
      comments: false
    })
  ],
  optimization: {
    minimizer: [new TerserPlugin({
      terserOptions: {
        output: {
          comments: false,
        },
      },
      extractComments: false,
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
    extensions: ['.js', '.jsx'],
    alias: {
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
        exclude: /node_modules|src\/utils/,
        loader: 'babel-loader',
        options: {
          babelrc: true,
          comments: false,
          plugins: process.env.DEV_MODE ? [] : ['./babel/hashify', './babel/unconcatify']
        }
      },
      {
        test: /\.jsx?$/,
        include: /react/,
        loader: 'babel-loader',
        options: {
          babelrc: true,
          comments: false,
          plugins: process.env.DEV_MODE ? []
            : ['@babel/plugin-proposal-throw-expressions',
              './babel/rightify', './babel/rightify-react', './babel/unconcatify']
        }
      }
    ]
  },
};
