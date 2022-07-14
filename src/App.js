import Aos from 'aos';
import React, { useEffect } from 'react';
import createScrollSnap from 'scroll-snap';
import { ThemeProvider } from 'styled-components';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Curve from './components/curve';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';
import GlobalStyles from './components/styles/Global';
import { theme } from './components/styles/theme';

function App() {
  const element = document.getElementById('root');

  const { bind, unbind } = createScrollSnap(
    element,
    {
      snapDestinationX: '0%',
      snapDestinationY: '90%',
      timeout: 100,
      duration: 300,
      threshold: 0.5,
      snapStop: false,
    },
    () => console.log('element snapped')
  );

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
      <Curve />
    </ThemeProvider>
  );
}

export default App;
