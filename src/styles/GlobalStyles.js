import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
${normalize}

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
    font-family: 'Inter', sans-serif;
  }

  h2 {
    font-size: 2rem;

    @media (min-width: 768px) {
      font-size: 3rem;
    }
  }

  p {
    font-size: 1.4rem;

    @media (min-width: 768px) {
      font-size: 2rem;
    }

    @media (min-width: 1024px) {
      font-size: 2.6rem;
    }
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  img {
    width: 100%;
  }
`;

export default GlobalStyle;
