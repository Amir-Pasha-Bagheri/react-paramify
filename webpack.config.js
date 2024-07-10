const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  entry: './src/index.ts', // Entry point of your application
  output: {
    filename: 'react-paramify.js', // Output bundle file name
    path: path.resolve(__dirname, 'dist'), // Output directory
    library: 'react-paramify',
    libraryTarget: 'umd',
    publicPath: '/dist/',
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-typescript'],
          },
        },
      },
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],

    alias: {
      react: path.resolve(__dirname, './node_modules/react'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
    },

    plugins: [new TsconfigPathsPlugin()],
  },
  externals: {
    // Don't bundle react or react-dom
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'ReactDOM',
      root: 'ReactDOM',
    },
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'), // Serve files from this directory
    port: 3000, // Port for the development server
    open: true, // Open the default web browser when the server starts
  },
};
