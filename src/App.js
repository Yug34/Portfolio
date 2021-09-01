import "./Styles/App.css";
import "./Styles/Arrow.css";

import React, { useState, useEffect } from "react";
import WAVES from "vanta/dist/vanta.waves.min";
import Typed from "typed.js";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Projects from "./Components/Projects";
import TypedName from "./Components/TypedName";

function App() {
  let [vantaRef] = useState(React.createRef());

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    let typed = new Typed("#title", {
      strings: ["Software Engineer", "Research Assistant"],
      typeSpeed: 70,
      // backSpeed: 35,
      // backDelay: 1000,
      // smartBackspace: true,
      loop: true,
      loopCount: Infinity,
      fadeOut: true,
      cursorChar: "|",
      fadeOutClass: "typed-fade-out",
    });
  }, []);

  useEffect(() => {
    // shininess: 57.00,
    // eslint-disable-next-line no-unused-vars
    let vantaEffect = WAVES({
      el: vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 2.0,
      waveHeight: 11.5,
      waveSpeed: 0.7,
      scaleMobile: 1.0,
      zoom: 1.32,
      color: 0x0,
    });
  }, [vantaRef]);

  const arrowStyles = {
    position: 'absolute',
    zIndex: 2,
    top: 'calc(50% - 15px)',
    width: 30,
    height: 30,
    cursor: 'pointer',
  };

  return (
    <div className="App">
      <div className="App-header" ref={vantaRef}>
        <Carousel
          showArrows={true}
          statusFormatter={() => {}}
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <div id="nextArrow" onClick={onClickHandler} title={label}>
                <a className="arrow-up" style={{top: "43vh", marginLeft: "90vw", transform: "rotate(90deg)"}}>
                  <div id="nextArrowContain">
                    <span className="left-arm"/>
                    <span className="right-arm"/>
                    <span className="arrow-slide"/>
                  </div>
                </a>
              </div>
            )
          }
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <div id="prevArrow" onClick={onClickHandler} title={label}>
                <a className="arrow-up" style={{top: "43vh", marginLeft: "10vw", transform: "rotate(-90deg)"}}>
                  <div id="prevArrowContain">
                    <span className="left-arm"/>
                    <span className="right-arm"/>
                    <span className="arrow-slide"/>
                  </div>
                </a>
              </div>
            )
          }
        >
          <TypedName />
          <Projects />
        </Carousel>
      </div>
    </div>
  );
}

export default App;


// <div id="nextArrow">
//    <a class="arrow-up" style="top: 43vh; margin-left: 90vw; transform: rotate(90deg);">
//      <div id="nextArrowContain">
//        <span class="left-arm"></span>
//        <span class="right-arm"></span>
//        <span class="arrow-slide"></span>
//      </div>
//    </a>
//  </div>
//
//     <div id="prevArrow">
//       <a class="arrow-up" style="top: 43vh; margin-left: 10vw; transform: rotate(-90deg);">
//         <div id="prevArrowContain">
//           <span class="left-arm"></span>
//           <span class="right-arm"></span>
//           <span class="arrow-slide"></span>
//         </div>
//       </a>
//     </div>