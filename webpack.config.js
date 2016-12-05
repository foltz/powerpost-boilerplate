module.exports = env => {

	return env === 'dev'
		? require('./cfg-webpack/webpack-dev.config')
		: require('./cfg-webpack/webpack-prod.config')
}