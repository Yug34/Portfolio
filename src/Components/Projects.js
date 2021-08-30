import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import ReactCardFlip from "react-card-flip";

import discordImg from "../images/discord.png";

function Projects() {
  let [isFlipped, setIsFlipped] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="tiltContainer" style={{ height: "100vh", width: "100vw" }}>
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
              Discord bot written in <i>Node.js</i>
            </li>
            <li>Stream music from YouTube</li>
            <li>Currency system and a shop</li>
            <li>Snarky.</li>
            <li>Kanye quotes if you need them</li>
            <li>Aren't you sold already?</li>
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
  );
}

export default Projects;
