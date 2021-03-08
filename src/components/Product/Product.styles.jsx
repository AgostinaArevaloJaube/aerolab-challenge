import styled from 'styled-components';
import theme from '../../styles/theme';

export const ProductContainer = styled.div`
	margin: 0.5rem;
	padding: 0.8rem;
	width: 70%;
	border: 0.5px solid #e4e1e1;
	border-radius: 5px;
	box-shadow: ${theme.colors.boxShadow};
	background-color: #fff;
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
	z-index: 5;

	@media ${theme.mediaQueries.above600} {
		width: 40%;
	}

	@media ${theme.mediaQueries.above768} {
		width: 20%;
	}
`;

export const ProductImg = styled.img`
	width: 100%;
`;

export const ProductInfo = styled.div`
	padding-top: 0.5rem;
	align-self: flex-start;
`;

export const ProductCategory = styled.p`
	color: ${theme.fonts.secondaryColor};
	font-size: 0.8em;
`;

export const ProductName = styled.p`
	font-size: 0.8em;
`;

export const Line = styled.hr`
	margin: 0.5rem;
	width: 100%;
	height: 1px;
	background-color: #ebe3e3;
	border: #ebe3e3;
`;
