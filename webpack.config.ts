import  path from 'path'
import  HTMLWebpackPlugin from "html-webpack-plugin"
import  webpack from "webpack"

// const path = require('path')
// const HTMLWebpackPlugin = require('html-webpack-plugin')
// const webpack = require('webpack')

const config: webpack.Configuration = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  output: {
    filename: "[name].[contenthash].js", // Дабы избежать ошибок с кешированием.
    path: path.resolve(__dirname, 'build'),
    clean: true
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    }),
    new webpack.ProgressPlugin()
  ],
  module: {
    rules: [ // loader'ы для обработки файлов вне JS (ts, изображения, видео и пр.)
      {
        test: /\.tsx?$/, // Регулярные выражения для отлавливания
        use: 'ts-loader', // Используемый loader
        exclude: /node_modules/, // Исключаем из проверки node_modules
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'] //Файлы, у которых при импорте не будем указывать расширение
  }
}

export default config