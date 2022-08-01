import styled from 'styled-components';

export const StyledSkillTile = styled.section`
  display: flex;
  text-align: left;
  line-height: 2rem;
  padding: 2rem;
  text-align: center;
  flex-direction: column;
  border-radius: 1.5625rem;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.colors.background_light};
  transition: transform 0.1s ease-out;

  h1 {
    font-size: 1.5rem;
    font-weight: 300;
    justify-self: center;
    line-height: 1.5rem;
    color: ${({ theme }) => theme.colors.third};

    @media (max-width: 300px) {
      font-size: 8vw;
      letter-spacing: 0.01rem;
    }
  }
  h3,
  h3 {
    font-weight: 100;
    line-height: 1rem;
    font-size: 0.875rem;
  }
  li {
    font-size: 1rem;
    font-weight: 100;
    color: ${({ theme }) => theme.colors.basic};
    line-height: 1.5rem;
    margin: 0;
    padding: 0;
    list-style: none;
    text-align: center;
  }

  .skillsList {
    margin: 0 auto;
    padding: 0;
    width: fit-content;
  }
  img {
    width: 100%;
    margin: 0 auto;
    padding: 0;
    max-width: 12rem;
    max-height: 12rem;
    margin-bottom: 0rem;
  }
`;
