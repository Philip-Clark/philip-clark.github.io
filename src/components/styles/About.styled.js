import styled from 'styled-components';

export const StyledAbout = styled.section`
  margin: 0;
  color: white;
  text-align: left;
  padding: 8rem 3rem;
  line-height: 1.5rem;
  background-color: ${({ theme }) => theme.colors.background_dark};

  #aboveCircle {
    z-index: 10;
    position: relative;
  }

  h1 {
    margin: 0;
    padding: 0;
    font-size: 4rem;
    line-height: 4rem;
    letter-spacing: 0.03rem;
    transform: translate(0%, 110%);
    color: ${({ theme }) => theme.colors.secondary};
  }
  h2 {
    font-size: 2rem;
    margin-top: 0.5rem;
    line-height: normal;
    transform: translate(0%, -150%);
    color: ${({ theme }) => theme.colors.secondary};
  }

  p {
    opacity: 0%;
    margin-top: 2rem;
  }

  .mask {
    overflow: hidden;
    width: fit-content;
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

  @media (min-width: 600px) {
    padding: 25rem 20vw;
  }

  @keyframes circleIn {
    from {
      transform: translate(-60%, -40%) scale(0);
    }
    to {
      transform: translate(-50%, -50%) scale(1);
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

  @keyframes in {
    to {
      opacity: 100%;
      transform: translate(0%, 0%);
    }
  }
`;
