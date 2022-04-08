import React from "react"

//styling
import "./HomeBG.css"

//Assets
// import c from "../../img/icons/c.png"
import csharp from "../../img/icons/csharp.png"
// import cpp from "../../img/icons/c++.png"
import css from "../../img/icons/css3.png"
import cypress from "../../img/icons/cypress.png"
import express from "../../img/icons/express.png"
import figma from "../../img/icons/figma.png"
import git from "../../img/icons/Github.png"
import heroku from "../../img/icons/heroku.png"
import html from "../../img/icons/html5.png"
import java from "../../img/icons/java.png"
import js from "../../img/icons/javascript-logo.svg"
import jest from "../../img/icons/jest.png"
// import mongo from "../../img/icons/mongo.png"
// import mongodb from "../../img/icons/mongodb.png"
import mysql from "../../img/icons/mySQL.png"
import netlify from "../../img/icons/netlify.png"
import nextjs from "../../img/icons/nextjs.png"
import nodeJS from "../../img/icons/nodeJS.png"
import npm from "../../img/icons/npm.png"
import postgresql from "../../img/icons/postgresql.png"
import react from "../../img/icons/ReactIcon.png"
// import sass from "../../img/icons/sass.png"
import slack from "../../img/icons/slack.png"
import soc from "../../img/icons/SOC.png"
import typescript from "../../img/icons/typescript.png"
import uon from "../../img/icons/UON.png"
import vstudio from "../../img/icons/visualstudio.png"
import vscode from "../../img/icons/vscode.png"

function HomeBG() {
  return (
    <>
      <div className="square">
        <div>
          <img className="responsive" src={css} alt=""></img>
        </div>
        <div>
          <img className="responsive" src={git} alt=""></img>
        </div>
        <div>
          <img className="responsive" src={express} alt=""></img>
        </div>
        <div>
          <img className="responsive" src={figma} alt=""></img>
        </div>
        <div>
          <img className="responsive" src={nodeJS} alt=""></img>
        </div>
        <div>
          <img className="responsive" src={html} alt=""></img>
        </div>
        <div>
          <img className="responsive" src={js} alt=""></img>
        </div>
        <div>
          <img className="responsive" src={soc} alt=""></img>
        </div>
        <div>
          <img className="responsive" src={vscode} alt=""></img>
        </div>
        <div>
          <img className="responsive" src={mysql} alt=""></img>
        </div>
        <div>
          <img className="responsive" src={npm} alt=""></img>
        </div>
        <div>
          <img className="responsive" src={csharp} alt=""></img>
        </div>
      </div>
      <div className="square square1">
        <div>
          <img className="responsive" src={heroku} alt=""></img>
        </div>
        <div>
          <img className="responsive" src={jest} alt=""></img>
        </div>
        <div>
          <img className="responsive" src={postgresql} alt=""></img>
        </div>
        <div>
          <img className="responsive" src={netlify} alt=""></img>
        </div>
        <div>
          <img className="responsive" src={nextjs} alt=""></img>
        </div>
        <div>
          <img className="responsive" src={slack} alt=""></img>
        </div>
        <div>
          <img className="responsive" src={react} alt=""></img>
        </div>
        <div>
          <img className="responsive" src={uon} alt=""></img>
        </div>
        <div>
          <img className="responsive" src={vstudio} alt=""></img>
        </div>
        <div>
          <img className="responsive" src={java} alt=""></img>
        </div>
        <div>
          <img className="responsive" src={cypress} alt=""></img>
        </div>
        <div>
          <img className="responsive" src={typescript} alt=""></img>
        </div>
      </div>
    </>
  )
}

export default HomeBG
