import { StyledSkillTile } from './styles/SkillTile.styled';

function SkillTile(props) {
  return (
    <StyledSkillTile>
      <img
        src={`${process.env.PUBLIC_URL}/images/${props.img}`}
        alt={`${props.title} Icon`}
        width="300px"
        height="auto"
      ></img>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
      <p>{props.skills}</p>
    </StyledSkillTile>
  );
}
export default SkillTile;
