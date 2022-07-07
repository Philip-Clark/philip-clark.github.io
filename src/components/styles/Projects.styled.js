import styled from 'styled-components';

export const StyledProjects = styled.section`
  background-color: ${({ theme }) => theme.colors.background_light};

  padding: 10rem 3rem;

  @media (min-width: 600px) {
    padding: 10rem 20vw;
  }

  @media (min-width: 1440px) {
    padding: 10rem 15vw;
    .Project:nth-of-type(even) section #aboveCircle {
      flex-direction: row-reverse;
    }
  }
`;
