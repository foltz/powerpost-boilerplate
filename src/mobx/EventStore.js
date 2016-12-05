import R from "ramda";
import {observable, autorun} from "mobx";
import {socketClient} from "../lib/socketClient";


// - https://mobxjs.github.io/mobx/best/store.html

export class EventStore {
	//authorStore;
	//transportLayer;
	@observable list = []
	@observable feedStatus = "closed"


	constructor() {

		this.auth = this.onAuth.bind(this)
		this.deauth = this.onDeauth.bind(this)
	}

	mount() {

		socketClient.on("eventFeed/listpage", (results) => {

			const {data, type} = results

			//if (type == "list") this.list.replace(data)
			if (type == "list") this.list = data
			if (type == "change") {

				const list = this.list.slice()
				const {action} = data

				if (action == "create") list.push(data.next)

				if (action == "update") {

					const idx = R.indexOf(data.prev, list)
					if (idx > -1) list[idx] = data.next
				}

				if (action == "delete") {
					const idx = R.indexOf(data.prev, list)
					if (idx > -1) list.splice(idx, 1)
				}

				//this.list.replace(list)
				this.list = list
			}
		})

		this.openFeed()

		socketClient.on("authorize", this.auth)
		socketClient.on("deauthorize", this.deauth)

	}

	unmount() {

		socketClient.off("authorize", this.auth)
		socketClient.off("deauthorize", this.deauth)

		socketClient.off("eventFeed/listpage")
		this.closeFeed()

		console.log("UN-MOUNT: LIST PAGE")
	}

	onAuth(res) {
		console.log("ON-AUTH: ", res)
		this.openFeed()
	}

	onDeauth() {
		//console.log("DEAUTH-RES: ")
		this.list.replace([])
		this.closeFeed()
	}
	openFeed() {

		//const {feedStatus} = this
		if (this.feedStatus !== "closed") return;

		this.feedStatus = "opening"
		console.log("OPEN-FEED-START")

		return socketClient.emit("eventFeed/open", {key: "listpage", filter:{}})
			.then(() => {
				console.log("OPEN-FEED-COMPLETE")
				this.feedStatus = "open"
			})
	}
	closeFeed() {

		console.log("CLOSE-FEED-START")
		this.feedStatus = "closed"

		//this.setState({feedStatus:"closing"})
		return socketClient.emit("eventFeed/close", {key: "listpage"})
			.then(() => {
				console.log("CLOSE-FEED-COMPLETE")
			})
	}
}

export class EventDoc {

	/**
	 * unique id of this todo, immutable.
	 */
	id = null;

	@observable completed = false;
	@observable task = "";

	@observable evtName;
	@observable evtType;

	@observable startDate;

	///**
	// * reference to an Author object (from the authorStore)
	// */
	//@observable author = null;

	store = null;

	///**
	// * Indicates whether changes in this object
	// * should be submitted to the server
	// */
	//autoSave = true;

	/**
	 * Disposer for the side effect that automatically
	 * stores this Todo, see @dispose.
	 */
	saveHandler = null;
}