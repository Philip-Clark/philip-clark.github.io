import styled from 'styled-components';

export const StyledAbout = styled.section`
  background-color: ${({ theme }) => theme.colors.background_dark};
  color: white;
  margin: 0;

  text-align: left;
  padding: 8rem 3rem;
  line-height: 1.5rem;

  h1 {
    margin: 0;
    font-size: 3rem;
    letter-spacing: 0.03rem;
  }

  p {
    font-size: 1rem;
    margin-top: 2rem;
  }

  #circle {
    background-color: rgb(46, 46, 46, 0.2);
    width: 25rem;
    height: 25rem;
    position: absolute;
    top: 103vh;
    left: -5rem;
    border-radius: 500rem;
  }

  @media (min-width: 600px) {
    padding: 40rem 20vw;
  }
`;
