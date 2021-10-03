import "./Styles/App.css";
import "./Styles/Arrow.css";
import "./Styles/Scrollbar.css";
import "./Styles/ContactPage.css";
import "./Styles/SeeVee.css";
import "./Styles/Projects.css";
import "./Styles/Skills.css";

import React, { useState, useEffect } from "react";
import WAVES from "vanta/dist/vanta.waves.min";
import Typed from "typed.js";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import TypedName from "./Components/TypedName";
import SeeVee from "./Components/SeeVee";
import ContactMe from "./Components/ContactMe";

function App() {
  const [vantaRef] = useState(React.createRef());

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    let typed = new Typed("#title", {
      strings: [
        "Software Engineer",
        "Student Researcher",
        "Machine Learning guy",
        "<i class='greentext'>Future colleague of yours maybe?</i>",
        "Open sourcerer",
      ],
      typeSpeed: 50,
      backSpeed: 35,
      backDelay: 1000,
      smartBackspace: true,
      // fadeOut: true,
      // fadeOutClass: "typed-fade-out"
      loop: true,
      loopCount: Infinity,
      cursorChar: "|",
    });

    let mql = window.matchMedia("all and (max-width: 767px)");
    if (mql.matches) {
      document.getElementById("prevArrow").style.display = "none";
      document.getElementById("nextArrow").style.display = "none";
    }
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
      scale: 3.0,
      waveHeight: 11.5,
      waveSpeed: 0.7,
      scaleMobile: 1.0,
      zoom: 1.32,
      color: 0x0,
    });
  }, [vantaRef]);

  return (
    <div className="App">
      <div className="App-header" ref={vantaRef}>
        <Carousel
          showThumbs={false}
          showArrows={true}
          statusFormatter={() => {}}
          infiniteLoop={true}
          swipeScrollTolerance={20}
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <div
                id="nextArrow"
                onClick={onClickHandler}
                title={label}
                style={{ zIndex: "100" }}
              >
                <span
                  className="arrow-up"
                  style={{ transform: "rotate(90deg)" }}
                >
                  <div id="nextArrowContain">
                    <span className="left-arm" />
                    <span className="right-arm" />
                    <span className="arrow-slide" />
                  </div>
                </span>
              </div>
            )
          }
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <div
                id="prevArrow"
                onClick={onClickHandler}
                title={label}
                style={{ zIndex: "100" }}
              >
                <span
                  className="arrow-up"
                  style={{ transform: "rotate(-90deg)" }}
                >
                  <div id="prevArrowContain">
                    <span className="left-arm" />
                    <span className="right-arm" />
                    <span className="arrow-slide" />
                  </div>
                </span>
              </div>
            )
          }
        >
          <TypedName />
          <Projects />
          <Skills />
          <SeeVee />
          <ContactMe />
        </Carousel>
      </div>
    </div>
  );
}

export default App;
