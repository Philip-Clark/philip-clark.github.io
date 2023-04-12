import { StyledAbout } from './styles/About.styled';
function About() {
  return (
    <StyledAbout id="About" className="snap">
      <div id="aboveCircle">
        <div className="mask">
          <h1 data-aos="in">Hello</h1>
        </div>
        <figure id="circle" data-aos="circle" />

        <div className="mask">
          <h2 data-aos="in" id="name">
            my name is Philip
          </h2>
        </div>
        <p data-aos="inDelayed">
          I am a junior full-stack developer. I live out in the country about an hour south of
          Louisville Kentucky. It was here that my brother taught me Python and my love for
          programming began. Now six years of programming later, I have an associate's in computer
          programming and I am pursuing a career in full-stack development. Even though I have
          always meddled in web development, only in the last two years has it been my focus. Before
          that, I developed mobile and pc games with my other brother (I have an awesome family!).
          Since turning my focus to web development, I have developed a love for the entire web
          stack, frontend, and backend, and love to create beautiful and functional websites and web
          apps.
        </p>
      </div>
    </StyledAbout>
  );
}
export default About;
