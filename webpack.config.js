const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.jsx',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ], // <-- Close rules array here
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,  
  },
  devServer: {
    static: path.resolve(__dirname, 'public'),
    open: true,
    compress: true,
    port: 8080,
  },
};
