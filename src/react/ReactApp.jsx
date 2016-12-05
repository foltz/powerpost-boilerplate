
import React from 'react';
import {Router, browserHistory, hashHistory} from 'react-router';

import routes from './app/AppRoutes';

export class ReactApp extends React.Component {

	render() {
		return <Router history={browserHistory}>{routes}</Router>
	}
}