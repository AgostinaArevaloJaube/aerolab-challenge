import styled from 'styled-components';
import theme from '../styles/theme';

const Coins = styled.div`
	margin: 0.5rem;
	padding: 0.3rem;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 1.2rem;
	background-color: ${theme.colors.buttonBackground};

	p {
		margin: 0.1rem;
	}

	img {
		width: 1.6rem;
		margin: 0.1rem;
	}
`;

export default Coins;
