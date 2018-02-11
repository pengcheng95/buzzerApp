'use strict';

import path from 'path';
import webpack from "webpack"

const SRC = path.join(__dirname, '/client/index.jsx');
const DIST = { path: __dirname + '/public', filename: 'bundle.js' };

const options = { "libraryName": "antd", "libraryDirectory": "es", "style": "css" };

const config = {
  entry: SRC,
  output: DIST,
  module: {
    loaders: [{
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['stage-2', 'env', 'react'],
        plugins: ['transform-class-properties', ["import", options]]
      }
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url-loader?limit=8192'
    }]
  },
  watch: false
}

export default config;