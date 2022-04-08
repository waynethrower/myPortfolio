import React from "react"

//styling
import "./HomeBG.css"

//Assets
import css from "../../img/icons/css3.png"
import express from "../../img/icons/express.png"
import figma from "../../img/icons/figma.png"
import git from "../../img/icons/Github.png"
import heroku from "../../img/icons/heroku.png"
import html from "../../img/icons/html5.png"
import java from "../../img/icons/java.png"
import js from "../../img/icons/javascript-logo.svg"
import jest from "../../img/icons/jest.png"
// import mongodb from "../../img/icons/mongodb.png"
import mysql from "../../img/icons/mySQL.png"
import netlify from "../../img/icons/netlify.png"
import nextjs from "../../img/icons/nextjs.png"
import nodeJS from "../../img/icons/nodeJS.png"
import postgresql from "../../img/icons/postgresql.png"
import react from "../../img/icons/ReactIcon.png"
// import sass from "../../img/icons/sass.png"
import slack from "../../img/icons/slack.png"
import soc from "../../img/icons/SOC.png"
// import typescript from "../../img/icons/typescript.png"
import uon from "../../img/icons/UON.png"
import vstudio from "../../img/icons/visualstudio.png"
import vscode from "../../img/icons/vscode.png"

function HomeBG() {
  return (
    <>
      <div className="square">
        <div>
          <img src={css} alt="" height="100px" width="100px"></img>
        </div>
        <div>
          <img src={git} alt="" height="100px" width="100px"></img>
        </div>
        <div>
          <img src={express} alt="" height="100px" width="100px"></img>
        </div>
        <div>
          <img src={figma} alt="" height="100px" width="100px"></img>
        </div>
        <div>
          <img src={nodeJS} alt="" height="100px" width="100px"></img>
        </div>
        <div>
          <img src={html} alt="" height="100px" width="100px"></img>
        </div>
        <div>
          <img src={js} alt="" height="100px" width="100px"></img>
        </div>
        <div>
          <img src={soc} alt="" height="100px" width="100px"></img>
        </div>
        <div>
          <img src={vscode} alt="" height="100px" width="100px"></img>
        </div>
        <div>
          <img src={mysql} alt="" height="100px" width="100px"></img>
        </div>
      </div>
      <div className="square square1">
        <div>
          <img src={heroku} alt="" height="100px" width="100px"></img>
        </div>
        <div>
          <img src={jest} alt="" height="100px" width="100px"></img>
        </div>
        <div>
          <img src={postgresql} alt="" height="100px" width="100px"></img>
        </div>
        <div>
          <img src={netlify} alt="" height="100px" width="100px"></img>
        </div>
        <div>
          <img src={nextjs} alt="" height="100px" width="100px"></img>
        </div>
        <div>
          <img src={slack} alt="" height="100px" width="100px"></img>
        </div>
        <div>
          <img src={react} alt="" height="100px" width="100px"></img>
        </div>
        <div>
          <img src={uon} alt="" height="100px" width="100px"></img>
        </div>
        <div>
          <img src={vstudio} alt="" height="100px" width="100px"></img>
        </div>
        <div>
          <img src={java} alt="" height="100px" width="100px"></img>
        </div>
      </div>
    </>
  )
}

export default HomeBG
