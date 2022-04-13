import React from "react"

//style
import "./Project.css"

//assets
import Project1 from "./img/mill.jpg"
import Project2 from "./img/4weekProject.png"
import Project3 from "./img/cs.jpg"

//components
import ProjectCard2 from "./components/projectCard2"

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
          <ProjectCard2
            projectImg={Project1}
            projectHeading={"Xmas Week Project"}
            projectName={"Who Want's to be a Millionaire"}
            // projectLink={"/#"}
            // codeLink={"/#"}
          />
          <ProjectCard2
            projectImg={Project2}
            projectHeading={"4 Week Project"}
            projectName={"FoodStory"}
            // projectLink={"https://food-story.netlify.app/"}
            // codeLink={"/#"}
          />
          <ProjectCard2
            projectImg={Project3}
            projectHeading={"Project"}
            projectName={"Coming Soon"}
          />
        </div>
      </div>
    </div>
  )
}

export default Project
