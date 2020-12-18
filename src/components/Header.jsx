import React, {useEffect} from 'react';
import { fetchUser, postPoints, getProducts, getHistory, getReedem} from './api'


const Header = () => {

	useEffect(() => {
		getReedem("5a033f0f364bf301523e9b93")
		// fetchUser()
		// postPoints(1000)
		// getProducts()
		// getHistory()
	}, [])


	return (
		<nav>Nombre de usuario</nav>
	)

}

export default Header;