import React, { useContext, useEffect } from 'react';
import { ProductContext } from './Context/ProductContext';
import { FilterContext } from './Context/FilterContext';

import Product from './Product/Product';
import FiltersByPrice from './Filters/FiltersByPrice';
import FiltersByCategory from './Filters/FiltersByCategory';

import theme from '../../src/styles/theme';
import styled from 'styled-components';

const ProductList = () => {
	const [productData] = useContext(ProductContext);
	const [filter] = useContext(FilterContext);

	function filterCategory(product) {
		const productCategory = product.category;
		const filterCategory = filter.category;

		return (
			filterCategory === 'all categories' ||
			filterCategory === productCategory.toLowerCase()
		);
	}

	function sortByPrice(a, b) {
		if (filter.price === 'lowest') {
			return a.cost - b.cost;
		} else if (filter.price === 'highest') {
			return b.cost - a.cost;
		} else {
			return 0;
		}
	}

	function displayProducts(products) {
		return products.map((product) => (
			<Product {...product} key={product._id} />
		));
	}

	function handleFilters() {
		const filterByCategory = productData.filter(filterCategory);
		const productToDisplay = filterByCategory.sort(sortByPrice);
		return displayProducts(productToDisplay);
	}

	useEffect(() => {
		handleFilters();
		// eslint-disable-next-line
	}, [filter]);

	// useEffect(() => {
	// 	handleFilters();
	// 	// eslint-disable-next-line
	// }, []);

	return (
		<main>
			<FiltersByPrice />
			<FiltersByCategory />
			<ProductListContainer>{handleFilters()}</ProductListContainer>
		</main>
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
