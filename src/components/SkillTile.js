import { StyledSkillTile } from './styles/SkillTile.styled';
import 'aos/dist/aos.css';

function SkillTile(props) {
  const skillsArray = props.skills.split(', ').map((skill) => {
    return (
      <li className="skillItem" key={skill}>
        {skill}
      </li>
    );
  });

  return (
    <StyledSkillTile data-aos-offset="0" data-aos="TileUp" id="TileUp">
      <img
        src={`${process.env.PUBLIC_URL}/images/${props.img}`}
        alt={`${props.title} Icon`}
        width="auto"
        height="auto"
      ></img>
      <h2>{props.title}</h2>
      <ul className="skillsList">{skillsArray}</ul>
    </StyledSkillTile>
  );
}
export default SkillTile;
