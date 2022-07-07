import { StyledSkills } from './styles/Skills.styled';
import SkillTile from './SkillTile';

function Skills() {
  return (
    <StyledSkills>
      <img id="decorativeText" src={`${process.env.PUBLIC_URL}/images/Fullstack.svg`} />
      <div id="skillsList">
        <SkillTile
          title="Front End Development"
          subtitle="The visible parts of a project, Front end is my favorite"
          skills="Html, CSS, Tailwind.css, React.js, PHP, JavaScript"
          img="FrontEnd.AVIF"
        />
        <SkillTile
          title="Back End Development"
          subtitle="The hidden parts of a project, back end is like magic"
          skills="Node.js, PHP, MySql, Python, Sql, JavaScript"
          img="BackEnd.AVIF"
        />
        <SkillTile
          title="Other Areas of Skill"
          subtitle="These are some of the other areas I have skill in"
          skills="Github, Figma, VS Code, CLI, APIs"
          img="OtherSkills.AVIF"
        />
      </div>

      <div id="aboveCircle">
        <section id="softSkills">
          <h2>
            <figure id="circle" />
            Soft Skills
          </h2>
          <p>
            I am a junior full-stack developer. I live out in the country about an hour south of
            Louisville Kentucky. It was here that my brother taught me python and my love for
            programming began. Now six years of programming later, I have an associate's in computer
            programming and I am pursuing a career in full-stack development. Even though I have
            always meddled in web development, only in the last two years has it been my focus.
            Before that, I developed mobile and pc games with my other brother (I have an awesome
            family!). Since turning my focus to web development, I have developed a love for the
            entire web stack, frontend, and backend, and love to create beautiful and functional
            websites and web apps.
          </p>
        </section>
      </div>
    </StyledSkills>
  );
}
export default Skills;
