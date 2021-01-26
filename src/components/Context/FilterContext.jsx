import React, { useState, createContext } from 'react';

export const FilterContext = createContext();

export const FilterProvider = (props) => {
	const [filter, setFilter] = useState({
		category: 'all categories',
		price: 'all prices'
	});

	return (
		<FilterContext.Provider value={[filter, setFilter]}>
			{props.children}
		</FilterContext.Provider>
	);
};