const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  mode: 'development',
  output: {
    filename: 'react-paramify.js',
    path: path.resolve(__dirname, 'dist'),
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
      '@emotion/react': path.resolve(__dirname, './node_modules/@emotion/react'),
      '@emotion/styled': path.resolve(__dirname, './node_modules/@emotion/styled'),
      '@mui/icons-material': path.resolve(__dirname, './node_modules/@mui/icons-material'),
      '@mui/material': path.resolve(__dirname, './node_modules/@mui/material'),
    },

    plugins: [new TsconfigPathsPlugin()],
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
    '@emotion/react': '@emotion/react',
    '@emotion/styled': '@emotion/styled',
    '@mui/icons-material': '@mui/icons-material',
    '@mui/material': '@mui/material',
  },
};
