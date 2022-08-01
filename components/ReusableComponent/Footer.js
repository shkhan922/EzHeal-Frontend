import Image from 'next/image';
import {React, useState, useEffect } from 'react';
import Link from 'next/link'
import FooterShape from '../../public/static/img/footer-shape.png'
import { baseUrl, baseUrlImage } from '~/lib/api'

function Footer() {

  const[titles, setTitles]= useState()
  

  const fetchFooterData = async () => {
    const param = `footers`
    const response = await fetch(`${baseUrl}/${param}`)
    const data = await response.json()
    const response1 = data
    setTitles(response1.data)
    console.log(response1.data)
  }

  useEffect(() => {
  
    fetchFooterData()
  }, [])


  return (
    <div>
      {
        ((titles || []).map((data, index) => { return( 
      <section className="footer-area pt-100 pb-70">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 col-sm-6">
            <div className="single-footer-widget">
                                    
                
              <h1>{data.attributes.title}</h1>
                  <p></p><p>{data.attributes.para}</p>
                  <p></p>
            
              
               
                 
              <h3>EZheal</h3>
              
              <ul className="footer-social">
                <li>
                  <a href={data.attributes.FB_link}>
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>

                <li>
                  <a href={data.attributes.Twitter_link}>
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>

                <li>
                  <a href={data.attributes.Youtube_link}>
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>

                <li>
                  <a href={data.attributes.Linkedin}>
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
                <span><a href="tel:+919560933344">{data.attributes.phone}</a></span>
              </div>

              <div className="footer-info-contact">
                <i className="flaticon-email"></i>
                <h3>Email</h3>
                <span><a href="mailto:contact@ezscan.ai">
                {data.attributes.email}</a></span>
              </div>

              <div className="footer-info-contact">
                <i className="flaticon-clock"></i>
                <h3>Time</h3>
                <span> {data.attributes.time}</span>
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
    )} ))}
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
    
    </div>
  )
}

export default Footer