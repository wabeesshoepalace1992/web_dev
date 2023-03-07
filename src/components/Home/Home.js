import React from 'react';
import "./index.css";
import pic from '../assets/image1.jpeg';

function Home() {
  return (
    <div> <section className="hero is-info block py-6 custom-font">
    <div className="hero-body">
      <div className="column is-4 mx-auto">
        <div className="title-underline" />
      </div>
      <div className="columns mx-0">
        <figure data-aos="fade-down" className="image p-6 m-auto column is-5">
          <img className="is-rounded" width={480} height={480} src={pic} alt="profile" />
        </figure>
        <div className="column is-5 m-auto p-6 ">
          <p data-aos="fade-up">
          </p><h1 className="title is-1 ml-6 has-text-black">HI There, I'm Wasri Nama </h1>
          <h2 className="title is-5 ml-6 has-text-black"> Undergraduate  student</h2>
          <h2 className="title is-5 ml-6 has-text-black"> University of Colombo School of Computing</h2>
          <p />
        </div>
      </div>
    </div>
  </section></div>
  )
}

export default Home