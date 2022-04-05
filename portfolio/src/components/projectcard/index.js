import React from "react"

//styling
import "./ProjectCard.css"

function ProjectCard({
  projectImg,
  projectHeading,
  projectName,
  projectLink,
  codeLink,
}) {
  return (
    <>
      <div className="col__3">
        <div className="project__box pointer relative">
          <div className="project__box__img pointer relative">
            <div className="project__img__box">
              <img src={projectImg} alt="" className="project__img" />
            </div>
            <div className="mask__effect"></div>
          </div>
          <div className="project__meta absolute">
            <h1 className="project__text">{projectHeading} </h1>
            <h2 className="project__text">{projectName}</h2>
            <a href={projectLink} target="_new" className="project__btn">
              View Project
            </a>
            <a href={codeLink} target="_new" className="project__btn">
              Github
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectCard
