import React, { useContext } from "react";
import styled from "styled-components";
import theme from "../../styles/theme";
import { FilterContext } from "../Context/FilterContext";

const FilterbyPrice = () => {
	const [filter, setFilter] = useContext(FilterContext);

	function handleFilters(event) {
		let { name, value } = event.target;
		const newData = { ...filter, [name]: value };
		setFilter(newData);
	}

	return (
		<Container>
			<Text>Sort by:</Text>
			<ButtonsContainer>
				<Label>
					<input
						className="for-check"
						type="radio"
						name="price"
						id="all-prices"
						value="all prices"
						onChange={handleFilters}
					/>
					All prices
				</Label>

				<Label>
					<input
						className="for-check"
						type="radio"
						name="price"
						id="lowest"
						value="lowest"
						onChange={handleFilters}
					/>
					Lowest price
				</Label>

				<Label>
					<input
						className="for-check"
						type="radio"
						name="price"
						id="highest"
						value="highest"
						onChange={handleFilters}
					/>
					Highest Price
				</Label>
			</ButtonsContainer>
		</Container>
	);
};

export default FilterbyPrice;

const Container = styled.div`
	display: flex;
	align-items: center;
	color: rgb(97, 97, 97);
	font-size: 0.7em;

	@media (min-width: 350px) {
		font-size: 1em;
	}

`;

const Text = styled.p`
	display: none;

	@media ${theme.mediaQueries.above768} {
		display: block;
	}
`;

const ButtonsContainer = styled.div`
	margin: 0.5rem;
	display: flex;
`;

const Label = styled.label`
	margin: 2px;
	border-radius: 2rem;
	padding: 0.4rem;
	cursor: pointer;
	background-color: ${theme.colors.buttonBackground};
	text-align: center;

	&:hover {
		background: linear-gradient(
			180deg,
			rgba(10, 212, 250, 0.86) 0%,
			rgba(37, 187, 241, 0.86) 100%
		);
		color: #fff;
	}

	.for-check:checked ~ label {
		background-color: pink;
	}

	input[type="radio"] {
		display: none;
	}
`;
