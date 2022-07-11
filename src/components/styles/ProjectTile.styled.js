import styled from 'styled-components';

export const StyledProjectTile = styled.section`
  background-color: ${({ theme }) => theme.colors.background_light};
  color: white;
  margin: 0;

  text-align: left;
  line-height: 1.2rem;
  padding: 10rem 0rem;

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
    transform: translate(10%, -60%);
    z-index: -1;
    border-radius: 500rem;
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
  #button {
    display: block;
    border-radius: 0.3125rem;
    color: ${({ theme }) => theme.colors.background_dark};
    width: calc(100vw - 8rem);
    /* 6 from the body and 2 from self = 8rem */
    text-align: center;
    text-decoration: none;
    padding: 1rem;
    background-color: ${({ theme }) => theme.colors.primary};
  }
  p {
    margin: 3rem 0;
  }

  img {
    width: calc(100vw - 6rem);
    margin-bottom: 3rem;
  }

  @media (min-width: 600px) {
    img {
      width: calc(60vw);
      margin-bottom: 3rem;
    }
    #button {
      width: calc(60vw);
    }
  }
  @media (min-width: 1024px) {
    #button {
      width: 15rem;
    }
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

    #button {
      width: fit-content;
      padding: 1rem 3rem;
    }
  }

  [data-aos='ProjectZoom'].aos-animate {
    animation: ProjectZoom 0.5s ease 2s forwards;
  }

  @keyframes ProjectZoom {
    to {
      transform: scale(1);
      opacity: 100%;
    }
  }
`;
