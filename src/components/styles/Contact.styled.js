import styled from 'styled-components';

export const StyledContact = styled.section`
  margin: 0;
  padding: 15rem 3rem;
  background-color: ${({ theme }) => theme.colors.background_light};
  h1 {
    margin: 0;
    transform: translate(0%, 150%);
    color: ${({ theme }) => theme.colors.secondary};
  }

  h2 {
    font-weight: 100;
    color: ${({ theme }) => theme.colors.basic};
  }

  #subtitle {
    max-width: 25rem;
  }
  #buttonGroup {
    width: 100%;
    display: flex;
    margin-top: 2rem;
    flex-direction: column;
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
    display: flex;
    margin-top: 4rem;
    flex-direction: column;
    width: calc(100vw - 7rem);

    label {
      font-size: 1rem;
      margin-top: 1rem;
      font-weight: 100;
      margin-left: 0.5rem;
      color: ${({ theme }) => theme.colors.basic};
    }

    input,
    textarea {
      border: none;
      color: white;
      padding: 0.5rem;
      margin-top: 1rem;
      border-radius: 0.3125rem;
      background-color: ${({ theme }) => theme.colors.background_pale};
      &:active,
      &:focus {
        border: 1px solid ${({ theme }) => theme.colors.secondary};
        outline: none;
      }
    }
    textarea {
      resize: none;
      height: 10rem;
      display: block;
    }
    button {
      border: none;
      border-radius: 0.3125rem;
      background-color: ${({ theme }) => theme.colors.secondary};
      transition: transform 0.05s ease-in-out;
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
      transition: background-color 5000s ease-in-out 0s;
      -webkit-text-fill-color: ${({ theme }) => theme.colors.basic};
      -webkit-box-shadow: 0 0 0px 1000px ${({ theme }) => theme.colors.background_pale} inset;
    }
  }

  #contactTilesGrid {
    gap: 1rem;
    display: grid;
    margin-top: 4rem;

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
    padding: 15rem 12vw;
    grid-template-columns: calc(33.33% - 0.666rem) calc(33.33% - 0.666rem) calc(33.33% - 0.666rem);
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
