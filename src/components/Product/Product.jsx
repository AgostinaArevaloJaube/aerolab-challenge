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
import RedeemInfo from './RedeemInfo';
import ProductHover from './ProductHover';

const Product = (props) => {
	const { name, category, img, cost, _id } = props;
	const [userData, setUserData] = useContext(UserContext);
	const userPoints = userData.points;
	const [hover, setHover] = useState(false);

	return (
		<ProductContainer
			onMouseLeave={() => setHover(false)}
			onMouseEnter={() => setHover(true)}
		>
			{hover && (
				<ProductHover
					userData={userData}
					setUserData={setUserData}
					userPoints={userPoints}
					productCost={cost}
					productId={_id}
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
		</ProductContainer>
	);
};

export default Product;
