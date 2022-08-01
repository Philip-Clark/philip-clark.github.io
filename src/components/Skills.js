import { StyledSkills } from './styles/Skills.styled';
import SkillTile from './SkillTile';
import 'aos/dist/aos.css';

function Skills() {
  return (
    <StyledSkills id="Skills" className="snap">
      <img id="decorativeText" alt="" src={`${process.env.PUBLIC_URL}/images/Fullstack.svg`} />
      <div id="aboveCircle">
        <section id="softSkills">
          <div className="mask">
            <h1 data-aos="in">Soft Skills</h1>
          </div>
          <figure id="circle" data-aos="circle" />

          <p data-aos="inDelayed">
            I have excellent communication with professional formatting, concise wording and timely
            responses. Following instructions and respecting authority are ingrained in my
            character. I can lead a group and explain abstract and difficult concepts in an
            understandable way. Being a team player is one of my highly valued traits, and I strive
            to help others when I can. I love to learn and constantly look for better ways to do my
            work, but I understand that some things need to stay consistent. I love teaching others
            new things and helping people understand technologies.
            <a
              id="button"
              href="https://stackoverflow.com/users/17977603/philip-clark"
              rel="noreferrer"
              target="_blank"
            >
              (See me in action helping others)
            </a>
          </p>
          <div className="mask">
            <h1 data-aos="in" id="hardSkills">
              Technical Skills
            </h1>
          </div>
        </section>
      </div>

      <div id="skillsList">
        <SkillTile
          title={
            <span>
              Front end
              <br></br>
              Development
            </span>
          }
          subtitle="The visible parts of a project, Front end is my favorite"
          skills="Html, CSS, Tailwind.css, React.js, PHP, JavaScript"
          img="FrontEnd.AVIF"
        />
        <SkillTile
          title={
            <span>
              Back End
              <br></br>
              Development
            </span>
          }
          subtitle="The hidden parts of a project, back end is like magic"
          skills="Node.js, PHP, MySql, Python, Sql, JavaScript"
          img="BackEnd.AVIF"
        />
        <SkillTile
          title={
            <span>
              Tools for<br></br>
              Development
            </span>
          }
          subtitle="These are some of the other areas I have skill in"
          skills="Github, Figma, VS Code, Windows Terminal, StackOverflow"
          img="OtherSkills.AVIF"
        />
      </div>
    </StyledSkills>
  );
}
export default Skills;
