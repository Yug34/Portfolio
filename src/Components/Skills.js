import React from "react";

import Skill from "./Skill";

//TODO: React card flip for the disclaimer, upon flip the disclaimer should be hidden and the skills would show
//TODO: A makeshoft card flip logic to "carousel" through the cards but by flipping? Would be a nice fun challenge!

function Skills(props) {
  // If you are reading this code and wondering why the hell I kept the following static strings/JSX in an array instead of in the render/return function
  // Eh I just like short render functions.
  const disclaimerItems = [
    "Anyone could rate themselves arbitrarily and the assessing person would have no idea what the ratings mean.",
    <u>
      So, what exactly do I mean when I list these skills and give a rating to
      myself?
    </u>,
    "If I list the language here, I know it's syntax. The rating isn't about syntactic knowledge of the languages.",
    <i className="greentext">
      Rather, it is about how much of the development frameworks, paradigms and
      practices I know in that language's ecosystem.
    </i>,
    "But of course, my confidence in myself while working with these technologies plays a part too :)",
  ];

  const disclaimerRendered = disclaimerItems.map((item) => (
    <p key={typeof item == "object" ? item.props.children : item}>{item}</p>
  ));

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
      <div id="disclaimer">{disclaimerRendered}</div>
      {skillRendered}
    </div>
  );
}

export default Skills;