import { StyledProjectTile } from './styles/ProjectTile.styled';
import 'aos/dist/aos.css';
import ImageLoader from './ImageLoader';

function ProjectTile(props) {
  return (
    <StyledProjectTile>
      <div id="aboveCircle">
        <ImageLoader
          placeholderSrc={`${process.env.PUBLIC_URL}/images/small_${props.img}`}
          src={`${process.env.PUBLIC_URL}/images/${props.img}`}
          alt="A project made by Philip Clark"
        ></ImageLoader>
        <div id="text">
          <h1 data-aos="fade-up" data-aos-delay="200">
            {props.title}
          </h1>
          <figure id="circle" data-aos="circle" data-aos-delay="200" />
          <h2 data-aos="fade-up" data-aos-delay="200">
            {props.subtitle}
          </h2>
          <p data-aos="fade-up" data-aos-delay="200">
            {props.paragraph}
          </p>
          <div className="buttonRow">
            {props.link != null && (
              <a
                target="_blank"
                rel="noreferrer"
                href={props.link}
                id="button"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <img src={`${process.env.PUBLIC_URL}/images/github.svg`} alt="Icon" />
                <p>Code</p>
              </a>
            )}

            {props.liveLink != null && (
              <a
                target="_blank"
                rel="noreferrer"
                href={props.liveLink}
                id="button"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <img src={`${process.env.PUBLIC_URL}/images/live.svg`} alt="Icon" />

                <p>Live</p>
              </a>
            )}
          </div>
        </div>
      </div>
    </StyledProjectTile>
  );
}
export default ProjectTile;
