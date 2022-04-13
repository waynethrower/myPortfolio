import React from "react"
import GithubCorner from "react-github-corner"

//styling
import "./ProjectCard.css"

//assets
import netlify from "../../img/icons/netlify.png"

function ProjectCard2({
  projectImg,
  projectHeading,
  projectName,
  projectLink,
  codeLink,
}) {
  return (
    <div className="col__3">
      <article className="material__card">
        <div className="github__corner__link__container">
          {codeLink !== "" ? (
            <GithubCorner
              href={codeLink}
              target="_new"
              size={80}
              bannerColor="#1f4b7a"
              octoColor="#000000"
              ariaLabel="Open GitHub Project"
            />
          ) : (
            <></>
          )}
        </div>
        <h2>
          <span className="header__span">{projectHeading}</span>
          <strong>
            {projectName}
            {projectLink !== "" ? (
              <a href={projectLink} alt="" className="a__link">
                <img src={netlify} alt="" className="img__link"></img>
              </a>
            ) : (
              <></>
            )}
          </strong>
        </h2>

        <div className="mc__content">
          <div className="img__container">
            <img className="img__responsive" src={projectImg} alt=""></img>
          </div>
          {/* <div className="prj__btn__container">
            {projectLink !== "" ? (
              <a href={projectLink} target="_new" className="project__btn">
                <button className="prj__btn">View Project</button>
              </a>
            ) : (
              <></>
            )}
          </div> */}
        </div>
      </article>
    </div>
  )
}

export default ProjectCard2
