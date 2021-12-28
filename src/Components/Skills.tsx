import React, {BaseSyntheticEvent, useContext, useState} from "react";

import Skill from "./Skill";
import ReactCardFlip from "react-card-flip";
import {IsMobileContext} from "../Contexts/IsMobile";

//TODO: A makeshift card flip logic to "carousel" through the cards but by flipping? Would be a nice fun challenge!

type SkillsProps = {
  skills: {
    title: string,
    symbol: string[],
    scale: number,
    description: string[],
    key: string
  }[]
}

function Skills(props: SkillsProps) {
  const [isFlipped, setIsFlipped]: [boolean, any] = useState(false);

  // const {isMobile, setIsMobile} = useContext(IsMobileContext);
  const isMobile = useContext(IsMobileContext);

  const flip = (e: BaseSyntheticEvent): void => {
    e.preventDefault();
    console.log(typeof setIsFlipped);
    console.log(setIsFlipped)
    setIsFlipped(!isFlipped);
  };

  const skillRendered = props.skills.map((skill) => (
    <Skill
      title={skill.title.toString().replace(/\+/gm, "_")}
      symbol={skill.symbol}
      scale={skill.scale}
      description={skill.description}
      key={skill.title}
    />
  ));

  return (
    <div className="skills">
      <div id="skillsContainer">
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
                onClick={(e: BaseSyntheticEvent) => {
                  flip(e);
                }}
                style={
                  isMobile
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
    </div>
  );
}

export default Skills;
