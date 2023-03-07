import React from 'react';
import "./index.css";

function About() {
  return (
    <div>
        <div id="intro" className="pt-6" />
        <section className="hero  has-background-info-light block py-6 custom-font">
          <div className="column is-4 mx-auto">
            <h2 data-aos="fade-out" className="title has-text-centered is-uppercase">
              <span className="icon">
                <i className="fas fa-info" />
              </span>
              About Me
            </h2>
            <div className="title-underline" />
          </div>
          <div className="hero-body">
            <div className="column is-4 mx-auto">
              <div className="title-underline" />
            </div>
            <div className="columns mx-0">
              <div className="column is-5 m-auto p-6 ">
                <p data-aos="fade-up">
                </p><h2 className="title is-3 has-text-black">I consider my self a responsible and 
                  orderly person. I am looking foward 
                  for my first work experience. </h2><br />
                <p />
              </div>
            </div>
          </div>
        </section>
      </div>
  )
}

export default About