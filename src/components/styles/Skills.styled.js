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
    min-width: min-content;
    /* grid-template-columns: calc(100vw - 6rem); */
    padding: 0 3rem;
    margin-bottom: 10rem;
    margin-top: 3rem;
    gap: 1rem;

    @media (min-width: 600px) {
      padding: 0rem 20vw;
    }

    @media (min-width: 1024px) {
      grid-template-columns: calc(33.33% - 0.666rem) calc(33.33% - 0.666rem) calc(33.33% - 0.666rem);

      padding: 0rem 12vw;
    }
    @media (min-width: 1440px) {
      padding: 0rem 20vw;
    }
  }

  #decorativeText {
    display: none;

    user-select: none;
    -webkit-user-drag: none;
    padding: 0rem 1rem;
    margin-bottom: 4rem;
    width: calc(100vw - 2rem);
    filter: invert();
    opacity: 20%;
    @media (min-width: 1024px) {
      padding: 0rem 5vw;
      width: calc(90vw - 2rem);
    }
    @media (min-width: 1440px) {
      width: calc(60vw - 2rem);
      padding: 0rem 20vw;
    }
  }
  .mask {
    overflow: hidden;
    width: fit-content;
  }
  #softSkills {
    padding: 8rem 3rem 0rem;
    h1,
    #hardSkills {
      color: ${({ theme }) => theme.colors.third};
      line-height: 2rem;
      margin: 0;
      margin-bottom: 0;
      transform: translate(0%, 110%);
    }
    p {
      margin-bottom: 15rem;
      opacity: 0%;
    }
    @media (min-width: 600px) {
      padding: 8rem 20vw 0rem;
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
    z-index: -1;
    border-radius: 500rem;
    transform: scale(0);
  }

  #TileUp {
    opacity: 0%;
    transform: translate(50%, 0%);
  }

  @keyframes circleIn {
    from {
      transform: translate(-60%, -40%) scale(0);
    }
    to {
      transform: translate(-20%, -50%) scale(1);
    }
  }

  [data-aos='in'].aos-animate {
    animation: in 0.5s ease 0.5s forwards;
  }

  [data-aos='inDelayed'].aos-animate {
    animation: in 0.5s ease 1s forwards;
  }

  [data-aos='circle'].aos-animate {
    animation: circleIn 1s ease 0.2s forwards;
  }

  [data-aos='TileUp'].aos-animate {
    animation: TileUp 0.5s ease forwards;
  }

  [data-aos='TileUp'].aos-animate:nth-of-type(1) {
    animation-delay: 0.8s;
  }
  [data-aos='TileUp'].aos-animate:nth-of-type(2) {
    animation-delay: 0.9s;
  }
  [data-aos='TileUp'].aos-animate:nth-of-type(3) {
    animation-delay: 1s;
  }

  @keyframes TileUp {
    to {
      opacity: 100%;
      transform: translate(0%, 0%);
    }
  }

  @keyframes in {
    from {
      opacity: 0%;
    }
    to {
      opacity: 100%;
      transform: translate(0%, 0%);
    }
  }
`;
