let myHeaders = new Headers();
myHeaders.append(
	'Authorization',
	'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDAwOGYxMTliNjk4OTAwMTlmNGI3NTIiLCJpYXQiOjE2MTA2NDkzNjJ9.G8S2a5bCN1A4HZhyDrfI4ndXLiPVckJtv9LrP6yCouw'
);
myHeaders.append('Content-Type', 'application/json');
myHeaders.append(
	'Cookie',
	'__cfduid=dd159e1f127ea9dc2f49dad7a94c1cde41608247239'
);

const API_URL = 'https://coding-challenge-api.aerolab.co';

export const fetchUser = async (setUserData) => {
	let requestOptions = {
		method: 'GET',
		headers: myHeaders,
		redirect: 'follow'
	};

	try {
		const result = await fetch(`${API_URL}/user/me`, requestOptions);
		const newUser = await result.json();
		setUserData(newUser);
	} catch (error) {
		console.log('error', error);
	}
};

export const postPoints = async (amount, userData, setUserData) => {
	let raw = JSON.stringify({ amount: amount });

	let requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: raw,
		redirect: 'follow'
	};

	try {
		const result = await fetch(`${API_URL}/user/points`, requestOptions);
		const newPointsData = await result.json();

		const newPointsState = { ...userData };
		newPointsState.points = newPointsData['New Points'];
		setUserData(newPointsState);
	} catch (error) {
		console.log('error', error);
	}
};

export const getProducts = async (setProductData) => {
	let requestOptions = {
		method: 'GET',
		headers: myHeaders,
		redirect: 'follow'
	};

	try {
		const result = await fetch(`${API_URL}/products`, requestOptions);
		const products = await result.json();
		setProductData(products);
	} catch (error) {
		console.log('error', error);
	}
};

export const getReedem = async (productId) => {
	let raw = JSON.stringify({ productId: productId });

	let requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: raw,
		redirect: 'follow'
	};

	await fetch(`${API_URL}/redeem`, requestOptions)
		.then((response) => response.json())
		.then((result) => console.log(result))
		.catch((error) => console.log('error', error));
};

export const getHistory = async (userData, setUserData) => {
	let requestOptions = {
		method: 'GET',
		headers: myHeaders,
		redirect: 'follow'
	};
	await fetch(`${API_URL}/user/history`, requestOptions)
		.then((response) => response.json())
		.then((result) => console.log(result))
		.catch((error) => console.log('error', error));
};
