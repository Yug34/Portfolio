import React, { useEffect } from "react";
import { generateUniqueID } from "web-vitals/dist/modules/lib/generateUniqueID";
const ProgressBar = require("progressbar.js");

function Skill(props) {
  //Hacky, sorry! I'm lazy.
  const displayString = props.title.replace(/1/gm, " ").replace(/_/gm, "+");
  const idString = props.title.replace(/ /gm, "1").replace(/\+/gm, "_");

  useEffect(() => {
    let bar = new ProgressBar.Line(`#${idString}`, {
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
  }, [props.scale, props.title, idString]);

  const skillDescriptionRendered = props.description.map((descItem) => (
    <p
      key={typeof descItem == "object" ? descItem.props.children : descItem}
      dangerouslySetInnerHTML={{ __html: descItem }}
    />
  ));

  const skillSymbols = props.symbol.map((image) => (
    <img
      className="skillSymbol"
      src={image}
      alt={displayString}
      key={generateUniqueID()}
      style={
        props.isMobile ? { width: "32px", height: "auto" } : { width: "64px" }
      }
    />
  ));

  return (
    <div className="skill">
      <div>
        {skillSymbols}
        <p className="skillName">{displayString}</p>
        <div className="skillDescription">{skillDescriptionRendered}</div>
      </div>
      <div className="skillLevelBar" id={idString} />
    </div>
  );
}

export default Skill;
