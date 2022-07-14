import styled from 'styled-components';

export const StyledHeader = styled.section`
  background-color: ${({ theme }) => theme.colors.background_light};
  color: white;
  padding: 0rem 0rem;
  height: 100vh;
  text-align: center;

  /* .mask {
    overflow: hidden;
    margin: 0 auto 0.1rem;
    width: fit-content;
  } */

  #nameAndTitle {
    padding-top: 35vh;
    width: 90vw;

    transform: translateX(-50%);
    position: absolute;

    #title {
      height: 2rem;
      opacity: 0;

      h1 {
        margin: 0;
        transform: translate(0, 100%);
        animation: textin 0.5s ease 1.2s forwards;
      }
      #line {
        transform: scale(0, 0);
        opacity: 0;
      }

      #subtitle {
        height: 1rem;
        opacity: 0;
      }
    }

    #titleBlock {
      display: block;
      margin: 0.25rem auto;
      width: 0rem;
      animation: boxScale 2s 0.5s ease-in-out forwards;
      height: 0.3rem;
      background-color: ${({ theme }) => theme.colors.secondary};
      /* border-bottom: solid 0.1rem ${({ theme }) => theme.colors.primary}; */
    }

    p {
      transform: translate(0, -100%);
      animation: textin 0.5s ease 1.2s forwards;

      letter-spacing: 0.4rem;
      margin: 0;
    }
  }

  #decorative {
    user-select: none;
    position: absolute;
    bottom: 0;
    margin: 0;
    text-align: center;

    width: 100vw;
    font-size: 25vw;
    color: rgb(151, 151, 151, 0.02);
  }

  #designRules {
    text-align: right;
    position: absolute;
    right: 1rem;
    top: 1rem;
    width: 100%;
    line-height: 0.2rem;

    h1,
    h2,
    p {
      color: rgb(151, 151, 151, 0.02);
    }
    #colorSwatches {
      display: flex;
      flex-direction: row-reverse;
      width: 100vw;

      .colorSwatch {
        width: fit-content;
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        margin-left: 0.1rem;
        font-size: 0.75rem;
        p {
          color: #686868;
        }
        .swatch {
          margin: 0 0.3rem;
          width: 10px;
          height: 10px;
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

  #scroll {
    position: absolute;
    bottom: 3rem;
    animation: scrollBounce 2s ease-in-out infinite;
    transform: translate(-50%, 0px);
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

  @keyframes textin {
    to {
      transform: translate(0%);
    }
  }

  @keyframes boxScale {
    0% {
      width: 0rem;
    }

    40% {
      width: 18rem;
    }
    50% {
      width: 18rem;
      opacity: 100%;
    }

    100% {
      opacity: 00%;
      width: 18rem;
    }
  }
`;
