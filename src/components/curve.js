import gsap from 'gsap';
import React, { useRef, useState } from 'react';
import { StyledCurve } from './styles/Curve.styled';
import ScrollTrigger from 'gsap/ScrollTrigger';
import MotionPathPlugin from 'gsap/MotionPathPlugin';

function Curve() {
  const [curve, setCurve] = useState('');
  let tempCurve = '';
  const path = useRef(null);
  const [curveLength, setCurveLength] = useState(10000000);
  const [pathHeight, setPathHeight] = useState(0);

  function moveCircle() {
    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
    gsap.set('#circleSvg', { xPercent: -50, yPercent: -50 });
    gsap.set('#circleSvgBlur1', { xPercent: -50, yPercent: -50 });
    gsap.set('#circleSvgBlur2', { xPercent: -50, yPercent: -50 });
    gsap.set('#circleSvgBlur3', { xPercent: -50, yPercent: -50 });

    var dir;

    var action = gsap
      .timeline({
        defaults: { duration: 1, ease: 'none' },
        scrollTrigger: {
          trigger: '#curve',
          scrub: 2,
          start: 'top center',
          end: 'bottom +=85%',
        },
      })
      .to(
        '#circleSvg',
        { motionPath: { path: '#curve', align: '#curve', offsetX: 0, offsetY: 0 } },
        0
      );

    var action2 = gsap
      .timeline({
        defaults: { duration: 1, ease: 'none' },
        scrollTrigger: {
          trigger: '#curve',
          scrub: 2.1,
          start: 'top center',
          end: 'bottom +=85%',
        },
      })
      .to(
        '#circleSvgBlur1',
        { motionPath: { path: '#curve', align: '#curve', offsetX: 0, offsetY: 0 } },
        0
      );
    var action3 = gsap
      .timeline({
        defaults: { duration: 1, ease: 'none' },
        scrollTrigger: {
          trigger: '#curve',
          scrub: 2.2,
          start: 'top center',
          end: 'bottom +=85%',
        },
      })
      .to(
        '#circleSvgBlur2',
        { motionPath: { path: '#curve', align: '#curve', offsetX: 0, offsetY: 0 } },
        0
      );
    var action4 = gsap
      .timeline({
        defaults: { duration: 1, ease: 'none' },
        scrollTrigger: {
          trigger: '#curve',
          scrub: 2.3,
          start: 'top center',
          end: 'bottom +=85%',
        },
      })
      .to(
        '#circleSvgBlur3',
        { motionPath: { path: '#curve', align: '#curve', offsetX: 0, offsetY: 0 } },
        0
      );
  }

  function drawLine() {
    const header = document.getElementById('header');
    const about = document.getElementById('About');
    const projects = document.getElementById('Projects');
    const skills = document.getElementById('Skills');
    const contact = document.getElementById('Contact');

    const idArray = [about, projects, skills, contact];
    const curveScale = header.offsetWidth / 15;
    const linePadding = 100;
    const yOffset = 6;

    tempCurve += `M ${header.offsetLeft + linePadding} ${header.offsetTop + 600} l ${0} ${
      header.offsetHeight - 600 - curveScale
    } q ${0} ${curveScale} ${curveScale} ${curveScale}`;

    // Draw the line through every given section
    idArray.forEach((element, index) => {
      if (index != idArray.length - 1) {
        //
        // LEFT SIDED
        //
        if (index % 2 != 0) {
          tempCurve += `l ${
            -element.offsetWidth + linePadding + linePadding + curveScale * 2
          } ${0} q ${-curveScale} ${0} ${-curveScale} ${curveScale}l ${0} ${
            element.offsetHeight - curveScale - curveScale - yOffset
          }q ${0} ${curveScale} ${curveScale} ${curveScale}`;
        }
        //
        // RIGHT SIDED
        //
        else {
          tempCurve += `l ${
            +element.offsetWidth - linePadding * 2 - curveScale * 2
          } ${0} q ${curveScale} ${0} ${curveScale} ${curveScale}l ${0} ${
            element.offsetHeight - curveScale - curveScale - yOffset
          }q ${0} ${curveScale} ${-curveScale} ${curveScale}`;
        }
      } else {
        //
        // LEFT SIDED
        //
        if (index % 2 != 0) {
          tempCurve += `l ${
            -element.offsetWidth + linePadding + linePadding + curveScale * 2
          } ${0} q ${-curveScale} ${0} ${-curveScale} ${curveScale}l ${0} ${
            element.offsetHeight * 0.66 - curveScale - curveScale - yOffset
          }`;
        }
        //
        // RIGHT SIDED
        //
        else {
          tempCurve += `l ${
            +element.offsetWidth - linePadding * 2 - curveScale * 2
          } ${0} q ${curveScale} ${0} ${curveScale} ${curveScale}l ${0} ${
            element.offsetHeight * 0.66 - curveScale - curveScale - yOffset
          }`;
        }
      }
    });

    setCurve(tempCurve);
    console.log(curve);
  }

  const useTimeout = (callback, delay) => {
    const savedCallback = React.useRef();

    React.useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    React.useEffect(() => {
      const tick = () => {
        savedCallback.current();
      };
      if (delay !== null) {
        let id = setTimeout(tick, delay);
        return () => clearTimeout(id);
      }
    }, [delay]);
  };

  useTimeout(() => {
    drawLine();
  }, 1000);

  useTimeout(() => {
    setCurveLength(path.current.getTotalLength());
    console.log(path.current.getTotalLength());
    setPathHeight(document.getElementById('curve').clientHeight);
    window.addEventListener(window.scroll, moveCircle());
  }, 1020);

  return (
    <StyledCurve>
      <svg id="DecorativeCurve">
        <path
          ref={path}
          d={curve}
          id="curve"
          fill="none"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeDasharray={`${curveLength} ${curveLength}`}
          strokeDashoffset={`${curveLength}`}
        />

        <circle cx={110} cy={600} r={10} id="circleSvg" strokeWidth="0" />

        <circle cx={110} cy={600} r={8} id="circleSvgBlur1" strokeWidth="0" />
        <circle cx={110} cy={600} r={8} id="circleSvgBlur2" strokeWidth="0" />
        <circle cx={110} cy={600} r={8} id="circleSvgBlur3" strokeWidth="0" />
      </svg>
    </StyledCurve>
  );
}
export default Curve;
