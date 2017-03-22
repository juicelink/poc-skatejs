import * as path from 'path';
import * as webpack from 'webpack';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config: webpack.Configuration = {
  entry: {
    'bootstrap': './assets/bootstrap.less',
    'init': './src/init.ts',
    'hello-world': './src/webComponents/helloWorld/x-hello-world',
    'hello-world-2': './src/webComponents/helloWorld2/x-hello-world-2'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',    
  },
  resolve: {
   extensions: ['.tsx', '.ts', '.js'],
   alias: {
     lib: path.resolve(__dirname, 'src/lib')
   }
  },
  module: {
    rules: [
      {
        test: /\.(le|c)ss$/,
        use: ExtractTextPlugin.extract({
          fallback: { loader: 'style-loader', options: { sourceMap: true } },
          use: [
            'css-loader',
            'postcss-loader',
            {
              loader: 'less-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        }),
        exclude: path.resolve(__dirname, 'src')
      },
      {
        test: /\.(le|c)ss$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 2,
            }
          },
          'postcss-loader',
          {
            loader: 'less-loader',
            options: {
              sourceMap: true
            }
          }
        ],
        include: path.resolve(__dirname, 'src')
      },
      { 
        test: /\.(woff|woff2|eot|svg|ttf)$/, 
        loader: 'file-loader?name=[name]-[hash].[ext]'
      },
      {
        test: /\.(ts|tsx)$/,
        loader: 'awesome-typescript-loader',
      }
    ]
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      inject: 'head',
      template: 'src/demo/index.ejs'
    }),
    new HtmlWebpackPlugin({
      inject: 'head',
      chunksSortMode: 'none',
      filename: 'angular.html',
      template: 'src/demo/angular.ejs'
    }),
    new HtmlWebpackPlugin({
      inject: 'head',
      filename: 'ng.html',
      template: 'src/demo/ng/index.ejs'
    }),
    new HtmlWebpackPlugin({
      inject: 'head',
      filename: 'react.html',
      template: 'src/demo/react.ejs'
    }),
    new ExtractTextPlugin({
      filename: '[name].css'
    })
  ],
  devtool: 'cheap-module-source-map', //'inline-source-map',
};

export default config;