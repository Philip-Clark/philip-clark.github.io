import { StyledProjects } from './styles/Projects.styled';
import ProjectTile from './ProjectTile';
import 'aos/dist/aos.css';

function Projects() {
  return (
    <StyledProjects id="Projects" className="snap">
      <div className="Project snap" data-aos="fade-in" data-aos-delay="100" data-aos-offset="0">
        <ProjectTile
          img="project1.png"
          title="Creekside Barbell"
          subtitle="I Built a client's dream site"
          paragraph="I took this project from a dream to completion all while keeping my client in control of the final site. The site has a simple and sleek design that reflects the energy of the gym. It serves a dual purpose of bringing in new members and also providing a members only portal that can be used to inform existing members about gym news and equipment. The development cycle was very client friendly and I met frequently with the client to update them on the progress and to allow them to provide feedback and make suggestions. This allowed us to move forward steadily and produce the site the client wanted. The end result is a website that reflects the gyms brand and that can be managed by the owner."
          liveLink="https://www.creeksidebarbell.com/"
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
