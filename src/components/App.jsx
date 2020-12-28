import React from 'react';
import Header from './Header';
import Shop from '../pages/Shop';
import Redeems from '../pages/Redeems';
import GetCoins from '../pages/GetCoins';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<Router>
			<Header />
			<Switch>
				<Route path="/" component={Shop} exact />
				<Route path="/redeems" component={Redeems} />
				<Route path="/getcoins" component={GetCoins} />
			</Switch>
		</Router>
	);
}

export default App;
