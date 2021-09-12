import React from "react";
//https://raw.githubusercontent.com/Yug34/SeeVee/main/Yug_CV.pdf

import allbotImg from "../images/discord.png";
import covidImg from "../images/coronavirus.png";
import seamlessImg from "../images/volume.png";
import portfolioGenImg from "../images/portfolioGen.png";

import Project from "./Project";
import { Carousel } from "react-responsive-carousel";

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

  const covidDesc = [
    "Made a DNN off ResNet50v2 to classify X-rays of human lungs into normal, pneumonia and covid cases.",
    "~94.5% accuracy on the validation set",
    "... and ~96.6 on the test set!",
    "Oh and only 0.78% false negatives.",
    "And hey, this project also won our team the IBM innovation camp 2021.",
  ];

  const seamlessDesc = ["Soon ^-^"];

  return (
    <div className="tiltContainer">
      <Carousel
        showArrows={true}
        statusFormatter={() => {}}
        axis="vertical"
        showIndicators={false}
        autoPlay={2}
        infiniteLoop={true}
        swipeable={true}
        emulateTouch={true}
      >
        <div className="projectSlide">
          <Project
            name="AllBOT"
            keywords={["All", "BOT"]}
            Img={allbotImg}
            description={allBotDesc}
            link="https://github.com/Yug34/allBOT"
          />
          <Project
            name="CoviDetect"
            keywords={["COV", "Detect"]}
            Img={covidImg}
            description={covidDesc}
            link="https://github.com/Yug34/cov-detect"
          />
          <Project
            name="Seamless"
            keywords={["Music", "Player"]}
            Img={seamlessImg}
            description={seamlessDesc}
            link="https://github.com/Yug34/allBOT"
          />
        </div>
        <div className="projectSlide">
          <Project
            name="Portfoliogen"
            Img={portfolioGenImg}
            description={allBotDesc}
            link="https://github.com/Yug34/allBOT"
          />
          <Project
            name="AllBOT"
            Img={allbotImg}
            description={allBotDesc}
            link="https://github.com/Yug34/allBOT"
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Projects;
