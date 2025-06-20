const path = require('path');

module.exports = {
  entry: './src/index.js',  // your main JS file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development', // switch to 'production' for prod builds
  module: {
    rules: [
      {
        test: /\.css$/,  // CSS loader
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,  // Image loader
        type: 'asset/resource',
      },
      {
        test: /\.js$/,   // Babel loader
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
