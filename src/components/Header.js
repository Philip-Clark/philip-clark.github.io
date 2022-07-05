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
      <h3 id="decorative">HEADER</h3>
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
            <p>{theme.colors.basic}</p>
          </div>
        </div>
        <h1>{h1String}</h1>
        <h2>{h2String}</h2>
        <p>{pString}</p>
      </div>
      <a href="#About">
        <img id="scroll" src="/resources/images/scrollIcon.jpg"></img>
      </a>
    </StyledHeader>
  );
}
export default Header;
