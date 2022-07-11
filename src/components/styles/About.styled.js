import styled from 'styled-components';

export const StyledAbout = styled.section`
  background-color: ${({ theme }) => theme.colors.background_dark};
  color: white;
  margin: 0;
  text-align: left;
  padding: 8rem 3rem;
  line-height: 1.5rem;

  #aboveCircle {
    position: relative;
    z-index: 10;
  }

  h1 {
    margin: 0;
    font-size: 4rem;
    letter-spacing: 0.03rem;
    line-height: 4rem;
    padding: 0;
    transform: translate(0%, 110%);

    color: ${({ theme }) => theme.colors.secondary};
  }
  h2 {
    font-size: 2rem;
    line-height: normal;
    margin-top: 0.5rem;

    transform: translate(0%, -150%);
    color: ${({ theme }) => theme.colors.secondary};
  }

  p {
    font-size: 1rem;
    margin-top: 2rem;
    opacity: 0%;
  }

  .mask {
    overflow: hidden;
    width: fit-content;
  }

  #circle {
    position: absolute;
    background-color: rgb(46, 46, 46, 0.2);
    width: 35rem;
    max-width: 90vw;
    max-height: 90vw;
    height: 35rem;
    z-index: -1;
    transform: scale(0);
    border-radius: 500rem;
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
