import styled from 'styled-components';

export const StyledSkills = styled.section`
  background-color: ${({ theme }) => theme.colors.background_dark};
  margin: 0;
  padding: 10rem 0rem;
  text-align: left;
  line-height: 1.5rem;
  overflow-x: hidden;

  #skillsList {
    display: grid;
    grid-template-columns: auto;
    padding: 0rem 1rem;
    gap: 1rem;

    @media (min-width: 600px) {
      padding: 0rem 20vw;
    }

    @media (min-width: 1024px) {
      grid-template-columns: calc(33.33% - 0.666rem) calc(33.33% - 0.666rem) calc(33.33% - 0.666rem);

      padding: 0rem 5vw;
    }
    @media (min-width: 1440px) {
      padding: 0rem 20vw;
    }
  }

  #decorativeText {
    padding: 0rem 1rem;
    margin-bottom: 4rem;
    width: calc(100vw - 2rem);
    @media (min-width: 1024px) {
      padding: 0rem 5vw;
      width: calc(90vw - 2rem);
    }
    @media (min-width: 1440px) {
      width: calc(60vw - 2rem);
      padding: 0rem 20vw;
    }
  }

  #softSkills {
    padding: 8rem 3rem;
    h2 {
      color: ${({ theme }) => theme.colors.basic};
    }
    @media (min-width: 600px) {
      padding: 8rem 20vw;
    }
  }

  #aboveCircle {
    position: relative;
    z-index: 10;
  }
  #circle {
    position: absolute;
    background-color: rgb(46, 46, 46, 0.2);
    width: 35rem;
    max-width: 90vw;
    max-height: 90vw;
    height: 35rem;
    transform: translate(-20%, -25%);
    z-index: -1;
    border-radius: 500rem;
  }
`;
