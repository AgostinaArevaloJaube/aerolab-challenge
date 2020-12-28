import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';

import logo from '../assets/aerolab-logo.svg';
import Username from './Username';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleClosingNavbar = () => {
		return setIsOpen(false);
	};

	return (
		<HeaderWrapper>
			<img src={logo} alt="Logo de Aerolab" />
			<FlexContainer>
				<Username />
				<Hamburger onClick={() => setIsOpen(!isOpen)}>
					{isOpen ? (
						<FontAwesomeIcon
							icon={faTimes}
							color={theme.colors.primary}
							size="lg"
						/>
					) : (
						<FontAwesomeIcon
							icon={faBars}
							color={theme.colors.primary}
							size="lg"
						/>
					)}
				</Hamburger>
				<MenuList isOpen={isOpen}>
					<MenuLinks onClick={handleClosingNavbar} to="/">
						<li>Shop</li>
					</MenuLinks>
					<MenuLinks onClick={handleClosingNavbar} to="/redeems">
						<li>Redeems</li>
					</MenuLinks>
					<MenuLinks onClick={handleClosingNavbar} to="/getcoins">
						<li>Get Coins</li>
					</MenuLinks>
				</MenuList>
			</FlexContainer>
		</HeaderWrapper>
	);
};

const HeaderWrapper = styled.header`
	padding: 10px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
`;

const FlexContainer = styled.div`
	display: flex;
	align-items: center;
`;

const Hamburger = styled.div`
	margin: 0.2rem;
	width: 1rem;
	cursor: pointer;

	@media ${theme.mediaQueries.above600}{
		display: none
	})
`;

const MenuList = styled.ul`
	width: 100%;
	height: ${({ isOpen }) => (isOpen ? '95%' : '0')};
	transition: ${({ isOpen }) => (isOpen ? 'height 0.3s ease-in' : 'none')};
	position: absolute;
	top: 4rem;
	left: 0;
	display: flex;
	flex-direction: column;
	overflow: hidden;
	background-color: ${theme.colors.primary};

	@media ${theme.mediaQueries.above600} {
		width: fit-content;
		height: 100%;
		flex-direction: row;
		position: relative;
		top: 0;
		background-color: transparent;
	}
`;

const MenuLinks = styled(Link)`
	padding: 0.5rem;
	border-radius: 30px;
	text-decoration: none;
	color: #fff;
	text-align: center;
	list-style: none;
	transition: all 0.3s ease-in;

	&:hover {
		color: ${theme.fonts.primaryColor};
	}

	@media ${theme.mediaQueries.above600} {
		color: ${theme.colors.primary};

		&:hover {
			background-color: ${theme.colors.primary};
			color: white;
		}
	}
`;

export default Header;
