import React from "react";

import Project from "./Project";
import { Carousel } from "react-responsive-carousel";

//TODO: Investigate if the userDetails would work if you do src={require("./pathToImage")}

function Projects(props) {
  const projectList = props.projectList;

  const projectGroups = [];
  for (let i = 0; i < projectList.length; i += 3) {
    const group = [];
    group.push(projectList[i]);
    if (i + 1 < projectList.length) {
      group.push(projectList[i + 1]);
      if (i + 2 < projectList.length) {
        group.push(projectList[i + 2]);
      }
    }
    projectGroups.push(group);
  }

  const projectSlides = projectGroups.map((group) => (
    <div className="projectSlide">
      {group.map((project) => (
        <Project
          key={project.name}
          name={project.name}
          keywords={project.keywords}
          Img={project.image}
          description={project.description}
          link={project.link ? project.link : null}
        />
      ))}
    </div>
  ));

  return (
    <div className="tiltContainer">
      <Carousel
        showArrows={true}
        showThumbs={false}
        statusFormatter={() => {}}
        axis="vertical"
        showIndicators={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={4000}
        stopOnHover={true}
        // swipeable={true}
        // emulateTouch={true}
      >
        {projectSlides}
      </Carousel>
    </div>
  );
}

export default Projects;
