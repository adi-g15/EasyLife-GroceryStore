import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import routes from '../routes/app.route';
import '../styles/client/pages/App.scss';
import Home from "../home.component";

routes = [
	{
		path: '/',
		exact: true,
		component: ({ history, match }) => <Home history={history} match={match} />
	}
]
export default class App extends Component {
	showRoutes = (routes) => {
		var result = null;
		if (routes.length > 0) {
			result = routes.map((route, index) => {
				return (
					<Route
						path={route.path}
						key={index}
						exact={route.exact}
						component={route.component}
					/>
				);
			});
		}
		return result;
	};

	render() {
		return (
			<Router>
				<Switch>{this.showRoutes(routes)}</Switch>
			</Router>
		);
	}
}
