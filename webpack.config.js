const path = require('path');

module.exports = {
  entry: './src/index.js',  // your main JS file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,              // optional: cleans the dist folder on build
  },
  mode: 'development',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'public'), // serve from "public" folder
    },
    open: true,                   // opens the browser automatically
    compress: true,               // compacts files for performance
    port: 8080,                   // default port
  },
  module: {
    rules: [
      {
      test: /\.css$/,
      use: [
        'style-loader',
        { loader: 'css-loader', options: { url: false } },
        'postcss-loader'
      ],
},

      {
        test: /\.(png|svg|jpg|gif)$/,
        type: 'asset/resource',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
