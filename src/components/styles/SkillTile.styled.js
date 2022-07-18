import styled from 'styled-components';

export const StyledSkillTile = styled.section`
  display: flex;
  text-align: center;
  line-height: 1.5rem;
  align-items: center;
  padding: 2rem 0.5rem;
  flex-direction: column;
  border-radius: 1.5625rem;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.background_light};
  transition: transform 0.1s ease-out;

  h1 {
    width: 100%;
    font-size: 1.5rem;
    justify-self: center;
    line-height: 1.25rem;
    color: ${({ theme }) => theme.colors.third};

    @media (max-width: 300px) {
      font-size: 8vw;
      letter-spacing: 0.01rem;
    }
  }
  h3,
  p {
    color: ${({ theme }) => theme.colors.basic};
    flex-grow: 1;
  }

  h3 {
    font-weight: 100;
    line-height: 1rem;
    font-size: 0.875rem;
  }
  p {
    font-size: 1rem;
    margin-top: 3rem;
    margin-bottom: 2rem;
    line-height: 1.25rem;
  }

  img {
    max-width: 100%;
    max-height: 8rem;
    margin-bottom: 0rem;
  }

  @media (min-width: 600px) {
    padding: 2rem 10vw;
  }
  @media (min-width: 1024px) {
    &:hover {
      transform: translateY(-1rem);
    }
    padding: 2rem 2rem;
  }
`;
