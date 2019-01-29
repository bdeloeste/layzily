const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src/index.ts'),
  output: {
    path: path.join(__dirname, 'dist/lib'),
    filename: 'index.js',
    library: '',
    libraryTarget: 'commonjs',
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};
