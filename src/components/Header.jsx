import React, { useEffect } from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';
import { Link } from 'react-router-dom';

import logo from '../assets/aerolab-logo.svg';

const HeaderWrapper = styled.header`
	padding: 10px;
	display: flex;
	flex-direction: column;
`;

const MenuList = styled.ul`
	margin: 0.8rem;
	display: flex;
	justify-content: space-around;
	list-style: none;
`;

const MenuLinks = styled(Link)`
	padding: 0.3rem;
	border: 2px solid ${theme.colors.primary};
	border-radius: 30px;
	text-decoration: none;
	color: ${theme.colors.primary};

	&:hover {
		color: #fff;
		background-color: ${theme.colors.primary};
	}
`;

const Header = () => {
	useEffect(() => {}, []);

	return (
		<HeaderWrapper>
			<img src={logo} alt="Logo de Aerolab" />

			<nav>
				<MenuList>
					<MenuLinks to="/">
						<li>Shop</li>
					</MenuLinks>
					<MenuLinks to="/purchases">
						<li>Purchases</li>
					</MenuLinks>
					<MenuLinks to="/getpoints">
						<li>Get Points</li>
					</MenuLinks>
				</MenuList>
			</nav>

			<nav>Nombre de usuario</nav>
		</HeaderWrapper>
	);
};

export default Header;
