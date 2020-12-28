import React from 'react';
import styled from 'styled-components';
import { PagesContainer, Title } from '../styles/PagesContainer';
import RedeemedProduct from '../components/RedeemedProduct';
import theme from '../styles/theme';

const Redeems = () => {
	return (
		<PagesContainer>
			<Title>Redeemed products</Title>
			<p>History of your redeems</p>

			<ProductsGrid>
				<RedeemedProduct />
				<RedeemedProduct />
				<RedeemedProduct />
				<RedeemedProduct />
				<RedeemedProduct />
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
