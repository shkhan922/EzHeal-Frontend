import React from 'react';
import Image from 'next/image';


const AboutSection = (props) => {
  return (
    <section className="about-area ptb-100">
    <div className="container-fluid">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="about-image">
            <Image src={props.aboutimg} alt="image" width='100%' height="100%" layout='responsive'/>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="about-content">
            <span>About Us <span style={{color: "#1e5799"}}>EZscan</span></span>
            <h3>{props.abouth1}</h3>
            <p>
            {props.aboutdescp}
            </p>

            <ul className="about-features two">
              <li>
                <span>
                  <i className="flaticon-doctor"></i>
                  Faster Scanning
                </span>
              </li>
              <li>
                <span>
                  <i className="flaticon-worm"></i>
                  Convenient Process
                </span>
              </li>
              <li>
                <span>
                  <i className="flaticon-cough"></i>
                  Accurate Reporting
                </span>
              </li>
              <li>
                <span>
                  <i className="flaticon-blood-test"></i>
                  Advanced Technology
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default AboutSection