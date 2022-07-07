import styled from 'styled-components';

export const StyledSkillTile = styled.section`
  background-color: ${({ theme }) => theme.colors.background_light};
  border-radius: 1.5625rem;
  text-align: center;
  padding: 2rem 0.5rem;
  line-height: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  transition: transform 0.1s ease-out;
  &:hover {
    transform: translateY(-1rem);
  }
  h1 {
    justify-self: center;
    font-size: 1.5rem;
    line-height: 1.25rem;
    width: 100%;
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
    font-size: 0.875rem;
    line-height: 1rem;
  }
  p {
    font-size: 1rem;
    line-height: 1.25rem;
    margin-top: 3rem;
    margin-bottom: 2rem;
  }

  img {
    max-height: 8rem;
    max-width: 100%;

    margin-bottom: 0rem;
  }

  @media (min-width: 600px) {
    padding: 2rem 10vw;
  }
  @media (min-width: 1024px) {
    padding: 2rem 2rem;
  }
`;
