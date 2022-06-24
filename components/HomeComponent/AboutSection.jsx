import React from 'react';
import Image from 'next/image';
import About2 from '../../public/static/img/about-2.png'

const AboutSection = () => {
  return (
    <section className="about-area ptb-100">
    <div className="container-fluid">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="about-image">
            <Image src={About2} alt="image" layout='responsive'/>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="about-content">
            <span>About Us <span style={{color: "#1e5799"}}>EZscan</span></span>
            <h3>Connect to a Call Doctor by Video or Audio.</h3>
            <p>
              EZscan provides Easy, Safe, Convenient, Accurate and Novel
              scanning solutions. We pioneered fast scanning in MRI for your
              convenience, AI analysis of scans so that radiologists can give
              fast and accurate reports. We are getting this technology near
              to you through our partner network.
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