import path from 'path';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import ESLintPlugin from 'eslint-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import Dotenv from 'dotenv-webpack';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: resolve(__dirname, './src/index.tsx'), // Точка входа по FSD
  output: {
    path: resolve(__dirname, './dist'),
    filename: 'bundle.[contenthash].js', // Добавил хеш для кэширования
    clean: true
  },
  module: {
    rules: [
      {
        // Обрабатываем js, jsx, ts, tsx через babel-loader
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.module\.css$/i,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]--[hash:base64:5]'
              }
            }
          }
        ]
      },
      {
        test: /\.(jpg|jpeg|png|svg|woff|woff2)$/,
        type: 'asset/resource' // Webpack 5 встроенные ассеты
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new Dotenv(),
    // new ESLintPlugin({
    //   extensions: ['.js', '.jsx', '.ts', '.tsx'],
    //   eslintPath: 'eslint/use-at-your-own-risk',
    //   emitWarning: false,
    //   failOnWarning: false,
    //   quiet: true
    // })
  ],
  resolve: {
    // В 2026 году лучше не использовать '*' в расширениях
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  devServer: {
    static: resolve(__dirname, './dist'),
    compress: true,
    historyApiFallback: true,
    port: 4000,
    hot: true
  }
};
