import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

/* width */
::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #000000;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: 1000px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: ${({ theme }) => theme.colors.third};
}

::-webkit-scrollbar-thumb:active {
  background: ${({ theme }) => theme.colors.primary};
}


*{
  scroll-behavior: smooth;
  transition: color 1s ease-in-out;
  font-family: 'Roboto', sans-serif;
  transition: background-color 1s ease-in-out;
}
img, figure{
  -webkit-user-drag: none;

}

*::selection{
  background-color: ${({ theme }) => theme.colors.third};
  color:${({ theme }) => theme.colors.secondary}
}


#root, body{
  overflow-x: hidden;
}

#root, body{
  animation: restrictScroll 3s linear forwards 0s;
}

#svgWrapper{
  position: absolute;
  top: 28rem;
  margin-left:4vw;
  svg{
    width: 96vw;
  }
}

h1{
  font-size:2rem;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.primary};
  letter-spacing:0.22rem;
}
h2{
  font-size:${({ theme }) => theme.fonts.h2.size};
  font-weight: ${({ theme }) => theme.fonts.h2.weight};
  color: ${({ theme }) => theme.colors.primary};
}
p{
  font-size: ${({ theme }) => theme.fonts.p.size};
  font-weight: ${({ theme }) => theme.fonts.p.weight};
  line-height: 150%;
  letter-spacing: 0.1rem;
  color: ${({ theme }) => theme.colors.basic};
  
}

@keyframes restrictScroll {
  0%{
    height: 100vh;
  overflow-y: hidden;
  }
  99%{
    height: 100vh;
  overflow-y: hidden;
  }
  100%{
    height: auto;
    overflow-y: visible;
  }
}


`;

export default GlobalStyles;
