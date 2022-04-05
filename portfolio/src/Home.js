import React, { useState } from "react"

//styles
import "./Home.css"

function Home() {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header")
    header.classList.toggle("active", window.scrollY > 0)
  })
  //Toggle Menu
  const [show, setShow] = useState(false)

  return (
    <div className="home" id="Home">
      <div className="home__bg">
        <div className="header d__flex align__items__center pxy__30">
          <div className="navigation pxy__30">
            <ul className="navbar d__flex">
              <a href="#Home">
                <li className="nav__items mx__15">Home</li>
              </a>
              <a href="#About">
                <li className="nav__items mx__15">About</li>
              </a>
              <a href="#Portfolio">
                <li className="nav__items mx__15">Portfolio</li>
              </a>
              {/* <a href="#Blog">
                <li className="nav__items mx__15">Blog</li>
              </a> */}
              <a href="#Contact">
                <li className="nav__items mx__15">Contact</li>
              </a>
            </ul>
          </div>
          {/* Toogle Menu */}
          <div className="toggle__menu">
            <svg
              onClick={() => setShow(!show)}
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="10"
              fill="currentColor"
              class="bi bi-justify white pointer"
              viewBox="0 0 12 12"
            >
              <path
                fill-rule="evenodd"
                d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
          {show ? (
            <div className="sideNavbar">
              <ul className="sidebar d__flex">
                <li className="sideNavbar">
                  <a href="#Home">Home</a>
                </li>
                <li className="sideNavbar">
                  <a href="#About">About</a>
                </li>
                <li className="sideNavbar">
                  <a href="#Portfolio">Portfolio</a>
                </li>
                {/* <li className="sideNavbar">
                  <a href="#blog">Blog</a>
                </li> */}
                <li className="sideNavbar">
                  <a href="#Contact">Contact</a>
                </li>
              </ul>
            </div>
          ) : null}
        </div>
        {/*Home Content*/}
        <div className="container">
          <div className="home__content">
            <div className="home__meta"></div>
            <h1 className="home__text pz__10">WELCOME TO MY PORTFOLIO</h1>
            <h2 className="home__text pz__10">Hi, I’m Wayne Thrower</h2>
            <h3 className="home__text sweet pz__10">Full Stack JS Developer</h3>
            <h4 className="home__text pz__10">Based in East Midlands, UK.</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
