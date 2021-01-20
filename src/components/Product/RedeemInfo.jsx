import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import bagBlue from '../../assets/icons/buy-blue.svg';
import bagWhite from '../../assets/icons/buy-white.svg';
import coin from '../../assets/icons/coin.svg';

const RedeemInfo = (props) => {
	const { productCost, userPoints, hover } = props;
	function setContent(userPoints, productCost) {
		if (productCost > userPoints) {
			return (
				<RedeemInfoContainer>
					<RedeemText>You need {productCost - userPoints}</RedeemText>
					<RedeemCoin src={coin} alt="icono de una moneda" />
				</RedeemInfoContainer>
			);
		} else {
			const bag = hover ? bagWhite : bagBlue;
			return <Bag src={bag} alt="icono de bolsa de compras" />;
		}
	}

	return <Container>{setContent(userPoints, productCost)}</Container>;
};

export default RedeemInfo;

const Container = styled.div`
	align-self: flex-end;
	position: absolute;
	top: 0.5rem;
	right: 0.3rem;
	z-index: 300;
`;

const RedeemInfoContainer = styled.div`
	padding: 0.6rem;
	display: flex;
	justify-content: space-around;
	align-items: center;
	border-radius: 50px;
	background-color: ${theme.fonts.primaryColor};
	opacity: 0.8;
`;

const RedeemText = styled.p`
	font-size: 0.8em;
	color: #fff;
`;

const RedeemCoin = styled.img`
	padding: 0.18rem;
	width: 1.5rem;
`;

const Bag = styled.img`
	position: relative;
	right: -0.8rem;
	width: 65%;
`;
