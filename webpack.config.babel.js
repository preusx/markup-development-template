import path from 'path';
import webpack from 'webpack';

import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

import { P as p, R as r } from './tasks/paths';


let CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
let UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

let makeConfig = () => {
  var config = {};

  config.debug = true;

  config.entry = {
    'vendor': `${p.src.js}vendor.js`,
    'main': [
      `${p.src.js}main.js`
    ],
  };

  config.output = {
    path: p.dest.js,
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  };

  config.resolve = {
    cache: true,
    root: p.src.js,
  };

  config.module = {
    preLoaders: [],

    loaders: [
      { test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/, loader: 'file' },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css?sourceMap!postcss')
      },
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css?sourceMap!postcss!stylus')
      },
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          presets: ['es2015-loose']
        },
      },
      { test: /\.pug$/, loader: 'pug' },
      { test: /\.vue$/, loader: 'vue' },
      { test: /\.json$/, loader: 'json' },
    ],

    postLoaders: [],

    noParse: [],
  };


  config.plugins = [
    new ExtractTextPlugin('js.css'),

    new CommonsChunkPlugin({
      name: ['vendor'].reverse()
    }),
  ];


  /**
   * Plugins configuration.
   */
  config.stylus = require('./tasks/config/stylus').config;
  config.postcss = require('./tasks/config/postcss').config;

  return config;
};

export default makeConfig();