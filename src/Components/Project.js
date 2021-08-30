import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import ReactCardFlip from "react-card-flip";

function Project(props) {
  let [isFlipped, setIsFlipped] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

  const projectDescription = props.description.map((text) => <li>{text}</li>);

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <Tilt
        className={isFlipped ? "nullbox" : "box"}
        id="box1"
        glareEnable={true}
        glareMaxOpacity={0.5}
        glareColor="#ffffff"
        glarePosition="bottom"
      >
        <h2 className="name">{props.name}</h2>
        <a
          id="allbotMoreInfo"
          href={props.link}
          className="buy"
          onClick={(e) => {
            handleClick(e);
          }}
        >
          More Info
        </a>
        <div className="circle" />
        <img src={props.Img} className="product" alt="project_image" />
      </Tilt>
      <Tilt
        className={isFlipped ? "box" : "nullbox"}
        id="box2"
        glareEnable={true}
        glareMaxOpacity={0.5}
        glareColor="#ffffff"
        glarePosition="bottom"
      >
        <ul className="list">{projectDescription}</ul>
        <p
          id="allbotUnflip"
          className="buy"
          onClick={(e) => {
            handleClick(e);
          }}
        >
          Unflip
        </p>
        <a id="allbotSource" href={props.link} className="sell">
          View Source
        </a>
      </Tilt>
    </ReactCardFlip>
  );
}

export default Project;
