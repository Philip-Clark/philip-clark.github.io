import styled from 'styled-components';

export const StyledSkillTile = styled.section`
  background-color: ${({ theme }) => theme.colors.background_light};
  border-radius: 1.5625rem;
  text-align: center;
  padding: 2rem 2rem;
  line-height: 1.5rem;

  h1 {
    margin: 0;
    font-size: 1.5rem;
    letter-spacing: 0.03rem;
  }
  h1,
  h2,
  p {
    color: ${({ theme }) => theme.colors.basic};
  }

  h2 {
    font-weight: 100;
    font-size: 0.875rem;
    line-height: 1rem;
    padding: 0 0.5rem 1rem 0.5rem;
  }
  p {
    font-size: 1.25rem;
    margin-top: 2rem;
    margin-bottom: 0;
  }

  img {
    max-width: 100%;
    margin-bottom: 2rem;
  }

  @media (min-width: 600px) {
    padding: 1rem 10vw;
  }
  @media (min-width: 1024px) {
    padding: 1rem 2rem;

    img {
      margin-bottom: 0rem;
    }
    p {
      margin-top: 0;
    }
    h2 {
      padding-bottom: 0;
    }
  }
`;
