import styled from 'styled-components';

export const StyledProject = styled.section`
  background-color: ${({ theme }) => theme.colors.background_light};
  color: white;
  padding: 0rem;
  margin: 0;

  text-align: left;
  line-height: 1.2rem;
  padding: 8rem 3rem;

  h1 {
    margin: 0;
    font-size: 3rem;
    line-height: 3rem;
    letter-spacing: 0.03rem;
  }
  h2 {
    font: 1rem;
    font-weight: 900;
    color: ${({ theme }) => theme.colors.basic};
  }
  #button {
    display: block;
    border-radius: 0.3125rem;
    color: ${({ theme }) => theme.colors.background_dark};
    width: calc(100vw - 8rem);
    /* 6 from the body and 2 from self = 8rem */
    text-align: center;
    padding: 1rem;
    background-color: ${({ theme }) => theme.colors.primary};
  }
  p {
    margin: 3rem 0;
  }

  img {
    width: calc(100vw - 6rem);
    margin-bottom: 3rem;
  }
`;
