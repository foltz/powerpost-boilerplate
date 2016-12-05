
const cmdFn = () => {

	const runBuild = require("./run-build");

	return runBuild().then(() => {

		console.log("setup your deployment code here")

	})

}

module.exports = cmdFn

if(require.main === module)
	cmdFn()
		//.then(() => process.exit())
		.catch((error) => {
			console.error("ERROR:")
			console.error(error)
			process.exit()
		})