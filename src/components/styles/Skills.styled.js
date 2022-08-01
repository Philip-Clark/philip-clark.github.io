import styled from 'styled-components';
const gap = '8rem';
export const StyledSkills = styled.section`
  margin: 0;
  text-align: left;
  overflow-x: hidden;
  line-height: 1.5rem;
  background-color: ${({ theme }) => theme.colors.background_dark};

  a {
    color: ${({ theme }) => theme.colors.basic};
    text-decoration: none;
    border-bottom: 0.001rem solid ${({ theme }) => theme.colors.basic};
  }
  #skillsList {
    gap: calc(${gap} / 2);
    display: grid;
    margin-top: 3rem;
    margin-bottom: 10rem;

    @media (min-width: 1024px) {
      grid-template-columns: calc(33.33% - (${gap} / 3)) calc(33.33% - (${gap} / 3)) calc(
          33.33% - (${gap} / 3)
        );
    }
  }

  #decorativeText {
    opacity: 20%;
    display: none;
    filter: invert();
    user-select: none;
    padding: 0rem 1rem;
    margin-bottom: 4rem;
    -webkit-user-drag: none;
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
  .mask {
    overflow: hidden;
    width: fit-content;
  }
  #softSkills {
    h1,
    #hardSkills {
      margin: 0;
      margin-bottom: 0;
      line-height: 2rem;
      color: ${({ theme }) => theme.colors.third};
      transform: translate(0%, 110%);
    }
    p {
      margin-bottom: 15rem;
      opacity: 0%;
    }
  }

  #aboveCircle {
    z-index: 10;
    position: relative;
  }
  #circle {
    z-index: -1;
    width: 35rem;
    height: 35rem;
    max-width: 90vw;
    max-height: 90vw;
    position: absolute;
    transform: scale(0);
    border-radius: 500rem;
    background-color: rgb(46, 46, 46, 0.2);
  }

  #TileUp {
    opacity: 0%;
    transform: translate(50%, 0%);
  }

  padding: 15rem 12vw;

  @media (min-width: 600px) {
    padding: 15rem 20vw;
  }

  @media (min-width: 1024px) {
    padding: 15rem 12vw;
  }
  @media (min-width: 1440px) {
    padding: 15rem 20vw;
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
    from {
      opacity: 0;
      transform: translate(0%, -20%);
    }
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
