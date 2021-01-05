import React, { useContext} from 'react';
import styled from 'styled-components';
import { DataContext } from '../DataContext';

import coin from '../../assets/icons/coin.svg';
import theme from '../../styles/theme';
import Coins from '../../styles/Coins';

const Username = () => {
	const [userData] = useContext(DataContext);

	return (
		<UsernameContainer>
			<p>{userData.name}</p>
			<Coins>
				<p>{userData.coins}</p>
				<img src={coin} alt="Ilustracion de una moneda" />
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