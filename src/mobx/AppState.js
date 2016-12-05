
import { observable, computed} from 'mobx';

class AppState {

	@observable seconds = 0;
	@observable user = null

	constructor() {

		setInterval(() => {
			this.seconds += 1;
		}, 1000);
	}

	resetTimer() {
		this.seconds = 0;
	}

	// - login/session example...

	login(user) {
		this.user = user
	}
	logout() {
		this.user = null
	}

	@computed get isLoggedIn() {
		return this.user != null
	}
}

export const appState = new AppState()

