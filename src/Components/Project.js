import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import ReactCardFlip from "react-card-flip";

function Project(props) {
  let [isFlipped, setIsFlipped] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

  const projectDescription = props.description.map((text) => (
    <li key={text}>{text}</li>
  ));

  return (
    <div className="projectCard">
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div>
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
              id="MoreInfo"
              href={props.link}
              className="buy"
              onClick={(e) => {
                handleClick(e);
              }}
            >
              More about {props.name}
            </a>
            <div className="circle" />
            <img
              src={props.Img}
              style={{ width: `${100 * props.imageScale}%` }}
              className="product"
              alt="project_image"
            />
          </Tilt>
        </div>
        <div>
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
              id="Unflip"
              className="buy"
              onClick={(e) => {
                handleClick(e);
              }}
            >
              Unflip
            </p>
            {props.link ? (
              <a
                id="Source"
                href={props.link}
                target="_blank"
                rel="noopener noreferrer"
                className="sell"
              >
                View Source
              </a>
            ) : null}
          </Tilt>
        </div>
      </ReactCardFlip>
    </div>
  );
}

export default Project;
