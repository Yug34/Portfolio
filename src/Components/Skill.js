import React, { useEffect } from "react";
const ProgressBar = require("progressbar.js");

function Skill(props) {
  useEffect(() => {
    let bar = new ProgressBar.Line(`#${props.title}`, {
      strokeWidth: 1,
      easing: "easeInOut",
      duration: 1400,
      trailColor: "#9a9a9a",
      trailWidth: 0.2,
      svgStyle: {
        width: "50%",
        height: "4px",
        "border-radius": "2px",
        "margin-top": "20px",
        display: "inline-block",
      },
      from: { color: "#000" },
      to: { color: "#fff" },
      step: (state, bar) => {
        bar.path.setAttribute("stroke", state.color);
      },
    });

    bar.animate(props.scale);
  }, [props.scale, props.title]);

  return (
    <div className="skill">
      <div>
        <img className="skillSymbol" src={props.symbol} alt={props.title} />
        <p className="skillName">{props.title}</p>
      </div>
      <div className="skillLevelBar" id={props.title} />
    </div>
  );
}

export default Skill;
