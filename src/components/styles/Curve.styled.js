import styled from 'styled-components';

export const StyledCurve = styled.div`
  top: 0;
  left: 0;
  opacity: 0;
  display: none;
  overflow: visible;
  position: absolute;

  svg {
    overflow: visible;
  }

  animation: reveal 0.5s 2s ease forwards;

  #curve {
    animation: revealLine 1s 2.5s cubic-bezier(1, 0, 1, 0.63) forwards;
    stroke: ${({ theme }) => theme.colors.basic};
  }

  #circleSvg {
    stroke: ${({ theme }) => theme.colors.basic};
    fill: ${({ theme }) => theme.colors.basic};
  }

  #circleSvgBlur1,
  #circleSvgBlur2,
  #circleSvgBlur3 {
    filter: blur(1px);
    fill: ${({ theme }) => theme.colors.basic};
    stroke: ${({ theme }) => theme.colors.basic};
  }

  #circleSvgBlur1 {
    opacity: 70%;
  }
  #circleSvgBlur2 {
    opacity: 50%;
  }
  #circleSvgBlur3 {
    opacity: 20%;
  }

  @keyframes revealLine {
    to {
      stroke-dashoffset: 0;
    }
  }

  @keyframes reveal {
    to {
      opacity: 1;
    }
  }

  @media (min-width: 600px) {
    display: flex;
  }
`;
