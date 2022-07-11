import { StyledSkillTile } from './styles/SkillTile.styled';
import 'aos/dist/aos.css';

function SkillTile(props) {
  return (
    <StyledSkillTile data-aos="TileUp" id="TileUp">
      <img
        src={`${process.env.PUBLIC_URL}/images/${props.img}`}
        alt={`${props.title} Icon`}
        width="auto"
        height="auto"
      ></img>
      <h1>{props.title}</h1>
      {/* <h3>{props.subtitle}</h3> */}
      <p>{props.skills}</p>
    </StyledSkillTile>
  );
}
export default SkillTile;
