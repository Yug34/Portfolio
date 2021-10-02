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

  const skillRendered = skillList.map((skill) => (
    <Skill title={skill.title} symbol={skill.symbol} scale={skill.scale} />
  ));

  return <div className="Skills">{skillRendered}</div>;
}

export default Skills;
