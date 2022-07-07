import { StyledHeader } from './styles/Header.styled';
import { theme } from './styles/theme';

function Header() {
  const h1String = '<h1></h1>';
  const h2String = '<h2></h2>';
  const pString = '<p></p>';

  return (
    <StyledHeader>
      <div id="nameAndTitle">
        <h1>PHILIP CLARK</h1>
        <p>WEB DEVELOPER</p>
      </div>
      <div id="designRules">
        <div id="colorSwatches">
          <div className="colorSwatch">
            <div id="firstSwatch" className="swatch" />
            <p>{theme.colors.primary}</p>
          </div>
          <div className="colorSwatch">
            <div id="secondSwatch" className="swatch" />
            <p>{theme.colors.secondary}</p>
          </div>
          <div className="colorSwatch">
            <div id="thirdSwatch" className="swatch" />
            <p>{theme.colors.third}</p>
          </div>
        </div>
        <h1>{h1String}</h1>
        <h2>{h2String}</h2>
        <p>{pString}</p>
      </div>
      <h3 id="decorative">HEADER</h3>
      <a href="#About">
        <img
          id="scroll"
          src={process.env.PUBLIC_URL + '/images/scrollIcon.AVIF'}
          width="30px"
          height="auto"
          alt="Scroll down Icon"
        ></img>
      </a>
    </StyledHeader>
  );
}
export default Header;
