import React, { useState } from "react"

//styling
import "./Navbar.css"

function Navbar() {
  const [show, setShow] = useState(false)

  return (
    <>
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
          className="bi bi-justify white pointer"
          viewBox="0 0 12 12"
        >
          <path
            fillRule="evenodd"
            d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </div>
      {show ? (
        <div className="sideNavbar">
          <ul className="sidebar d__flex">
            <a href="#Home">
              <li className="sideNavbar">Home </li>
            </a>
            <a href="#About">
              <li className="sideNavbar">About</li>
            </a>
            <a href="#Portfolio">
              <li className="sideNavbar">Portfolio</li>
            </a>
            <a href="#Contact">
              <li className="sideNavbar">Contact</li>
            </a>
          </ul>
        </div>
      ) : null}
    </>
  )
}

export default Navbar
