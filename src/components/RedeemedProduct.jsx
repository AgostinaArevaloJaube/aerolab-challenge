import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';

const RedeemedProduct = (props) => {
	return (
		<ProductContainer>
			<Image src={props.img.url} alt="Imagen ilustrativa del producto" />

			<InfoContainer>
				<b>{props.name}</b>
				<p>
					<b>Cost: </b>
					{props.cost} coins
				</p>
			</InfoContainer>
		</ProductContainer>
	);
};

const ProductContainer = styled.article`
	margin: 0.5rem;
	display: flex;
	align-items: center;
	border: 2px solid #d8d8d8;
	border-radius: 15px;
	box-shadow: ${theme.colors.boxShadow};
	width: 100%;

	@media ${theme.mediaQueries.above480} {
		width: 90%;
	}

	@media ${theme.mediaQueries.above600} {
		width: 75%;
	}
`;

const Image = styled.img`
	margin: 0.5rem;
	max-width: 20%;

	@media ${theme.mediaQueries.above480} {
		max-width: 30%;
	}
`;

const InfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 0.5rem;
	text-align: left;

	p {
		font-size: 16px;
	}
`;

export default RedeemedProduct;
