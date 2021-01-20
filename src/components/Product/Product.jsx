import React, { useContext, useState } from 'react';
import {
	ProductContainer,
	ProductImg,
	ProductName,
	ProductCategory,
	Line,
	ProductInfo
} from './Product.styles';
import { UserContext } from '../Context/UserContext';
import RedeemInfo from '../Product/RedeemInfo/RedeemInfo';
import ProductHover from './ProductHover';
import { getReedem } from '../../services/api';

const Product = (props) => {
	const { name, category, img, cost, _id } = props;
	const [userData, setUserData] = useContext(UserContext);
	const userPoints = userData.points;
	const [hover, setHover] = useState(false);

	function redeemProduct(id, cost, userPoints) {
		getReedem(id);
		const userNewPoints = userPoints - cost;
		setUserData({ ...userData, points: userNewPoints });
	}

	return (
		<ProductContainer
			onMouseLeave={() => setHover(false)}
			onMouseEnter={() => setHover(true)}
		>
			{hover && (
				<ProductHover
					productCost={cost}
					userPoints={userPoints}
					productId={_id}
					hover={hover}
					redeemProduct={redeemProduct}
				/>
			)}
			<RedeemInfo
				productCost={cost}
				userPoints={userPoints}
				hover={hover}
			/>
			<ProductImg src={img.url} alt="Imagen ilustrativa del producto" />
			<Line />
			<ProductInfo>
				<ProductCategory>{category}</ProductCategory>
				<ProductName>{name}</ProductName>
			</ProductInfo>
			{hover
				? console.log("It's happening")
				: console.log("It's not happening")}
		</ProductContainer>
	);
};

export default Product;
