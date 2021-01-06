import React, { useContext } from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';
import Coins from '../styles/Coins';
import coin from '../assets/icons/coin.svg';
import { PagesContainer, Title } from '../styles/PagesContainer';
import { UserContext } from '../components/Context/UserContext';
import { postPoints } from '../services/api';

const GetCoins = () => {
	const [userData, setUserData] = useContext(UserContext);

	const handleGetCoins = (amount) => {
		postPoints(amount, userData, setUserData);
	};

	return (
		<PagesContainer>
			<Title>Get more coins</Title>
			<p>Choose the coins you want to add</p>

			<CoinsContainer>
				<Coin
					onClick={() => {
						handleGetCoins(1000);
					}}
				>
					<p>1000</p>
					<img src={coin} alt="Ilustration of coin" />
				</Coin>
				<Coin
					onClick={() => {
						handleGetCoins(5000);
					}}
				>
					<p>5000</p>
					<img src={coin} alt="Ilustration of coin" />
				</Coin>
				<Coin
					onClick={() => {
						handleGetCoins(7500);
					}}
				>
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
