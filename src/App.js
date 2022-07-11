import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/styles/Global';
import './App.css';
import Header from './components/Header';
import { theme } from './components/styles/theme';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Aos from 'aos';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <Header />
      <About />

      <Projects />

      <Skills />
      <Contact />
    </ThemeProvider>
  );
}

export default App;
