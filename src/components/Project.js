import { StyledProject } from './styles/Project.styled';

function Project(props) {
  return (
    <StyledProject>
      <img src={`./resources/images/${props.img}`}></img>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
        <p>{props.paragraph}</p>
        <a id="button">View Project</a>
    </StyledProject>
  );
}
export default Project;
