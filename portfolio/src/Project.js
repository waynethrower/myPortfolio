import React from "react"

//style
import "./Project.css"

//assets
import Project1 from "./img/xmasPrj.jpg"
import Project2 from "./img/4weekProject.png"
import Project3 from "./img/cs.jpg"

//components
import ProjectCard from "./components/projectcard"

function Project() {
  return (
    <div className="project component__space" id="Portfolio">
      <div className="container">
        <div className="project__heading">
          <h1 className="project__heading">My Projects</h1>
          <p className="heading p__color">
            These are a few projects I have worked on
          </p>
        </div>
        <div className="row">
          <ProjectCard
            projectImg={Project1}
            projectHeading={"Xmas Week Project"}
            projectName={"Who Want's to be a Millionaire"}
            projectLink={"/#"}
            codeLink={"/#"}
          />
          <ProjectCard
            projectImg={Project2}
            projectHeading={"4 Week Project"}
            projectName={"FoodStory"}
            projectLink={"https://food-story.netlify.app/"}
            codeLink={"/#"}
          />
          <ProjectCard
            projectImg={Project3}
            projectHeading={" "}
            projectName={" "}
            projectLink={"/#"}
            codeLink={"/#"}
          />
        </div>
      </div>
    </div>
  )
}

export default Project
