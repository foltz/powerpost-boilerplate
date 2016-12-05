
import React from 'react';
import ReactDOM from 'react-dom';

import {ReactApp} from './react/ReactApp';

const render = (rootComponent) => {
	ReactDOM.render(rootComponent, document.querySelector('main'))
}

if (__DEV__ && module.hot) {

	const AppContainer = require('react-hot-loader').AppContainer

	render(
		<AppContainer>
			<ReactApp />
		</AppContainer>
	)

	module.hot.accept('./react/ReactApp', () => {
		render(
			<AppContainer>
				<ReactApp />
			</AppContainer>
		)
	})
}
else {
	render(<ReactApp />)
}