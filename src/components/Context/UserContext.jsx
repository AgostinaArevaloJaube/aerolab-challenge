import React, { useState, createContext, useEffect } from 'react';
import { fetchUser } from '../../services/api';

export const UserContext = createContext();

export const UserProvider = (props) => {
	const [userData, setUserData] = useState({
		name: '',
		points: 0
	});

	useEffect(() => {
		fetchUser(setUserData);
		//eslint-disable-next-line
	}, []);

	return (
		<UserContext.Provider value={[userData, setUserData]}>
			{props.children}
		</UserContext.Provider>
	);
};
