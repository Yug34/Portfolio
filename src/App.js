import "./App.css";
import React, { useState, useEffect } from "react";
import WAVES from "vanta/dist/vanta.waves.min";
import Typed from "typed.js";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import TiltContainer from "./Components/TiltContainer";
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

  return (
    <div className="App">
      <div className="App-header" ref={vantaRef}>
        <Carousel
          showArrows={true}
          statusFormatter={() => {}}
          useKeyboardArrows={true}
        >
          <TypedName />

          <TiltContainer />
        </Carousel>
      </div>
    </div>
  );
}

export default App;
