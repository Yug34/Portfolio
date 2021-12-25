import React, { useEffect } from "react";
import { generateUniqueID } from "web-vitals/dist/modules/lib/generateUniqueID";
const ProgressBar = require("progressbar.js");

type SkillProps = {
  isMobile: boolean,
  title: string,
  symbol: string[],
  scale: number,
  description: string[],
  key: string
}

function Skill(props: SkillProps): JSX.Element {
  //Hacky, sorry! I'm lazy.
  const displayString: string = props.title.replace(/1/gm, " ").replace(/_/gm, "+");
  const idString: string = props.title.replace(/ /gm, "1").replace(/\+/gm, "_");

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
      step: (state: {offset: number, color: string}, bar: any) => {
        bar.path.setAttribute("stroke", state.color);
      },
    });

    bar.animate(props.scale);
  }, [props.scale, props.title, idString]);

  const skillDescriptionRendered: JSX.Element[] | JSX.Element = props.description.map((descItem: string ) => (
    <p
      key={descItem}
      dangerouslySetInnerHTML={{ __html: descItem }}
    />
  ));

  const skillSymbols: JSX.Element[] | JSX.Element = props.symbol.map((image) => (
    <img
      className="skillSymbol"
      src={image}
      alt={displayString}
      key={generateUniqueID()}
      style={
        props.isMobile
          ? { width: "32px", height: "32px" }
          : { width: "64px", height: "64px" }
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