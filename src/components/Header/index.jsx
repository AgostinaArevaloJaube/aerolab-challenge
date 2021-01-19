import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import { Link } from 'react-router-dom';
import logo from '../../assets/aerolab-logo.svg';
import Username from './Username';
import Navbar from './Navbar';

const Header = () => {
	return (
		<HeaderWrapper>
			<Link to="/rewards-store">
				<img src={logo} alt="Logo de Aerolab" />
			</Link>
			<FlexContainer>
				<Username />
				<Navbar />
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
	z-index: 100;
`;

export default Header;
