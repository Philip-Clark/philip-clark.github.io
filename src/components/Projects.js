import { StyledProjects } from './styles/Projects.styled';
import ProjectTile from './ProjectTile';
import 'aos/dist/aos.css';

function Projects() {
  return (
    <StyledProjects id="Projects" className="snap">
      <div className="Project snap" data-aos="fade-in" data-aos-delay="100" data-aos-offset="0">
        <ProjectTile
          img="project1.png"
          title="Elliot’s Coffee"
          subtitle="I made a Coffee E-store for College, and got an A+!"
          paragraph="I designed and built a functional coffee e-store as my PHP term project. The design is inspired by retro advertisements, mixed with some west coast colors. I developed both the front end and back end of this site. The order page utilizes JavaScript to update the cart and display the number of items in the cart. The edit menu page allows an admin to change any items on the menu, but more importantly, it allows them to add new items to the menu. The site relies on a MySql database that holds the information for menu items and encrypted admin credentials."
          link="https://github.com/Philip-Clark/Elliots_Coffee_Shop"
        />
      </div>
      <div className="Project snap" data-aos="fade-in" data-aos-offset="0">
        <ProjectTile
          img="project2.png"
          title="Airbnb Clone"
          subtitle="I cloned the Airbnb site for practice"
          paragraph="This project is a response to the Final JavaScript project in The Odin Project open source bootcamp. I decided to go all in and make something I can be proud of. It's current state is decent, but I plan to continue refining it in the future. I would like to add the user login section, a mock reservation system and a few other features."
          link="https://github.com/Philip-Clark/airbnb-clone"
          liveLink="https://philip-clark.github.io/airbnb-clone/#/"
        />
      </div>

      <div className="Project snap" data-aos="fade-in" data-aos-offset="0">
        <ProjectTile
          img="project3.png"
          title="Trip Planning App"
          subtitle="I built a mobile app to help people plan trips!"
          paragraph="This is an android native project that helps people plan trips and manage their schedule while they are on the trip. The design is intentionally simple so users can understand what is planned for the day. The app is built using React Native and has a wide range of features including importing CSV's, displaying HTML event data, custom link previews, and a live time tracker to keep the trip on schedule."
          link="https://github.com/Philip-Clark/trip-planner"
        />
      </div>
    </StyledProjects>
  );
}
export default Projects;
