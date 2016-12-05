import React from 'react';
import {Link} from "react-router";

import { observer } from 'mobx-react';

import {appState} from "../../mobx/AppState";

import "./appLayout.scss";


@observer
export class AppLayout extends React.Component {


	onReset = () => {
		appState.resetTimer()
	}

	render() {

		return (
			<div className="app-layout">
				<div className="app-menu">

					<Link to="first-page">First Page</Link>
					<Link to="second-page">Second Page</Link>

					<span>
						<button onClick={this.onReset}>
							Reset Timer
						</button>
					</span>
				</div>

				{this.props.children}

				<div className="app-footer">
					<span>App State timer: {appState.seconds} seconds</span>
				</div>
			</div>
		)
	}
}