import Image from 'next/image';
import React from 'react';
import Link from 'next/link'
import FooterShape from '../../public/static/img/footer-shape.png'

function Footer() {
  return (
    <>
      <section className="footer-area pt-100 pb-70">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 col-sm-6">
            <div className="single-footer-widget">
                                    
                
              <h1>EZheal is from the house of Aikenist</h1>
                  <p></p><p>EZheal providing connected care system to connect physicians, surgeoans, Imaging Centers, Radiologists, Physiotherapists, Dietician on a single app and platform.</p>
                  <p></p>
            
              
               
                 
              <h3>EZheal</h3>
              
              <ul className="footer-social">
                <li>
                  <a href="https://www.facebook.com/EZscan-105588505185824">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>

                <li>
                  <a href="https://twitter.com/Aikenist1">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>

                <li>
                  <a href="https://www.youtube.com/channel/UCrOAQPYxgg9ZM8wCc83pfUA">
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>

                <li>
                  <a href="https://www.linkedin.com/company/aikenist/">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="single-footer-widget pl-5">
              <h3>Useful Links</h3>

              <ul className="footer-quick-links">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="services">Services</Link>
                </li>
                <li>
                  <Link href="contact">Contact</Link>
                </li>
                <li>
                  <Link href="privacypolicy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="termsconditions">Terms and Condition</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="single-footer-widget">
              <h3>Contact</h3>

              <div className="footer-info-contact">
                <i className="flaticon-call"></i>
                <h3>Phone</h3>
                <span><a href="tel:+919560933344"> 9560933344</a></span>
              </div>

              <div className="footer-info-contact">
                <i className="flaticon-email"></i>
                <h3>Email</h3>
                <span><a href="mailto:contact@ezscan.ai">
                    contact@ezscan.ai</a></span>
              </div>

              <div className="footer-info-contact">
                <i className="flaticon-clock"></i>
                <h3>Time</h3>
                <span> Mon-Sun 8:00 to 20:00</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      <div className="shape">
        <Image src={FooterShape} alt="image"/>
      </div>
    </section>
    <div className="copyright-area">
      <div className="container">
        <p>
          Copyright ©
          <script>
            document.write(new Date().getFullYear());
          </script>2022
          <strong> EZScan.</strong> All Rights Reserved by
          <a href="" target="_blank">  </a>
        </p>
      </div>
    </div>
    </>
  )
}

export default Footer