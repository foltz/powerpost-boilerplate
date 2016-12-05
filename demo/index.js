


const startServer = () => {

	console.log("START SERVER")
	return Promise.resolve().then(() => {

		var express = require("express")
		var http = require("http")

		const httpPort = 2000

		const app = express()
		const server = http.Server(app)

		app.use(express.static("demo/html"))

		// --------------------------------------------------------
		// - REST API:

		//const router = express.Router()
		//
		//const restApis = new RestApis(dbConn, router)
		//restApis.mountRouter(router)
		//
		//app.use((req, res, next) => {
		//
		//	res.set({
		//		"Access-Control-Allow-Origin": "*",
		//		"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
		//		"Access-Control-Allow-Headers": "Content-Type"
		//	})
		//	next()
		//})
		//
		//app.use("/api/", router)


		server.listen(httpPort, "localhost")
		console.log("Server running at http://localhost:" + httpPort)

	})
}


module.exports = startServer

if(require.main === module)
	startServer()
		//.then(() => process.exit())
		.catch((error) => {
			console.error("ERROR:")
			console.error(error)
			process.exit()
		})