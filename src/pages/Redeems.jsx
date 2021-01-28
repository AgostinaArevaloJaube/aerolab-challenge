import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { PagesContainer, Title } from '../styles/PagesContainer';
import RedeemedProduct from '../components/RedeemedProduct';
import theme from '../styles/theme';
import { getHistory } from '../services/api';

const Redeems = () => {
	const [redeemedData, setRedeemedData] = useState([]);

	useEffect(() => {
		getHistory(setRedeemedData);
	}, []);

	const redeemedReversed = redeemedData.reverse();

	return (
		<PagesContainer>
			<Title>Redeemed products</Title>
			<p>History of your redeems</p>

			<ProductsGrid>
				{redeemedReversed.map((product) => (
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
	align-items: center;

	@media ${theme.mediaQueries.above768} {
		margin: 0 auto;
		width: 60%;
	}

	@media ${theme.mediaQueries.above1024} {
		width: 40%;
	}
`;

export default Redeems;
