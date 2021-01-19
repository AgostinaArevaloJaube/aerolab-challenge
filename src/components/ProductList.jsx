import React, { useContext } from 'react';
import { ProductContext } from './Context/ProductContext';
import Product from './Product/Product';
import theme from '../../src/styles/theme';

import styled from 'styled-components';

const ProductList = () => {
	const [productData] = useContext(ProductContext);

	return (
		<ProductListContainer>
			{productData.map((product) => (
				<Product {...product} key={product._id} />
			))}
		</ProductListContainer>
	);
};

export default ProductList;

const ProductListContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	@media ${theme.mediaQueries.above600}{
		flex-direction: row;
		justify-content: center;
		flex-wrap: wrap;
		max-width: 100%;
	})
`;
