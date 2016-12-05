
const merge = require('webpack-merge');
const webpackCommon = require('./webpack-common.config');
const webpack = require('webpack');

const devPort = 3000

module.exports = merge(webpackCommon, {
	entry: {
		appLoader: [
			'react-hot-loader/patch',
			`webpack-dev-server/client?http://localhost:${devPort}`,
			'webpack/hot/only-dev-server',
			'./src/appLoader.js'
		]
	},

	devtool: 'inline-source-map',
	devServer: {
		port: devPort,
		inline: true,
		hot: true,
		historyApiFallback: true,
		stats: 'minimal'
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.DefinePlugin({
			'__DEV__': true
		}),
		//new webpack.optimize.CommonsChunkPlugin({
		//	minChunks: 2,
		//	name: 'vendor'
		//})
	]
});