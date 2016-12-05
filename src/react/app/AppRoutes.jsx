
import React from 'react';
import {Route, IndexRoute, Redirect} from 'react-router';

import {AppLayout} from "./AppLayout";

import {FirstPage} from "../pages/FirstPage";
import {SecondPage} from "../pages/SecondPage";

export default (

	<Route path="/" component={AppLayout}>

		<IndexRoute component={FirstPage}/>

		<Route path="first-page" component={FirstPage}/>
		<Route path="second-page" component={SecondPage}/>

		<Redirect from="*" to="/"/>

	</Route>
);