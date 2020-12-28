import React from 'react';
import Header from './Header';
import Shop from '../pages/Shop';
import Purchases from '../pages/Purchases';
import GetCoins from '../pages/GetCoins';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<Router>
			<Header />
			<Switch>
				<Route path="/" component={Shop} exact />
				<Route path="/purchases" component={Purchases} />
				<Route path="/getcoins" component={GetCoins} />
			</Switch>
		</Router>
	);
}

export default App;
