import React from 'react';
import Header from '../components/Header';
import Shop from '../pages/Shop';
import Redeems from '../pages/Redeems';
import GetCoins from '../pages/GetCoins';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { UserProvider } from '../components/Context/UserContext';

function App() {
	return (
		<Router>
			<UserProvider>
				<Header />
				<Switch>
					<Route path="/rewards-store" component={Shop} exact />
					<Route path="/redeems" component={Redeems} />
					<Route path="/getcoins" component={GetCoins} />
				</Switch>
			</UserProvider>
		</Router>
	);
}

export default App;
