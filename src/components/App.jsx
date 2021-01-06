import React from 'react';
import Header from '../components/Header';
import Shop from '../pages/Shop';
import Redeems from '../pages/Redeems';
import GetCoins from '../pages/GetCoins';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { DataProvider } from '../components/DataContext';

function App() {
	return (
		<Router>
			<DataProvider>
				<Header />
				<Switch>
					<Route path="/rewards-store" component={Shop} exact />
					<Route path="/redeems" component={Redeems} />
					<Route path="/getcoins" component={GetCoins} />
				</Switch>
			</DataProvider>
		</Router>
	);
}

export default App;
