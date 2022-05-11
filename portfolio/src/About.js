import React from "react"

//styles
import "./About.css"

//assets
import aboutImg from "./img/Profile.jpg"

function About() {
  //  Up To Top Btn
  window.addEventListener("scroll", function () {
    const upToTop = document.querySelector("a.bottom__to__top")
    upToTop.classList.toggle("active", window.scrollY > 0)
  })
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
                Motivated ambitious Computer Science graduate, with over 2 years
                Software Development experience, my expertise includes software
                development, testing, programming and web design. I am a strong
                team player with an emphasis on providing quality technical work
                and technically sound solutions in a timely manner with minimal
                supervision.
              </p>
              <p className="about__text p__color">
                School of Code has enabled me to learn the latest Full Stack
                technologies such as JavaScript (ES6) and React on the front end
                plus Node.js, Express.js, Rest API and PostgreSQL for the back
                end whilst refreshing AGILE methodologies on Real World
                projects.
              </p>
              <p className="about__text p__color">
                I studied Computer Science at the University of Nottingham
                acheiving a 2:1 BSc
              </p>
              <div className="about__button d__flex align__items__center">
                {/* <a href="src/document/WayneThrowerCV2022.pdf" download>
                  <button className="about btn pointer">Download CV</button>
                </a> */}
                <a href="#Contact">
                  <button className="about btn pointer">Hire Me</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="/#" className="bottom__to__top">
          <svg
            id="up_to_top_btn_svg"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-up white"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
            />
          </svg>
        </a>
      </div>
    </div>
  )
}

export default About
