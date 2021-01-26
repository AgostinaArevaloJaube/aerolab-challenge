import React from 'react';
import Header from '../components/Header';
import Shop from '../pages/Shop';
import Redeems from '../pages/Redeems';
import GetCoins from '../pages/GetCoins';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { UserProvider } from '../components/Context/UserContext';
import { ProductProvider } from '../components/Context/ProductContext';
import { FilterProvider } from './Context/FilterContext';

function App() {
	return (
		<Router>
			<UserProvider>
				<ProductProvider>
					<FilterProvider>
						<Header />
						<Switch>
							<Route exact path="/" component={Shop} />
							<Route path="/redeems" component={Redeems} />
							<Route path="/getcoins" component={GetCoins} />
						</Switch>
					</FilterProvider>
				</ProductProvider>
			</UserProvider>
		</Router>
	);
}

export default App;
