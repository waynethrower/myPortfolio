import React from "react"

//styles
import "./Contact.css"

//assets
import contactImg from "./img/Profile.jpg"

function Contact() {
  return (
    <div className="contact component__space" id="Contact">
      <div className="row">
        <div className="col__2">
          <div className="contact__box">
            <div className="contact__meta">
              <h1 className="hire__text">Hire Me</h1>
              <p className="hire__text white">
                I am available for work. Connect with me via email:
              </p>
              <p className="hire__text white">
                <strong>wayne.thrower@hotmail.co.uk</strong>
              </p>
            </div>

            {/* contact form */}
            <form name="contact" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="contact" />
              <div className="input__box">
                <input
                  type="text"
                  className="contact name"
                  placeholder="Your name *"
                />
                <input
                  type="text"
                  className="contact email"
                  placeholder="Your Email *"
                />
                <input
                  type="text"
                  className="contact subject"
                  placeholder="Write a Subject"
                />
                <textarea
                  name="message"
                  id="message"
                  placeholder="Write Your message"
                ></textarea>
                <input
                  type="submit"
                  className="contactbtn btn pointer"
                  value="Submit"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="col__2">
          <img src={contactImg} alt="" className="contact__img" />
        </div>
      </div>
    </div>
  )
}

export default Contact
