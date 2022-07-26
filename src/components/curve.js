import useResizeObserver from '@react-hook/resize-observer';
import MotionPathPlugin from 'gsap/MotionPathPlugin';
import { StyledCurve } from './styles/Curve.styled';
import React, { useRef, useState } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';

function Curve() {
  const curveLength = 2500000;
  const [curve, setCurve] = useState('');
  const path = useRef(null);
  let tempCurve = '';

  function moveCircle() {
    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
    setInitials();
    assignCircleToLine();
  }
  function setInitials() {
    gsap.set('#circleSvg', { xPercent: -50, yPercent: -50 });
    gsap.set('#circleSvgBlur1', { xPercent: -50, yPercent: -50 });
    gsap.set('#circleSvgBlur2', { xPercent: -50, yPercent: -50 });
    gsap.set('#circleSvgBlur3', { xPercent: -50, yPercent: -50 });
  }

  function assignCircleToLine() {
    gsap
      .timeline({
        defaults: { duration: 1, ease: 'none' },
        scrollTrigger: {
          trigger: '#curve',
          scrub: 2,
          start: 'top center',
          end: 'bottom +=85%',
          invalidateOnRefresh: true,
        },
      })
      .to(
        '#circleSvg',
        { motionPath: { path: '#curve', align: '#curve', offsetX: 0, offsetY: 0 } },
        0
      );

    gsap
      .timeline({
        defaults: { duration: 1, ease: 'none' },
        scrollTrigger: {
          trigger: '#curve',
          scrub: 2.1,
          start: 'top center',
          end: 'bottom +=85%',
          invalidateOnRefresh: true,
        },
      })
      .to(
        '#circleSvgBlur1',
        { motionPath: { path: '#curve', align: '#curve', offsetX: 0, offsetY: 0 } },
        0
      );
    gsap
      .timeline({
        defaults: { duration: 1, ease: 'none' },
        scrollTrigger: {
          trigger: '#curve',
          scrub: 2.2,
          start: 'top center',
          end: 'bottom +=85%',
          invalidateOnRefresh: true,
        },
      })
      .to(
        '#circleSvgBlur2',
        { motionPath: { path: '#curve', align: '#curve', offsetX: 0, offsetY: 0 } },
        0
      );
    gsap
      .timeline({
        defaults: { duration: 1, ease: 'none' },
        scrollTrigger: {
          trigger: '#curve',
          scrub: 2.3,
          start: 'top center',
          end: 'bottom +=85%',
          invalidateOnRefresh: true,
        },
      })
      .to(
        '#circleSvgBlur3',
        { motionPath: { path: '#curve', align: '#curve', offsetX: 0, offsetY: 0 } },
        0
      );
  }

  function drawLine() {
    //
    // Get elements
    // & set constants
    //
    const yOffset = 6;
    const linePadding = 100;
    const about = document.getElementById('About');
    const header = document.getElementById('header');
    const skills = document.getElementById('Skills');
    const contact = document.getElementById('Contact');
    const projects = document.getElementById('Projects');
    const idArray = [about, projects, skills, contact];

    const curveScale = header.offsetWidth / 15;

    // first bit of the curve
    tempCurve = `M ${header.offsetLeft + linePadding} ${header.offsetTop + 600} l ${0} ${
      header.offsetHeight - 600 - curveScale
    } q ${0} ${curveScale} ${curveScale} ${curveScale}`;

    // Draw the line through every given section
    idArray.forEach((element, index) => {
      if (index !== idArray.length - 1) {
        //
        // LEFT SIDED
        //
        if (index % 2 !== 0) {
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
        if (index % 2 !== 0) {
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
  }

  // Update the curve when the body changes size
  useResizeObserver(document.body, () => {
    drawLine();
    console.log('re-drew line due to change in size of body');
  });

  // Declaration for the useTimeout function
  const useTimeout = (callback, delay) => {
    const savedCallback = React.useRef();

    React.useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    React.useEffect(() => {
      const tick = () => {
        savedCallback.current();
      };
      if (delay != null) {
        let id = setTimeout(tick, delay);
        return () => clearTimeout(id);
      }
    }, [delay]);
  };

  // Slightly delayed rendering of the curve.
  useTimeout(() => {
    drawLine();
  }, 100);
  // delay the binding scrolling to moveCircle.
  useTimeout(() => {
    window.addEventListener(window.scroll, moveCircle());
  }, 1020);

  //
  //
  // RETURN
  //
  //
  return (
    <StyledCurve>
      <svg id="DecorativeCurve">
        <path
          d={curve}
          id="curve"
          ref={path}
          fill="none"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeDashoffset={`${curveLength}`}
          strokeDasharray={`${curveLength} ${curveLength}`}
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
