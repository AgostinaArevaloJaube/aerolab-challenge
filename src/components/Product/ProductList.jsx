import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../Context/ProductContext";
import { FilterContext } from "../Context/FilterContext";

import Product from "./Product";
import FilterByPrice from "../Filters/FilterByPrice";

import theme from "../../styles/theme";
import styled from "styled-components";

import Pagination from "@material-ui/lab/Pagination";
import usePagination from "../usePagination";

const ProductList = () => {
	const [productData] = useContext(ProductContext);
	const [filter] = useContext(FilterContext);
	const [productsToPaginate, setProductsToPaginate] = useState([]);

	// seteo el estado de productos a paginar cuando cambia productData (tengo que esperar los datos de la API)
	useEffect(() => {
		setProductsToPaginate([...productData]);
	}, [productData]);

	function sortByPrice(a, b) {
		if (filter.price === "lowest") {
			return a.cost - b.cost;
		} else if (filter.price === "highest") {
			return b.cost - a.cost;
		} else {
			return 0;
		}
	}

	function handleFilters() {
		const  productsToOrder= [...productData];
		const orderedProducts = productsToOrder.sort(sortByPrice);
		setProductsToPaginate(orderedProducts);
	}

	// Cada vez que cambian los filtros se ejecuta la función de manejo de filtros.
	useEffect(() => {
		handleFilters();
		// eslint-disable-next-line
	}, [filter]);

	// Paginación
	// seteos para pasar al custom hook usePagination
	const [currentPage, setCurrentPage] = useState(1);
	const PRODUCTS_PER_PAGE = 16;

	const count = Math.ceil(productsToPaginate.length / PRODUCTS_PER_PAGE);
	const productsPaginated = usePagination(
		productsToPaginate,
		PRODUCTS_PER_PAGE
	);

	function handlePagination(event, pageSelected) {
		setCurrentPage(pageSelected);
		productsPaginated.jumpToPage(pageSelected);
	}

	return (
		<main>
			<Container>
				<FilterContainer>
					<FilterByPrice />
				</FilterContainer>
				<PaginationContainer style={{ color: "#616161" }}>
					<PaginationText>
						Page {currentPage} of {count}
					</PaginationText>
					<Pagination
						count={count}
						variant="outlined"
						page={currentPage}
						onChange={handlePagination}
					/>
				</PaginationContainer>
			</Container>
			<Line />
			<ProductListContainer>
				{productsPaginated.currentData().map((product) => (
					<Product {...product} key={product._id} />
				))}
			</ProductListContainer>
			<Line />
			<PaginationBottomContainer style={{ color: "#616161" }}>
				<PaginationText>
					Page {currentPage} of {count}
				</PaginationText>
				<Pagination
					count={count}
					variant="outlined"
					page={currentPage}
					onChange={handlePagination}
				/>
			</PaginationBottomContainer>
		</main>
	);
};

export default ProductList;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	@media ${theme.mediaQueries.above600} {
		flex-direction: row;
		justify-content: center;
	}


	@media ${theme.mediaQueries.above768}{
		justify-content: space-between;
		margin: 0 4% 0 4%
	})
`;

const FilterContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	@media ${theme.mediaQueries.above600} {
		flex-direction: row;
		justify-content: center;
	}
`;

const Line = styled.hr`
	display: none;

	@media (min-width: 400px) {
		display: block;
		margin: 0.5rem auto;
		width: 95%;
		height: 1px;
		background-color: #ebe3e3;
		border: #ebe3e3;
	}
`;

const PaginationContainer = styled.div`
	display: flex;
	align-items: center;
	margin: 0.5rem 0 0.5rem 0;
`;

const PaginationText = styled.p`
	display: none;
	margin: 0 4px 0 4px;

	@media ${theme.mediaQueries.above768} {
		display: block;
	}
`;

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

const PaginationBottomContainer = styled(PaginationContainer)`
	justify-content: center;

	@media ${theme.mediaQueries.above768}{
		justify-content: space-between;
		margin: 2% 4% 2% 4%
	})
`;
