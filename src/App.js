import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/styles/Global';
import './App.css';
import Header from './components/Header';
import { theme } from './components/styles/theme';
import About from './components/About';
import Project from './components/Project';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <About />

      <Project
        img="project1.png"
        title="Elliot’s Coffee"
        subtitle="I made a Coffee E-store for College, and got an A+!"
        paragraph="I designed and built a functional coffee e-store as my PHP term project. The design is inspired by retro advertisements, mixed with some west coast colors. I developed both the front end and back end of this site. The order page utilizes JavaScript to update the cart and display the number of items in the cart. The edit menu page allows an admin to change any items on the menu, but more importantly, it allows them to add new items to the menu. The site relies on a MySql database that holds the information for menu items and encrypted admin credentials. In total this project took twelve weeks to complete, that includes creating the initial concept, wire framing, designing, programing, database setup and three weeks of debugging and refining."
      />

      <Project
        img="project2.png"
        title="Personal Project"
        subtitle="I replaced my old portfolio, but not because it was bad!"
        paragraph="I designed and built this site as part of a college course. It is a basic HTML, CSS, and Javascript web resume that proficiently highlighted my skills and characteristics. The site included Javascript for scroll based animations and a few one shot animations. The entire site is fully responsive and very accessible."
      />
    </ThemeProvider>
  );
}

export default App;
