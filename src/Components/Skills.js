import React, { useState } from "react";

import Skill from "./Skill";
import ReactCardFlip from "react-card-flip";

//TODO: React card flip for the disclaimer, upon flip the disclaimer should be hidden and the skills would show
//TODO: A makeshift card flip logic to "carousel" through the cards but by flipping? Would be a nice fun challenge!

function Skills(props) {
  let [isFlipped, setIsFlipped] = useState(false);

  const flip = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

  const skillRendered = props.skills.map((skill) => (
    <Skill
      isMobile={props.isMobile}
      title={skill.title.toString().replace(/\+/gm, "_")}
      symbol={skill.symbol}
      scale={skill.scale}
      description={skill.description}
      key={skill.title}
    />
  ));

  return (
    <div className="skills">
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div>
          <div id="disclaimer">
            <p>
              Anyone could rate themselves arbitrarily and the assessing person
              would have no idea what the ratings mean.
            </p>
            <u>
              So, what exactly do I mean when I list these skills and give a
              rating to myself?
            </u>
            <p>
              If I list the language here, I know it's syntax. The rating isn't
              about syntactic knowledge of the languages.
            </p>
            <i className="greentext">
              Rather, it is about how much of the development frameworks,
              paradigms and practices I know in that language's ecosystem.
            </i>
            <p>
              But of course, my confidence in myself while working with these
              technologies plays a part too :)
            </p>
          </div>
          <a
            href={"#disclaimer"}
            className="flipButton"
            onClick={(e) => {
              flip(e);
            }}
            style={
              props.isMobile
                ? {
                    border: "2px solid white",
                    display: `${isFlipped ? "none" : "inline-block"}`,
                    margin: "auto",
                    width: "fit-content",
                  }
                : {
                    border: "1px solid white",
                    display: `${isFlipped ? "none" : "inline-block"}`,
                    margin: "auto",
                    width: "fit-content",
                  }
            }
          >
            Okidoki, Flip!
          </a>
        </div>
        <div>{skillRendered}</div>
      </ReactCardFlip>
    </div>
  );
}

export default Skills;
