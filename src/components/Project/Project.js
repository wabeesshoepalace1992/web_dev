import React from 'react'
import "./index.css"

function Project() {
  return (
    <div>
        <div id="project" className="pt-4" />
        <section className="hero  has-background-info-light block py-6 custom-font">
          <div className="column is-4 mx-auto">
            <h2 data-aos="fade-out" className="title has-text-centered is-uppercase">
              <span className="icon">
                <i className="fas fa-chart-pie" />
              </span>
              PROJECT
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
                </p><h2 className="title is-3 has-text-black">
                  <li> Hack an IOt devices
                  </li>
                  <li> Web development 
                  </li>
                  <li>Build an online radio station</li> </h2><br />
                <p />
              </div>
            </div>
          </div>
        </section>
      </div>
  )
}

export default Project