let myHeaders = new Headers();
myHeaders.append(
	'Authorization',
	'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmRhOTk5MjI2ZjdkMjAwMjA0MTE0Y2UiLCJpYXQiOjE2MDgxNjE2ODN9.whOAW-6bzO5aZsKdniLQxLlrIx4ObDlrT-ux0WmWrk0'
);
myHeaders.append('Content-Type', 'application/json');
myHeaders.append(
	'Cookie',
	'__cfduid=dd159e1f127ea9dc2f49dad7a94c1cde41608247239'
);

export const fetchUser = async () => {
	let requestOptions = {
		method: 'GET',
		headers: myHeaders,
		redirect: 'follow'
	};

	await fetch(
		'https://coding-challenge-api.aerolab.co/user/me',
		requestOptions
	)
		.then((response) => response.text())
		.then((result) => console.log(result))
		.catch((error) => console.log('error', error));
};

export const postPoints = async (amount) => {
	var raw = JSON.stringify({ amount: amount });

	var requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: raw,
		redirect: 'follow'
	};

	await fetch(
		'https://coding-challenge-api.aerolab.co/user/points',
		requestOptions
	)
		.then((response) => response.text())
		.then((result) => console.log(result))
		.catch((error) => console.log('error', error));
};

export const getReedem = async (productId) => {
	let raw = JSON.stringify({ productId: productId });

	let requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: raw,
		redirect: 'follow'
	};

	await fetch(
		'https://coding-challenge-api.aerolab.co/redeem',
		requestOptions
	)
		.then((response) => response.text())
		.then((result) => console.log(result))
		.catch((error) => console.log('error', error));
};

export const getProducts = async () => {
	let requestOptions = {
		method: 'GET',
		headers: myHeaders,
		redirect: 'follow'
	};

	await fetch(
		'https://coding-challenge-api.aerolab.co/products',
		requestOptions
	)
		.then((response) => response.text())
		.then((result) => console.log(result))
		.catch((error) => console.log('error', error));
};

export const getHistory = async () => {
	let requestOptions = {
		method: 'GET',
		headers: myHeaders,
		redirect: 'follow'
	};

	await fetch(
		'https://coding-challenge-api.aerolab.co/user/history',
		requestOptions
	)
		.then((response) => response.text())
		.then((result) => console.log(result))
		.catch((error) => console.log('error', error));
};
