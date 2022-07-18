import styled from 'styled-components';

export const StyledContact = styled.section`
  background-color: ${({ theme }) => theme.colors.background_light};
  margin: 0;
  padding: 15rem 3rem;
  h1 {
    margin: 0;
    color: ${({ theme }) => theme.colors.secondary};
    transform: translate(0%, 150%);
  }

  h2 {
    color: ${({ theme }) => theme.colors.basic};
    font-weight: 100;
  }

  #subtitle {
    max-width: 25rem;
  }
  #buttonGroup {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    width: 100%;
    @media (min-width: 1024px) {
      flex-direction: row-reverse;

      p {
        flex-grow: 1;
        margin: 0.5rem 0 0 1rem;
      }
    }
  }

  .mask {
    overflow: hidden;
    width: fit-content;
  }

  form {
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    width: calc(100vw - 7rem);

    label {
      margin-top: 1rem;
      margin-left: 0.5rem;
      color: ${({ theme }) => theme.colors.basic};
      font-size: 1rem;
      font-weight: 100;
    }

    input,
    textarea {
      padding: 0.5rem;
      background-color: ${({ theme }) => theme.colors.background_pale};
      border-radius: 0.3125rem;
      border: none;
      color: white;
      margin-top: 1rem;
      &:active,
      &:focus {
        border: 1px solid ${({ theme }) => theme.colors.secondary};
        outline: none;
      }
    }
    textarea {
      display: block;
      resize: none;
      height: 10rem;
    }
    /* color-scheme: dark; */
    button {
      transition: transform 0.05s ease-in-out;
      background-color: ${({ theme }) => theme.colors.secondary};
      border-radius: 0.3125rem;

      border: none;
      h3 {
        font-weight: 400;
        color: ${({ theme }) => theme.colors.background_light};
      }
      &:hover {
        transform: scale(1.05);
      }
      &:active {
        transform: scale(0.9, 0.9);
      }
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {
      border: none;
      -webkit-text-fill-color: ${({ theme }) => theme.colors.basic};
      -webkit-box-shadow: 0 0 0px 1000px ${({ theme }) => theme.colors.background_pale} inset;
      transition: background-color 5000s ease-in-out 0s;
    }
  }

  #contactTilesGrid {
    margin-top: 4rem;

    display: grid;
    /* grid-template-columns: calc(100vw - 6rem); */
    gap: 1rem;

    @media (min-width: 1024px) {
      grid-template-columns: calc(33.33% - 0.666rem) calc(33.33% - 0.666rem) calc(33.33% - 0.666rem);
    }
  }

  @media (min-width: 600px) {
    padding: 15rem 20vw;
    form {
      width: 60vw;
      resize: none;
    }
  }

  @media (min-width: 1024px) {
    grid-template-columns: calc(33.33% - 0.666rem) calc(33.33% - 0.666rem) calc(33.33% - 0.666rem);
    padding: 15rem 12vw;
    form {
      width: calc(76vw);
      button {
        width: 15rem;
        align-self: flex-end;
      }
    }
  }
  @media (min-width: 1440px) {
    padding: 15rem 20vw;
    form {
      width: calc(60vw);
    }
  }

  [data-aos='in'].aos-animate {
    animation: in 0.5s ease 0.5s forwards;
  }

  [data-aos='inDelayed'].aos-animate {
    animation: in 0.5s ease 1s forwards;
  }

  @keyframes in {
    to {
      opacity: 100%;
      transform: translate(0%, 0%);
    }
  }

  #TileUp {
    transform: translate(50%, 0%);
    opacity: 0%;
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
`;
