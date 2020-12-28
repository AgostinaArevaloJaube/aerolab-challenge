import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';
import Coins from '../styles/Coins';
import coin from '../assets/icons/coin.svg';
import {PagesContainer, Title} from '../styles/PagesContainer'

const GetCoins = () => {
	return (
		<PagesContainer>
			<Title>Get more coins</Title>
			<p>Choose the coins you want to add</p>

			<CoinsContainer>
				<Coin>
					<p>1000</p>
					<img src={coin} alt="Ilustration of coin" />
				</Coin>
				<Coin>
					<p>5000</p>
					<img src={coin} alt="Ilustration of coin" />
				</Coin>
				<Coin>
					<p>7500</p>
					<img src={coin} alt="Ilustration of coin" />
				</Coin>
			</CoinsContainer>
		</PagesContainer>
	);
};

const CoinsContainer = styled.div`
	margin: 0 auto;
	width: 80%;

	@media ${theme.mediaQueries.above600}{
		display: flex;
		justify-content: center;
	})
`;

const Coin = styled(Coins)`
	margin: 1rem;
	cursor: pointer;

	&:hover {
		background-color: ${theme.colors.background};
	}

	@media ${theme.mediaQueries.above600} {
		width: 100%;
	}

	@media ${theme.mediaQueries.above1200} {
		width: 50%;
	}
`;

export default GetCoins;
