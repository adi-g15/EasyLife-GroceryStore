import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import routes from '../routes/app.route';
// import '../styles/client/pages/App.scss';
import Home from "../components/home";
import UserProfile from "../components/userprofile";
import InOut from "../components/inout";

const routes = [
	{
		path: '/',
		exact: true,
		component: ({ history, match }) => <Home history={history} match={match} />
	},
	{
		path: '/user',
		exact: true,
		component: ({history, match}) => <UserProfile history={history} match={match} />
	},
	{
		path: '/user/inout',
		exact: false,
		component: ({history, match}) => <InOut history={history} match={match} />
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
						// The Route object actually passes two parameters also, to the componen to render -> `history`, and `match` (which is likely the exact true or false param).
						// It also stores state.location object which has the current location
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
