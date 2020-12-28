import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';

import productImage from '../assets/AcerAspire-x1.png';

const RedeemedProduct = () => {
	return (
		<ProductContainer>
			<Image src={productImage} alt="" />

			<InfoContainer>
				<b>Acer Aspire-x1</b>
				<p>
					<b>Cost:</b> 200
				</p>
			</InfoContainer>
		</ProductContainer>
	);
};

const ProductContainer = styled.article`
	margin: 0.5rem;
	display: flex;
	border: 2px solid #d8d8d8;
	border-radius: 15px;
	box-shadow: ${theme.colors.boxShadow};
`;

const Image = styled.img`
	margin: 0.5rem;
	max-width: 30%;
`;

const InfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 0.5rem;
	text-align: left;
`;

export default RedeemedProduct;
