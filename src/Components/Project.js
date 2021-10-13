import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import ReactCardFlip from "react-card-flip";

//TODO, fix the buttons that show up when you flip a project
//TODO, set display to none; if the parent class is nullbox for unflip and the other button

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
            glareEnable={true}
            glareMaxOpacity={0.5}
            glareColor="#ffffff"
            glarePosition="bottom"
          >
            <h2 className="name">{props.name}</h2>
            <a
              href={props.link}
              className="buy"
              onClick={(e) => {
                handleClick(e);
              }}
              style={
                props.isMobile
                  ? {
                      border: "2px solid white",
                      display: `${isFlipped ? "none" : "inline-block"}`,
                    }
                  : {
                      border: "1px solid white",
                      display: `${isFlipped ? "none" : "inline-block"}`,
                    }
              }
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
            glareEnable={true}
            glareMaxOpacity={0.5}
            glareColor="#ffffff"
            glarePosition="bottom"
          >
            <ul className={props.isMobile ? "listResponsive" : "list"}>
              {projectDescription}
            </ul>
            <p
              className="buy"
              onClick={(e) => {
                handleClick(e);
              }}
              style={
                props.isMobile
                  ? {
                      border: "2px solid white",
                      display: `${isFlipped ? "inline-block" : "none"}`,
                    }
                  : {
                      border: "1px solid white",
                      display: `${isFlipped ? "inline-block" : "none"}`,
                    }
              }
            >
              Unflip
            </p>
            {props.link ? (
              <a
                href={props.link}
                target="_blank"
                rel="noopener noreferrer"
                className="buy"
                style={
                  props.isMobile
                    ? {
                        border: "2px solid white",
                        display: `${isFlipped ? "inline-block" : "none"}`,
                      }
                    : {
                        border: "1px solid white",
                        display: `${isFlipped ? "inline-block" : "none"}`,
                      }
                }
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
