import React from 'react';
import styled from 'styled-components';

import coin from '../assets/icons/coin.svg';
import theme from '../styles/theme';
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
const Coins = styled.div`
	margin: 0.5rem;
	padding: 0.3rem;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 1.2rem;
	background-color: ${theme.colors.buttonBackground};

	p {
		margin: 0.1rem;
	}

	img {
		width: 1.6rem;
		margin: 0.1rem;
	}
`;

export default Username;
