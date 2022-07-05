import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
  font-family: 'Roboto', sans-serif;
  scroll-behavior: smooth;
}

#root, body{
  overflow-x: hidden;
}

h1{
  font-size:2rem;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.primary};
  letter-spacing:0.22rem;
}
h2{
  font-size:1rem;
  color: ${({ theme }) => theme.colors.primary};
}
p{
  font-size: 1rem;
  font-weight: 100;
  line-height: 150%;
  letter-spacing: 0.1rem;
}
`;

export default GlobalStyles;
