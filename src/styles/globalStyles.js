import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Source Sans Pro', sans-serif;
	color: '#616161'
};
body {
	max-width: 1200px;
	margin: 0 auto;
	background-color: #f5f5f5;
}
`;

export default GlobalStyle;
