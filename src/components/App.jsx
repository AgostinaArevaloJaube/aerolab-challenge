import React from 'react';
import Header from '../components/Header';
import Shop from '../pages/Shop';
import Redeems from '../pages/Redeems';
import GetCoins from '../pages/GetCoins';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { UserProvider } from '../components/Context/UserContext';
import { ProductProvider } from '../components/Context/ProductContext';

function App() {
	return (
		<Router>
			<UserProvider>
				<ProductProvider>
					<Header />
					<Switch>
						<Route path="/" component={Shop} exact />
						<Route path="/redeems" component={Redeems} exact />
						<Route path="/getcoins" component={GetCoins} exact />
					</Switch>
				</ProductProvider>
			</UserProvider>
		</Router>
	);
}

export default App;
