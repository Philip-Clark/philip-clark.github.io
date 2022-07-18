import { StyledHeader } from './styles/Header.styled';
import { theme } from './styles/theme';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
function Header() {
  const h1String = '<h1></h1>';
  const h2String = '<h2></h2>';
  const pString = '<p></p>';
  const line = useRef(null);
  const name = useRef(null);
  const title = useRef(null);

  useEffect(() => {
    // Some initial styling for the animation.
    gsap.from(name.current, { opacity: 0 });
    gsap.from(title.current, { opacity: 0 });
    gsap.from(line.current, { scaleX: 0.1, scaleY: 0, transformOrigin: '50% 50%' });
    gsap.to(name.current, { opacity: 0 });
    gsap.to(title.current, { opacity: 0 });
    gsap.to(line.current, { scaleX: 0.1, scaleY: 0, transformOrigin: '50% 50%' });

    var tl = gsap.timeline({ delay: 0.3 });
    tl.to(line.current, {
      scaleY: 1,
      duration: 0.3,
      delay: 0.1,
      transformOrigin: '50% 50%',
    });
    tl.to(line.current, {
      scaleX: 1,
      scaleY: 1,
      duration: 0.3,
      delay: 0.2,
      transformOrigin: '50% 50%',
    });
    tl.to(name.current, { opacity: 1, duration: 0 });
    tl.to(title.current, { opacity: 1, duration: 0 });
    tl.to(line.current, {
      scaleX: 1,
      scaleY: 0,
      duration: 0.3,
      delay: 0.2,
      transformOrigin: '50% 63%',
    });
    // tl.play();
  }, []);

  return (
    <StyledHeader id="header" className="snap">
      <svg
        id="nameAndTitle"
        width="398"
        height="83"
        viewBox="0 0 398 83"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Philip Clark</title>
        <g id="Frame 1">
          <path
            alt="Philip Clark"
            id="Name"
            d="M36.2188 32.4219H27.7344V26.0703H36.2188C37.375 26.0703 38.3125 25.875 39.0312 25.4844C39.75 25.0938 40.2734 24.5547 40.6016 23.8672C40.9453 23.1641 41.1172 22.375 41.1172 21.5C41.1172 20.5625 40.9453 19.6953 40.6016 18.8984C40.2734 18.1016 39.75 17.4609 39.0312 16.9766C38.3125 16.4766 37.375 16.2266 36.2188 16.2266H30.8281V44H22.6016V9.875H36.2188C38.9531 9.875 41.3047 10.375 43.2734 11.375C45.2578 12.375 46.7812 13.75 47.8438 15.5C48.9062 17.2344 49.4375 19.2188 49.4375 21.4531C49.4375 23.6562 48.9062 25.5781 47.8438 27.2188C46.7812 28.8594 45.2578 30.1406 43.2734 31.0625C41.3047 31.9688 38.9531 32.4219 36.2188 32.4219ZM80.2194 23.4219V29.75H62.7116V23.4219H80.2194ZM65.4538 9.875V44H57.2272V9.875H65.4538ZM85.7506 9.875V44H77.5475V9.875H85.7506ZM103.079 9.875V44H94.8763V9.875H103.079ZM134.775 37.6719V44H117.525V37.6719H134.775ZM120.455 9.875V44H112.228V9.875H120.455ZM150.346 9.875V44H142.143V9.875H150.346ZM173.113 32.4219H164.628V26.0703H173.113C174.269 26.0703 175.206 25.875 175.925 25.4844C176.644 25.0938 177.167 24.5547 177.495 23.8672C177.839 23.1641 178.011 22.375 178.011 21.5C178.011 20.5625 177.839 19.6953 177.495 18.8984C177.167 18.1016 176.644 17.4609 175.925 16.9766C175.206 16.4766 174.269 16.2266 173.113 16.2266H167.722V44H159.495V9.875H173.113C175.847 9.875 178.198 10.375 180.167 11.375C182.152 12.375 183.675 13.75 184.738 15.5C185.8 17.2344 186.331 19.2188 186.331 21.4531C186.331 23.6562 185.8 25.5781 184.738 27.2188C183.675 28.8594 182.152 30.1406 180.167 31.0625C178.198 31.9688 175.847 32.4219 173.113 32.4219ZM228.84 32.4453H237.043C236.934 34.8203 236.293 36.9141 235.122 38.7266C233.95 40.5391 232.325 41.9531 230.247 42.9688C228.184 43.9688 225.747 44.4688 222.934 44.4688C220.653 44.4688 218.614 44.0859 216.817 43.3203C215.036 42.5547 213.52 41.4531 212.27 40.0156C211.036 38.5781 210.09 36.8359 209.434 34.7891C208.793 32.7422 208.473 30.4375 208.473 27.875V26.0234C208.473 23.4609 208.809 21.1562 209.481 19.1094C210.168 17.0469 211.137 15.2969 212.387 13.8594C213.653 12.4062 215.168 11.2969 216.934 10.5312C218.7 9.76562 220.661 9.38281 222.817 9.38281C225.786 9.38281 228.293 9.91406 230.34 10.9766C232.387 12.0391 233.973 13.5 235.098 15.3594C236.223 17.2031 236.887 19.3047 237.09 21.6641H228.887C228.856 20.3828 228.637 19.3125 228.231 18.4531C227.825 17.5781 227.184 16.9219 226.309 16.4844C225.434 16.0469 224.27 15.8281 222.817 15.8281C221.801 15.8281 220.918 16.0156 220.168 16.3906C219.418 16.7656 218.793 17.3594 218.293 18.1719C217.793 18.9844 217.418 20.0391 217.168 21.3359C216.934 22.6172 216.817 24.1641 216.817 25.9766V27.875C216.817 29.6875 216.926 31.2344 217.145 32.5156C217.364 33.7969 217.715 34.8438 218.2 35.6562C218.684 36.4688 219.309 37.0703 220.075 37.4609C220.856 37.8359 221.809 38.0234 222.934 38.0234C224.184 38.0234 225.239 37.8281 226.098 37.4375C226.958 37.0312 227.622 36.4219 228.09 35.6094C228.559 34.7812 228.809 33.7266 228.84 32.4453ZM266.841 37.6719V44H249.591V37.6719H266.841ZM252.521 9.875V44H244.294V9.875H252.521ZM288.599 17.0469L280.279 44H271.443L283.982 9.875H289.584L288.599 17.0469ZM295.49 44L287.146 17.0469L286.068 9.875H291.74L304.349 44H295.49ZM295.162 31.2734V37.625H277.654V31.2734H295.162ZM310.217 9.875H323.647C326.272 9.875 328.553 10.2656 330.491 11.0469C332.428 11.8281 333.92 12.9844 334.967 14.5156C336.03 16.0469 336.561 17.9375 336.561 20.1875C336.561 22.1406 336.256 23.7734 335.647 25.0859C335.038 26.3984 334.186 27.4844 333.092 28.3438C332.014 29.1875 330.756 29.8828 329.319 30.4297L326.623 31.9531H315.35L315.303 25.6016H323.647C324.694 25.6016 325.561 25.4141 326.248 25.0391C326.936 24.6641 327.452 24.1328 327.795 23.4453C328.155 22.7422 328.334 21.9062 328.334 20.9375C328.334 19.9531 328.155 19.1094 327.795 18.4062C327.436 17.7031 326.905 17.1641 326.202 16.7891C325.514 16.4141 324.663 16.2266 323.647 16.2266H318.444V44H310.217V9.875ZM328.897 44L321.35 28.9062L330.069 28.8594L337.709 43.6484V44H328.897ZM353.116 9.875V44H344.89V9.875H353.116ZM373.483 9.875L360.265 27.1719L352.53 35.6328L351.03 28.0859L355.976 20.5859L363.335 9.875H373.483ZM363.757 44L354.944 28.625L361.343 23.9141L373.483 44H363.757Z"
            fill="#E3A01D"
            ref={title}
          />
          <path
            alt="Web Developer"
            id="Title"
            d="M40.4102 70.2402L43.4961 59.7812H44.4629L43.6816 62.8867L40.3906 74H39.4629L40.4102 70.2402ZM36.8262 59.7812L39.4238 70.1426L40.2051 74H39.2383L35.5957 59.7812H36.8262ZM48.623 70.1426L51.1816 59.7812H52.4121L48.7793 74H47.8125L48.623 70.1426ZM44.5703 59.7812L47.6172 70.2402L48.5547 74H47.627L44.4043 62.8867L43.6133 59.7812H44.5703ZM77.5742 72.9746V74H69.5762V72.9746H77.5742ZM69.9375 59.7812V74H68.7363V59.7812H69.9375ZM76.5781 66.1582V67.1836H69.5762V66.1582H76.5781ZM77.5254 59.7812V60.8164H69.5762V59.7812H77.5254ZM99.0156 67.1641H95.0117L94.9922 66.1484H98.4395C99.1426 66.1484 99.7415 66.0475 100.236 65.8457C100.731 65.6439 101.105 65.3444 101.359 64.9473C101.62 64.5436 101.75 64.0488 101.75 63.4629C101.75 62.8639 101.623 62.3691 101.369 61.9785C101.115 61.5814 100.734 61.2884 100.227 61.0996C99.7188 60.9108 99.0807 60.8164 98.3125 60.8164H95.3242V74H94.123V59.7812H98.3125C99.0352 59.7812 99.6829 59.8529 100.256 59.9961C100.829 60.1393 101.317 60.3639 101.721 60.6699C102.124 60.9759 102.43 61.3633 102.639 61.832C102.854 62.2943 102.961 62.8477 102.961 63.4922C102.961 64.0781 102.831 64.6087 102.57 65.084C102.31 65.5527 101.942 65.9368 101.467 66.2363C100.998 66.5293 100.435 66.7116 99.7773 66.7832L99.0156 67.1641ZM98.9277 74H94.6309L95.2461 72.9746H98.9277C99.6309 72.9746 100.23 72.8574 100.725 72.623C101.226 72.3822 101.61 72.0404 101.877 71.5977C102.144 71.1549 102.277 70.6276 102.277 70.0156C102.277 69.4753 102.16 68.9902 101.926 68.5605C101.691 68.1309 101.333 67.7923 100.852 67.5449C100.37 67.291 99.7578 67.1641 99.0156 67.1641H96.5254L96.5449 66.1484H100.07L100.285 66.5098C100.923 66.5749 101.48 66.7734 101.955 67.1055C102.437 67.431 102.808 67.8444 103.068 68.3457C103.335 68.847 103.469 69.3971 103.469 69.9961C103.469 70.8555 103.277 71.5846 102.893 72.1836C102.515 72.776 101.984 73.2285 101.301 73.541C100.624 73.847 99.8327 74 98.9277 74ZM143.158 74H139.936L139.955 72.9746H143.158C144.18 72.9746 145.059 72.7467 145.795 72.291C146.537 71.8288 147.11 71.1908 147.514 70.377C147.917 69.5632 148.119 68.6191 148.119 67.5449V66.2168C148.119 65.3965 148.002 64.6543 147.768 63.9902C147.54 63.3262 147.211 62.7598 146.781 62.291C146.352 61.8158 145.837 61.4512 145.238 61.1973C144.646 60.9434 143.982 60.8164 143.246 60.8164H139.877V59.7812H143.246C144.132 59.7812 144.942 59.9342 145.678 60.2402C146.42 60.5397 147.061 60.9759 147.602 61.5488C148.148 62.1152 148.568 62.7956 148.861 63.5898C149.161 64.3841 149.311 65.2695 149.311 66.2461V67.5449C149.311 68.5215 149.161 69.4069 148.861 70.2012C148.568 70.9954 148.148 71.6758 147.602 72.2422C147.055 72.8086 146.407 73.2448 145.658 73.5508C144.91 73.8503 144.076 74 143.158 74ZM140.473 59.7812V74H139.271V59.7812H140.473ZM175.215 72.9746V74H167.217V72.9746H175.215ZM167.578 59.7812V74H166.377V59.7812H167.578ZM174.219 66.1582V67.1836H167.217V66.1582H174.219ZM175.166 59.7812V60.8164H167.217V59.7812H175.166ZM196.207 72.2324L200.689 59.7812H201.998L196.705 74H195.738L196.207 72.2324ZM191.578 59.7812L196.041 72.2324L196.529 74H195.553L190.27 59.7812H191.578ZM226.945 72.9746V74H218.947V72.9746H226.945ZM219.309 59.7812V74H218.107V59.7812H219.309ZM225.949 66.1582V67.1836H218.947V66.1582H225.949ZM226.896 59.7812V60.8164H218.947V59.7812H226.896ZM251.717 72.9746V74H244.344V72.9746H251.717ZM244.695 59.7812V74H243.494V59.7812H244.695ZM277.895 66.1289V67.6523C277.895 68.6484 277.764 69.5501 277.504 70.3574C277.25 71.1582 276.879 71.8451 276.391 72.418C275.909 72.9909 275.329 73.4303 274.652 73.7363C273.975 74.0423 273.214 74.1953 272.367 74.1953C271.54 74.1953 270.785 74.0423 270.102 73.7363C269.424 73.4303 268.842 72.9909 268.354 72.418C267.865 71.8451 267.488 71.1582 267.221 70.3574C266.954 69.5501 266.82 68.6484 266.82 67.6523V66.1289C266.82 65.1328 266.951 64.2344 267.211 63.4336C267.478 62.6263 267.855 61.9362 268.344 61.3633C268.832 60.7904 269.415 60.3509 270.092 60.0449C270.769 59.7389 271.521 59.5859 272.348 59.5859C273.194 59.5859 273.956 59.7389 274.633 60.0449C275.31 60.3509 275.893 60.7904 276.381 61.3633C276.869 61.9362 277.243 62.6263 277.504 63.4336C277.764 64.2344 277.895 65.1328 277.895 66.1289ZM276.703 67.6523V66.1094C276.703 65.2695 276.605 64.5143 276.41 63.8438C276.221 63.1732 275.938 62.6003 275.561 62.125C275.189 61.6497 274.734 61.2852 274.193 61.0312C273.653 60.7773 273.038 60.6504 272.348 60.6504C271.677 60.6504 271.075 60.7773 270.541 61.0312C270.007 61.2852 269.551 61.6497 269.174 62.125C268.803 62.6003 268.516 63.1732 268.314 63.8438C268.119 64.5143 268.021 65.2695 268.021 66.1094V67.6523C268.021 68.4987 268.119 69.2604 268.314 69.9375C268.516 70.6081 268.806 71.1842 269.184 71.666C269.561 72.1413 270.017 72.5059 270.551 72.7598C271.091 73.0137 271.697 73.1406 272.367 73.1406C273.064 73.1406 273.679 73.0137 274.213 72.7598C274.747 72.5059 275.199 72.1413 275.57 71.666C275.941 71.1842 276.221 70.6081 276.41 69.9375C276.605 69.2604 276.703 68.4987 276.703 67.6523ZM299.766 68.209H295.713V67.1836H299.766C300.612 67.1836 301.299 67.0469 301.826 66.7734C302.36 66.4935 302.747 66.1159 302.988 65.6406C303.236 65.1654 303.359 64.6315 303.359 64.0391C303.359 63.4596 303.236 62.9258 302.988 62.4375C302.747 61.9492 302.36 61.5586 301.826 61.2656C301.299 60.9661 300.612 60.8164 299.766 60.8164H296.133V74H294.932V59.7812H299.766C300.807 59.7812 301.683 59.9603 302.393 60.3184C303.109 60.6764 303.649 61.1745 304.014 61.8125C304.378 62.4505 304.561 63.1862 304.561 64.0195C304.561 64.8919 304.378 65.6439 304.014 66.2754C303.649 66.9004 303.112 67.3789 302.402 67.7109C301.693 68.043 300.814 68.209 299.766 68.209ZM330.094 72.9746V74H322.096V72.9746H330.094ZM322.457 59.7812V74H321.256V59.7812H322.457ZM329.098 66.1582V67.1836H322.096V66.1582H329.098ZM330.045 59.7812V60.8164H322.096V59.7812H330.045ZM346.613 59.7812H351.232C352.215 59.7812 353.068 59.9408 353.791 60.2598C354.514 60.5788 355.07 61.0508 355.461 61.6758C355.858 62.2943 356.057 63.056 356.057 63.9609C356.057 64.6315 355.913 65.2402 355.627 65.7871C355.347 66.334 354.96 66.793 354.465 67.1641C353.97 67.5286 353.397 67.7793 352.746 67.916L352.326 68.0723H347.395L347.375 67.0469H351.506C352.248 67.0469 352.867 66.9036 353.361 66.6172C353.856 66.3307 354.227 65.9531 354.475 65.4844C354.729 65.0091 354.855 64.5013 354.855 63.9609C354.855 63.3164 354.715 62.7598 354.436 62.291C354.162 61.8158 353.755 61.4512 353.215 61.1973C352.674 60.9434 352.014 60.8164 351.232 60.8164H347.814V74H346.613V59.7812ZM355.393 74L351.711 67.6426L353 67.6328L356.672 73.873V74H355.393Z"
            fill="#DBF8FF"
            ref={name}
          />
          <rect ref={line} id="Line" width="398" height="83" fill="#FF2E4C" />
        </g>
      </svg>

      <div id="designRules" className="fadesIn">
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
      <h3 id="decorative" className="fadesIn">
        HEADER
      </h3>
      <a href="#About" className="fadesIn">
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
