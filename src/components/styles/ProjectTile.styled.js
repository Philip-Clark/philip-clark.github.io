import styled from 'styled-components';

export const StyledProjectTile = styled.section`
  margin: 0;
  color: white;
  text-align: left;
  line-height: 1.2rem;
  padding: 10rem 0rem;
  background-color: ${({ theme }) => theme.colors.background_light};

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
    border-radius: 500rem;
    background-color: rgb(46, 46, 46, 0.2);
    transform: translate(10%, -60%) scale(0);
  }
  h1 {
    margin: 0;
    font-size: 3rem;
    line-height: 3rem;
    letter-spacing: 0.03rem;
  }
  h2 {
    font: 1rem;
    font-weight: 900;
    color: ${({ theme }) => theme.colors.basic};
  }

  .buttonRow {
    display: flex;
    flex-wrap: wrap;
  }

  #button:not(:last-child) {
    margin-right: 1rem;
  }
  #button {
    padding: 1rem;
    display: block;
    text-align: center;
    color: ${({ theme }) => theme.colors.background_dark};
    text-decoration: none;
    border-radius: 0.3125rem;
    width: 10rem;
    background-color: ${({ theme }) => theme.colors.primary};
    transition: all 0.05s ease-in-out;
    margin-bottom: 1rem;

    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 0.5rem;

    p {
      margin: 0;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.background_light};
    }
    img {
      margin: 0;
      width: 2rem;
    }
    [src*='github.svg'] {
      filter: invert(100);
    }

    &:hover {
      transform: scale(1.1, 1.1);
    }
    &:active {
      transform: scale(0.9, 0.9);
    }
  }
  p {
    margin: 3rem 0;
  }

  img {
    margin-bottom: 3rem;
    width: calc(100vw - 6rem);
  }

  @media (min-width: 600px) {
    img {
      width: calc(60vw);
    }
  }
  @media (min-width: 1024px) {
  }
  @media (min-width: 1440px) {
    #aboveCircle {
      display: flex;
      flex-direction: row;
    }
    #text {
      margin: 0;
    }

    img {
      margin: 5rem 5vw auto;
      width: 30vw;
    }
  }

  @keyframes circleIn {
    from {
      transform: translate(10%, -60%) scale(0);
    }
    to {
      transform: translate(10%, -60%) scale(1);
    }
  }
  [data-aos='circle'].aos-animate {
    animation: circleIn 1s ease 0.2s forwards;
  }
`;
