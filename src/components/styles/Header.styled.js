import styled from 'styled-components';

export const StyledHeader = styled.section`
  color: white;
  height: 100vh;
  padding: 0rem 0rem;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.background_light};

  #decorative {
    display: none;
    bottom: 0;
    margin: 0;
    width: 100vw;
    font-size: 25vw;
    user-select: none;
    position: absolute;
    text-align: center;
  }

  #designRules {
    top: 1rem;
    right: 1rem;
    width: 100%;
    text-align: right;
    position: absolute;
    line-height: 0.2rem;

    h1,
    h2,
    p {
      color: rgb(151, 151, 151, 0.02);
    }
    #colorSwatches {
      width: 100vw;
      display: flex;
      flex-direction: row-reverse;

      .colorSwatch {
        display: flex;
        width: fit-content;
        font-size: 0.75rem;
        align-items: center;
        margin-left: 0.1rem;
        flex-direction: row-reverse;
        p {
          color: #686868;
        }
        .swatch {
          width: 10px;
          height: 10px;
          margin: 0 0.3rem;
          background-color: wheat;
        }
        #firstSwatch {
          background-color: ${({ theme }) => theme.colors.primary};
        }
        #secondSwatch {
          background-color: ${({ theme }) => theme.colors.secondary};
        }
        #thirdSwatch {
          background-color: ${({ theme }) => theme.colors.third};
        }
      }
    }
  }

  #nameAndTitle {
    width: 90vw;
    padding-top: 35vh;
    position: absolute;
    transform: translateX(-50%);
    opacity: 0;
    animation: svgInitialFade 0.2s forwards 0.35s;
  }

  #scroll {
    bottom: 3rem;
    position: absolute;
    transform: translate(-50%, 0px);
    animation: scrollBounce 2s ease-in-out 1s infinite;
  }
  @keyframes scrollBounce {
    0% {
      transform: translate(-50%, 0px);
    }
    5% {
      transform: translate(-50%, 5px);
    }
    10% {
      transform: translate(-50%, 5px);
    }
    20% {
      transform: translate(-50%, 0px);
    }
  }

  .fadesIn {
    opacity: 0;
    animation: fadeIn 0.5s ease-in-out 3s forwards;
  }

  @keyframes svgInitialFade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
`;
