import React from 'react';
import Header from './Header';
import Shop from '../pages/Shop';
import Purchases from '../pages/Purchases';
import GetPoints from '../pages/GetPoints';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<Router>
			<Header />
			<Switch>
				<Route path="/" component={Shop} exact/>
        {/* <Route path="/shop" component={Shop} /> */}
				<Route path="/purchases" component={Purchases} />
				<Route path="/getpoints" component={GetPoints} />
			</Switch>
		</Router>
	);
}

export default App;
