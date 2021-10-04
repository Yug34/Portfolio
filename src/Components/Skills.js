import React from "react";

import allbotImg from "../images/Projects/discord-small.png";

import Skill from "./Skill";
function Skills() {
  const skillList = [
    {
      title: "JavaScript",
      symbol: allbotImg,
      scale: 0.6,
    },
  ];

  const disclaimerItems = [
    "Anyone could rate themselves arbitrarily and the assessing person would have no idea what the ratings mean.",
    <u>
      So, what exactly do I mean when I list these skills and give a rating to
      myself?
    </u>,
    "If I list the language here, I know it's syntax. The rating isn't about syntactic knowledge of the languages.",
    "Rather, it is about how much of the development paradigms and practices I know in that language's landscape.",
  ];

  const disclaimerRendered = disclaimerItems.map((item) => (
    <p key={item}>{item}</p>
  ));

  const skillRendered = skillList.map((skill) => (
    <Skill
      title={skill.title}
      symbol={skill.symbol}
      scale={skill.scale}
      key={skill.title}
    />
  ));

  return (
    <div className="Skills">
      <div id="disclaimer">{disclaimerRendered}</div>
      {skillRendered}
    </div>
  );
}

export default Skills;
