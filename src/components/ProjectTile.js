import { StyledProjectTile } from './styles/ProjectTile.styled';

function ProjectTile(props) {
  return (
    <StyledProjectTile>
      <div id="aboveCircle">
        <img
          src={`${process.env.PUBLIC_URL}/images/${props.img}`}
          alt="Image showing a project made by Philip Clark"
          width="300px"
          height="auto"
        ></img>
        <div id="text">
          <h1>
            {props.title}
            <figure id="circle" />
          </h1>
          <h2>{props.subtitle}</h2>
          <p>{props.paragraph}</p>
          <a id="button">View Project</a>
        </div>
      </div>
    </StyledProjectTile>
  );
}
export default ProjectTile;
