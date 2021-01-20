import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';
import heroImg from '../assets/header-x1.png';

const Hero = () => {
	return (
		<HeroContainer>
			<Image src={heroImg} alt="Imagen de portada" />
			<Title>Rewards Store</Title>
		</HeroContainer>
	);
};

const HeroContainer = styled.div`
	position: relative;
`;

const Image = styled.img`
	max-width: 100%;
`;

const Title = styled.h1`
	width: 80%;
	color: ${theme.colors.background};
	position: relative;
	font-size: 1.3em;
	top: -3rem;
	left: 1.5rem;

	@media ${theme.mediaQueries.above480} {
		font-size: 1.8em;
		top: -4rem;
	}

	@media ${theme.mediaQueries.above600} {
		font-size: 2em;
		top: -5rem;
	}

	@media ${theme.mediaQueries.above768} {
		font-size: 2.3em;
		top: -6rem;
	}
	@media ${theme.mediaQueries.above900} {
		font-size: 2.5em;
		top: -7rem;
	}
	@media ${theme.mediaQueries.above1024} {
		font-size: 3em;
		top: -8rem;
	}
	@media ${theme.mediaQueries.above1200} {
		font-size: 4em;
		top: -10rem;
	}
`;
export default Hero;
