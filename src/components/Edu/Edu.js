import React from 'react'
import "./index.css"

function Edu() {
  return (
    <div>
        <div id="edu" className="pt-6" />
        <section className="hero  has-background-info-light block py-6 custom-font">
          <div className="column is-4 mx-auto">
            <h2 data-aos="fade-out" className="title has-text-centered is-uppercase">
              <span className="icon">
                <i className="fas fa-book" />
              </span>
              Education
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
                  <div className="container">
                    <div className="columns">
                      <div className="column">
                        <div className="box">
                          <div className="content">
                            <h4 className="title is-5">2022</h4>
                            Bachelor of Information Systems(in progress)
                            University of Colombo School of Computing
                          </div>
                        </div>
                      </div>
                      <div className="column">
                        <div className="box">
                          <div className="content">
                            <h4 className="title is-5">2020</h4>
                            GCE Advanced Level Exam.
                            KM/AL-MANAR CENTRAL COLLEGE
                            POLICAL SCIENCE – A
                            LOGIC AND SCIENTICFIC METHOD – B
                            ISLAM – A
                            English - C
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="columns">
                      <div className="column">
                        <div className="box">
                          <div className="content">
                            <h4 className="title is-5">2016</h4>
                            GCE Ordinary Level Exam.
                            KM/AL-MANAR CENTRAL COLLEGE
                            (6A, 3B)
                          </div>
                        </div>
                      </div>
                    </div> 
                    <p />
                  </div>
                </h2></div>
            </div>
          </div></section>
      </div>
  )
}

export default Edu