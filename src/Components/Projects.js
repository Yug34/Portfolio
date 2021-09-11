import React from "react";

import discordImg from "../images/discord.png";

import Project from "./Project";
import {Carousel} from "react-responsive-carousel";

function Projects() {
  const allBotDesc = [
    "Discord bot written in Node.js",
    "Stream music from YouTube",
    "Currency system with Mongoose",
    "..and a shop too!",
    "Snarky.",
    "Kanye quotes in case you need them",
    "Aren't you sold already?",
  ];

  return (
    <div className="tiltContainer" style={{ height: "100vh", width: "100vw" }}>
      <Carousel
        showArrows={true}
        statusFormatter={() => {}}
        axis="vertical"
      >
        <div>
          <Project
            name="AllBOT"
            Img={discordImg}
            description={allBotDesc}
            link="https://github.com/Yug34/allBOT"
          />
          <Project
            name="AllBOT"
            Img={discordImg}
            description={allBotDesc}
            link="https://github.com/Yug34/allBOT"
          />
        </div>
        <div>
          <Project
            name="AllBOT"
            Img={discordImg}
            description={allBotDesc}
            link="https://github.com/Yug34/allBOT"
          />
          <Project
            name="AllBOT"
            Img={discordImg}
            description={allBotDesc}
            link="https://github.com/Yug34/allBOT"
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Projects;
