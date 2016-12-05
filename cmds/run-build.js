
const cmdFn = () => {

	const sh = require("shelljs");

	return Promise.resolve()
		.then(() => sh.exec("del dist"))
		.then(() => console.log("previous dist deleted"))
		.then(() => sh.exec("webpack -p --env prod"))
		.then(() => console.log("new dist created"))

}

module.exports = cmdFn

if(require.main === module)
	cmdFn()
		.then(() => process.exit())
		.catch((error) => {
			console.error("ERROR:")
			console.error(error)
			process.exit()
		})