import React from 'react'
import './index.css'

function Contact() {
  return (
    <div>
        <div id="contact" className="pt-6" />
        <section className="hero  has-background-info-light block py-6 custom-font">
          <div className="column is-4 mx-auto">
            <h2 data-aos="fade-out" className="title has-text-centered is-uppercase">
              <span className="icon">
                <i className="fas fa-envelope" />
              </span>
              CONTACT
            </h2>
            <div className="title-underline" />
          </div>
          <div className="hero-body">
            <div className="column is-5 mx-auto">
              <div className="title-underline" />
            </div>
            <div className="columns mx-0">
              <div className="column is-5 m-auto p-6 ">
                <p data-aos="fade-up">
                </p><h2 className="title is-3 has-text-black">
                  <span className="icon">
                    <i className="fas fa-phone" />
                  </span>  +758860234<br /><br />
                  <span className="icon">
                    <i className="fab fa-linkedin" />
                  </span>
                  https://www.linkedin.com/in/wasri-nama-660565213/<br /><br />
                  <span className="icon">
                    <i className="fas fa-envelope-square" />
                  </span>          
                  namawasri@icloud.com
                </h2><br />
                <p />
              </div>
            </div>
          </div>
        </section>
      </div>
  )
}

export default Contact