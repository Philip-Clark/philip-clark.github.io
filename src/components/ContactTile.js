import { StyledContactTile } from './styles/ContactTile.styled';

function ContactTile(props) {
  return (
    <StyledContactTile>
      <img src={`${process.env.PUBLIC_URL}/images/${props.img}`} alt="Icon" />
      <h2>{props.h2}</h2>
      <p>{props.para}</p>
      <a href={props.link}>Visit</a>
    </StyledContactTile>
  );
}
export default ContactTile;
