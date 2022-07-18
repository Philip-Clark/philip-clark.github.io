import styled from 'styled-components';

export const StyledContactTile = styled.section`
  display: flex;
  text-align: center;
  align-items: center;
  border-radius: 1.5rem;
  flex-direction: column;
  padding: 2rem 0.5rem 3rem;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.background_pale};
  transition: transform 0.1s ease-out;
  &:hover {
    transform: translateY(-1rem);
  }
  h2 {
    font-weight: 400;
    margin-top: 2.5rem;
    color: ${({ theme }) => theme.colors.secondary};
  }
  p {
    flex-grow: 1;
    font-weight: 100;
    margin-bottom: 2rem;
  }
  a {
    margin: 0;
    font-weight: 500;
    width: fit-content;
    padding: 0.5rem 3rem;
    color: ${({ theme }) => theme.colors.background_pale};
    border-radius: 0.3rem;
    text-decoration: none;
    background-color: ${({ theme }) => theme.colors.secondary};
    transition: all 0.05s ease-in-out;

    &:hover {
      transform: scale(1.1, 1.1);
    }
    &:active {
      transform: scale(0.9, 0.9);
    }
  }

  img {
    height: 8rem;
  }

  @media (min-width: 600px) {
    padding: 2rem 10vw 3rem;
  }
  @media (min-width: 1024px) {
    padding: 2rem 2rem 3rem;
  }
`;
