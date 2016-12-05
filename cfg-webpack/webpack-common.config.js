const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const SRC_PATH = path.join(__dirname, '../src');

module.exports = {

	entry:  {
		appLoader: './src/appLoader.js',
		//vendor: './src/vendorLibs.js'
	},

	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, '../dist')
	},

	plugins: [
		//new ExtractTextPlugin('bundle.css'),
		new HtmlPlugin({
			title: 'Powerpost - Index',
			template: './src/html/index.html',
			//favicon: './src/html/favicon.png',
			inject: false
		})
	],

	module: {

		rules: [
			//{
			//	test: /\.(js|jsx)$/,
			//	use: 'eslint',
			//	include: SRC_PATH,
			//	enforce: 'pre'
			//},
			{
				test: /\.(js|jsx)$/,
				use: 'babel-loader',
				include: SRC_PATH
			},
			{
				// Transform our own .css files using PostCSS and CSS-modules
				test: /\.scss$/,
				loader: 'style-loader!css-loader!sass-loader',
				//exclude: /node_modules/,
				//include: SRC_PATH,

				//loader: 'style!css!sass' // - FOR INLINE STYLES - or -
				//loader: ExtractTextPlugin.extract({ // - PACKAGE IN bundle.css
				//	fallbackLoader: 'style-loader',
				//	loader: ['css-loader', 'sass-loader']
				//})
			},
		]
	},

	resolve: {
		modules: [SRC_PATH, 'node_modules'],
		extensions: ['.js', '.jsx', '.json']
	},
};