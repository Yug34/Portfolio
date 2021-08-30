import "./App.css";
import React, { useState, useEffect } from "react";
import WAVES from "vanta/dist/vanta.waves.min";
import Typed from "typed.js";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Tilt from "react-parallax-tilt";

import ReactCardFlip from "react-card-flip";

import discordImg from "./images/discord.png";

function App() {
  let [vantaRef] = useState(React.createRef());
  let [isFlipped, setIsFlipped] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

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
          <div id="nameTitle">
            <div id="name">
              <b>Yug</b>
            </div>
            <div id="title" />
          </div>

          <div
            className="tiltContainer"
            style={{ height: "100vh", width: "100vw" }}
          >
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
              <Tilt
                className={isFlipped ? "nullbox" : "box"}
                id="box1"
                glareEnable={true}
                glareMaxOpacity={0.5}
                glareColor="#ffffff"
                glarePosition="bottom"
              >
                <h2 className="name">AllBOT</h2>
                <a
                  id="allbotMoreInfo"
                  href="https://github.com/Yug34/allbot"
                  className="buy"
                  onClick={(e) => {
                    handleClick(e);
                  }}
                >
                  More Info
                </a>
                <div className="circle" />
                <img src={discordImg} className="product" alt="discordImg" />
              </Tilt>
              <Tilt
                className={isFlipped ? "box" : "nullbox"}
                id="box2"
                glareEnable={true}
                glareMaxOpacity={0.5}
                glareColor="#ffffff"
                glarePosition="bottom"
              >
                <ul className="list">
                  <li>
                    Made with <i>Node.js</i>
                  </li>
                  <li>It's nice</li>
                </ul>
                <p
                  id="allbotUnflip"
                  className="buy"
                  onClick={(e) => {
                    handleClick(e);
                  }}
                >
                  Unflip
                </p>
                <a
                  id="allbotSource"
                  href="https://github.com/Yug34/allbot"
                  className="sell"
                >
                  View Source
                </a>
              </Tilt>
            </ReactCardFlip>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default App;
