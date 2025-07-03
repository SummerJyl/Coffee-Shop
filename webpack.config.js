// const { url } = require('inspector');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './src/main.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),  
    publicPath: '/',
    clean: true,
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
        },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {loader: 'css-loader', options: { url: false } },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
      },
    ],
  },

  devServer: {
    host: '0.0.0.0',
    port: 8080,
    static: {
      directory: path.resolve(__dirname, 'public') 
    },
    open: true,
    compress: true,
    allowedHosts: 'all',
    hot: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
};
