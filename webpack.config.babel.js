'use strict'
import path from 'path';
import webpack from "webpack"

const SRC = path.join(__dirname, '/client/index.jsx');
const DIST = { path: __dirname + '/public', filename: 'bundle.js' };

const config = {
	entry: SRC,
	output: DIST,
	module: {
		loaders: [
		{
			test: /\.css$/,
			loader: 'style-loader!css-loader'
		}, {
			test: /.jsx?$/,
			loader: 'babel-loader',
			exclude: /node_modules/,
			query: {
				presets: ['es2015', 'react']
			}
		}, { 
			test: /\.(png|jpg)$/, 
			loader: 'url-loader?limit=8192' 
		}]
	},
	watch: false
}

export default config;