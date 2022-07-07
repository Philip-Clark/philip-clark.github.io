import styled from 'styled-components';

export const StyledAbout = styled.section`
  background-color: ${({ theme }) => theme.colors.background_dark};
  color: white;
  margin: 0;
  text-align: left;
  padding: 8rem 3rem;
  line-height: 1.5rem;

  #aboveCircle {
    position: relative;
    z-index: 10;
  }

  h1 {
    margin: 0;
    font-size: 4rem;
    letter-spacing: 0.03rem;
    color: ${({ theme }) => theme.colors.secondary};
  }
  h2 {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.secondary};
  }

  p {
    font-size: 1rem;
    margin-top: 2rem;
  }

  #circle {
    position: absolute;
    background-color: rgb(46, 46, 46, 0.2);
    width: 35rem;
    max-width: 90vw;
    max-height: 90vw;
    height: 35rem;
    transform: translate(-50%, -30%);
    z-index: -1;
    border-radius: 500rem;
  }

  @media (min-width: 600px) {
    padding: 25rem 20vw;
  }
`;
