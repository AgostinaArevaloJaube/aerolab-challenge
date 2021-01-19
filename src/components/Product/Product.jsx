import React, { useContext } from 'react';
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

const Product = (props) => {
	const { name, category, img, cost } = props;
	const [userData] = useContext(UserContext);
	const userPoints = userData.points;

	return (
		<ProductContainer>
			<RedeemInfo productCost={cost} userPoints={userPoints} />
			<ProductImg src={img.url} alt="Imagen ilustrativa del producto" />
			<Line />
			<ProductInfo>
				<ProductCategory>{category}</ProductCategory>
				<ProductName>{name}</ProductName>
			</ProductInfo>
		</ProductContainer>
	);
};

export default Product;
