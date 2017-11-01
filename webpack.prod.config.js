const path = require('path');
const nodeExternals = require('webpack-node-externals'); // eslint-disable-line
const webpack = require('webpack'); // eslint-disable-line

module.exports = {
  entry: ['./src/index'],
  target: 'node',
  externals: [nodeExternals()],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        include: __dirname,
        exclude: /node_modules/,
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader',
      },
    ],
  },
  output: { libraryTarget: 'commonjs', path: path.join(__dirname, 'dist'), filename: 'server.js' },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify('production') },
    }),
  ],
};
