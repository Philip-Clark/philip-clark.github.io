import { StyledProjects } from './styles/Projects.styled';
import ProjectTile from './ProjectTile';

function Projects(props) {
  return (
    <StyledProjects>
      <div className="Project">
        <ProjectTile
          img="project1.AVIF"
          title="Elliot’s Coffee"
          subtitle="I made a Coffee E-store for College, and got an A+!"
          paragraph="I designed and built a functional coffee e-store as my PHP term project. The design is inspired by retro advertisements, mixed with some west coast colors. I developed both the front end and back end of this site. The order page utilizes JavaScript to update the cart and display the number of items in the cart. The edit menu page allows an admin to change any items on the menu, but more importantly, it allows them to add new items to the menu. The site relies on a MySql database that holds the information for menu items and encrypted admin credentials. In total this project took twelve weeks to complete, that includes creating the initial concept, wire framing, designing, programing, database setup and three weeks of debugging and refining."
        />
      </div>
      <div className="Project">
        <ProjectTile
          img="project2.AVIF"
          title="Personal Project"
          subtitle="I replaced my old portfolio, but not because it was bad!"
          paragraph="I designed and built this site as part of a college course. It is a basic HTML, CSS, and Javascript web resume that proficiently highlighted my skills and characteristics. The site included Javascript for scroll based animations and a few one shot animations. The entire site is fully responsive and very accessible. Despite how nice the site was, It needed to be better, so I replaced it with the site you are currently using."
        />
      </div>
    </StyledProjects>
  );
}
export default Projects;
