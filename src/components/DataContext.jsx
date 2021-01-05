import React, { useState, createContext, useEffect } from 'react';
import { fetchUser } from '../services/api';

export const DataContext = createContext();

export const DataProvider = (props) => {
	const [userData, setUserData] = useState({
		name: '',
		coins: 0,
		redeemHistory: []
	});

	useEffect(() => {
		fetchUser(userData, setUserData);
		//eslint-disable-next-line
	}, []);

	return (
		<DataContext.Provider value={[userData, setUserData]}>
			{props.children}
		</DataContext.Provider>
	);
};
