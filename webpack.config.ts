import * as path from 'path';
import * as webpack from 'webpack';

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config: webpack.Configuration = {
  entry: {
    'hello-world': './src/hello-world',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/assets/',    
  },
  resolve: {
   extensions: ['.tsx', '.ts', '.js']
  },
  module: {
    rules: [
    /*  {
        test: /\.css$/,
        //exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
            loader: 'css-loader',
            options: {
              sourceMap: false
            }
        })
      },
      { 
        test: /\.(woff|woff2|eot|svg|ttf)$/, 
        loader: 'file-loader?name=[name]-[hash].[ext]' },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'less-loader'
        ]
      }*/
      {
        test: /\.(ts|tsx)$/,
        loader: 'awesome-typescript-loader',
      },
      {
        test: /\.css$/,
        use: [
          //'style-loader',
          { 
            loader: 'css-loader', 
            options: { 
              modules: true 
            }
          }
        ]
      }
    ]
  },
  plugins: [
      new ExtractTextPlugin({ filename: '[name].css', disable: false, allChunks: true })
  ],
  devtool: 'cheap-module-source-map', //'inline-source-map',
  devServer: {
    contentBase: [path.join(__dirname, "public"),path.join(__dirname, "node_modules")]
  }
};

export default config;