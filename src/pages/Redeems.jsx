import React, { useContext } from 'react';
import styled from 'styled-components';
import { PagesContainer, Title } from '../styles/PagesContainer';
import RedeemedProduct from '../components/RedeemedProduct';
import theme from '../styles/theme';
// import { getHistory } from '../scripts/api';
import { UserContext } from '../components/Context/UserContext';

const Redeems = () => {
	const [userData] = useContext(UserContext);

	const redeemHistory = userData.redeemHistory;
	console.log(redeemHistory);

	return (
		<PagesContainer>
			<Title>Redeemed products</Title>
			<p>History of your redeems</p>

			<ProductsGrid>
				{redeemHistory.map((product) => (
					<RedeemedProduct {...product} key={product.createDate} />
				))}
			</ProductsGrid>
		</PagesContainer>
	);
};

const ProductsGrid = styled.section`
	margin: 2rem auto;
	display: flex;
	flex-direction: column;

	@media ${theme.mediaQueries.above768} {
		margin: 0 auto;
		width: 60%;
	}

	@media ${theme.mediaQueries.above1024} {
		width: 40%;
	}
`;

export default Redeems;
