import HtmlWebpackPlugin from 'html-webpack-plugin';
import * as path from 'path';
import { Configuration } from 'webpack';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const config: Configuration & Record<string, any> = {
  mode: 'development',
  entry: './src/main.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle-[hash].js',
  },
  target: ['web', 'es2015'],
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    liveReload: true,
    compress: true,
    port: 3300,
    hot: false,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
      },
    })
  ]
};

export default config;
