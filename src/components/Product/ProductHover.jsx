import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import coin from '../../assets/icons/coin.svg';

const ProductHover = (props) => {
	const { userPoints, productCost, productId, redeemProduct } = props;
	return (
		<HoverContainer>
			<ProductValue>
				<Text>{productCost.toLocaleString('de-DE')}</Text>
				<Coin src={coin} alt="icono de una moneda" />
			</ProductValue>

			{userPoints >= productCost && (
				<Button
					onClick={() =>
						redeemProduct(productId, productCost, userPoints)
					}
				>
					Redeem now
				</Button>
			)}
		</HoverContainer>
	);
};

const HoverContainer = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	width: 100%;
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	z-index: 100;
	background: linear-gradient(
		180deg,
		rgba(10, 212, 250, 0.86) 0%,
		rgba(37, 187, 241, 0.86) 100%
	);
`;

const ProductValue = styled.div`
	display: flex;
`;

const Text = styled.p`
	margin: 0.3rem;
	font-size: 2em;
	font-weight: 300;
	color: #fff;
`;

const Coin = styled.img`
	padding: 0.11rem;
	width: 1.8rem;
`;
const Button = styled.button`
	width: 85%;
	padding: 0.5rem;
	border: none;
	border-radius: 20px;
	background-color: #f2f1f1;
	color: ${theme.fonts.primaryColor};
	font-size: 0.9em;
	outline: none;
	cursor: pointer;

	&:hover {
		background-color: #c7c5c5;
		color: #fff;
	}
`;

export default ProductHover;
