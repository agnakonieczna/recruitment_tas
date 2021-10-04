import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
${normalize};

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

  body {
    font-size: 1rem;
    font-family: 'Yaldevi', sans-serif;
  }

  h1, h2 {
    text-transform: uppercase;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

export default GlobalStyle;
