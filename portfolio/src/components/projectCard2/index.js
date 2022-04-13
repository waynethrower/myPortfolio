import React from "react"

//styling
import "./ProjectCard.css"

function ProjectCard2({ projectImg, projectHeading, projectName }) {
  return (
    <div className="col__3">
      <article className="material__card">
        <h2>
          <span className="header__span">{projectHeading}</span>
          <strong>{projectName}</strong>
        </h2>
        <div className="mc__content">
          <div className="img__container">
            <img className="img__responsive" src={projectImg} alt=""></img>
          </div>
        </div>
      </article>
    </div>
  )
}

export default ProjectCard2
