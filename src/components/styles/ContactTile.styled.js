import styled from 'styled-components';

export const StyledContactTile = styled.section`
  background-color: ${({ theme }) => theme.colors.background_pale};
  border-radius: 1.5rem;
  padding: 2rem 0.5rem 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  transition: transform 0.1s ease-out;
  &:hover {
    transform: translateY(-1rem);
  }
  h2 {
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: 400;
  }
  p {
    font-weight: 100;
    margin-bottom: 2rem;
    flex-grow: 1;
  }
  a {
    width: fit-content;
    border-radius: 0.3rem;
    padding: 0.5rem 3rem;
    margin: 0;
    text-decoration: none;
    font-weight: 500;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.background_pale};
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
