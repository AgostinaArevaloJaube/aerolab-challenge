import React, { useEffect, useState } from 'react';
//import { ProductContext } from './Context/ProductContex';
import Product from '../components/Product';
import { getProducts } from '../services/api';

import styled from 'styled-components';

const ProductList = () => {
	const [productData, setProductData] = useState([]);

	useEffect(() => {
		getProducts(setProductData);
	}, []);

	return (
		<ProductListContianer>
			{productData.map((product) => (
				<Product {...product} key={product._id} />
			))}
		</ProductListContianer>
	);
};

export default ProductList;

const ProductListContianer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-content: center;
`;
