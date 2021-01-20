import React, { useState } from 'react';
import styled from 'styled-components';
import coin from '../../assets/icons/coin.svg';
import { getReedem } from '../../services/api';
import RedeemModal from './RedeemModal';

const ProductHover = (props) => {
	const { userData, setUserData, userPoints, productCost, productId } = props;
	const [successRedeem, setSuccessRedeem] = useState(false);

	function redeemProduct(id, cost, userPoints) {
		const redeemStatus = getReedem(id);
		const userNewPoints = userPoints - cost;
		setUserData({ ...userData, points: userNewPoints });
		setSuccessRedeem(redeemStatus);
	}

	return (
		<HoverContainer>
			<ProductValue>
				<Text>{productCost.toLocaleString('de-DE')}</Text>
				<Coin src={coin} alt="icono de una moneda" />
			</ProductValue>

			{userPoints >= productCost && (
				<RedeemModal
					redeemProduct={redeemProduct}
					userPoints={userPoints}
					productCost={productCost}
					productId={productId}
					successRedeem={successRedeem}
				/>
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

export default ProductHover;
