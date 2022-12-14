import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*,*::before,::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: none;
    outline: none;
    text-decoration: none;
}

body {
	line-height: 1;
    font-family: 'Raleway', sans-serif;
    font-size: 10px;
    min-height: 100vh;
}


`;

export default GlobalStyle;
