import React from "react"

//styles
import "./Home.css"

//components
import Navbar from "./components/navbar"
import HomeBG from "./components/homebg"

function Home() {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header")
    header.classList.toggle("active", window.scrollY > 0)
  })

  return (
    <div className="home" id="Home">
      {/* <div className="home__bg"> */}
      <div className="header d__flex align__items__center pxy__30">
        <Navbar />
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
        <HomeBG />
      </div>
      {/* </div> */}
    </div>
  )
}

export default Home
