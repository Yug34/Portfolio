import React from "react";

import discordImg from "../images/discord.png";

import Project from "./Project";

function Projects() {
  const allBotDesc = [
    "Discord bot written in <i>Node.js</i>",
    "Stream music from YouTube",
    "Currency system and a shop",
    "Snarky.",
    "Kanye quotes in case you need them",
    "Aren't you sold already?",
  ];

  return (
    <div className="tiltContainer" style={{ height: "100vh", width: "100vw" }}>
      <Project
        name="AllBOT"
        Img={discordImg}
        description={allBotDesc}
        link="https://github.com/Yug34/allBOT"
      />
    </div>
  );
}

export default Projects;
