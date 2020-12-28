import React from 'react';
import styled from 'styled-components';

import coin from '../assets/icons/coin.svg';
import theme from '../styles/theme';
import Coins from '../styles/Coins'
// import api from '../scripts/api'

const Username = () => {
	return (
		<UsernameContainer>
			<p>Julia Collie</p>
			<Coins>
				<p>6000</p>
				<img src={coin} alt="" />
			</Coins>
		</UsernameContainer>
	);
};

const UsernameContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;

	p {
		color: ${theme.fonts.primaryColor};
	}

	@media ${theme.mediaQueries.above600}{
		width: fit-content;
	})
`;


export default Username;
