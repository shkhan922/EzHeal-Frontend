import React from "react"
import Link from 'next/link';
import logo1 from '../assets/img/Ezheal_logo.png'
import Image from 'next/image'
import blackLogo from '../assets/img/Ezheal_logo.png'
import whiteLogo from '../assets/img/Ezheal_logo.png'

const Header = () => {
  return (
<>

<header className="header-area"> 
            <div className="top-header">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <ul className="top-list">
                                <li>
                                    <i className='flaticon-clock'></i>
                                    Mon-Sun 8:00 to 20:00 
                                </li>
                                <li>
                                    <i className='flaticon-phone-call'></i>
                                    <Link href="tel:+919560933344">Call Us: 9560933344</Link>
                                </li>
                                <li>
                                    <i className='flaticon-paper-plane'></i>
                                    <Link href="mailto:contact@ezscan.ai">contact@ezheal.ai</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-6">
                            <ul className="top-social"> 
                                <li>
                                    <Link href="https://www.facebook.com/EZscan-105588505185824" >
                                        <a className="facebook"><i className="fab fa-facebook-f"></i></a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://twitter.com/Aikenist1" >
                                        <a className="twitter"><i className="fab fa-twitter"></i></a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://www.youtube.com/channel/UCrOAQPYxgg9ZM8wCc83pfUA" >
                                        <a className="pinterest"><i className="fab fa-youtube"></i></a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://www.linkedin.com/company/aikenist/" >
                                        <a className="instagram"><i className="fab fa-linkedin-in"></i></a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://ezheal.ai/signin" >
                                        <a className="log-in">Sign In</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://ezheal.ai/signup" >
                                        <a className="sign-in">Sign Up</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
           
            <div className="navbar-area navbar-two ">
                <div className="main-responsive-nav">
                    <div className="container">
                        <div className="main-responsive-menu">
                            <div className="logo">
                                <Link href="https://ezheal.ai/">
                                    <a >
                                <Image src={blackLogo} className="black-logo" alt="image"/>
                                </a>      
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="main-navbar">
                    <div className="container">
                        <nav className="navbar navbar-expand-md navbar-light align-items-center">
                            <Link href="https://ezheal.ai/">
                                <a>
                                <Image src={blackLogo} className="black-logo" alt="image" width={'200px'} height={'80px'}/>
                                </a>
                                       
                            </Link>

                            <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link href="https://ezheal.ai/">
                                           <a  className="nav-link">Home </a> 
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="https://ezheal.ai/about1">
                                            <a  className="nav-link">About</a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="https://ezheal.ai/service1" >
                                          <a className="nav-link">Services </a>  
                                        </Link>
                                    </li>
                                   
                                    <li className="nav-item">
                                        <Link href="https://ezheal.ai/contact1">
                                            <a className="nav-link">Contact</a>
                                        </Link>
                                    </li>
                                    
                                    <li className="nav-item">
                                        <Link href="#" >
                                             <a className="nav-link">Dashboard </a>
                                        </Link>
                                        <ul className="dropdown-menu">
                                          <li className="nav-item">
                                              <Link href="https://ezheal.ai/doclogin" >
                                                  
                                               <a className="nav-link">Doctor Panel</a> 
                                              </Link>
                                          </li>
                    
                                          <li className="nav-item">
                                              <Link href="https://ezheal.ai/dialogin" >
                                              <a className="nav-link">Diagnoistic Panel</a> 
                                              </Link>
                                          </li>
                                          <li className="nav-item">
                                            <Link href="#" >
                                              <a className="nav-link">Pharma Panel</a>
                                            </Link>
                                          </li>
                                         
                                        </ul> 
                                      </li>
                                </ul>

                                    <div className="others-options">
                                    <Link href="https://ezheal.ai/appointment1" >
                                        <a className="default-btn-two st me-1">
                                            Clinician Appointment
                                        <span></span>
                                        </a>
                                    </Link>
                                     <Link href="#" >
                                        <a className="default-btn-two st">
                                        Diagnostic Booking
                                        <span></span>
                                        </a>
                                    </Link>
                                </div>
                                
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            
        </header>













    <div className="main-banner bg-two">
      <div className="d-table">
        <div className="d-table-cell">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div className="main-banner-content">
                                       
                
              <h1>Faster, Accurate Convenient, Safe</h1>
                  <p style={{backgroundColor:'#00beff'}}></p><p>EZheal&nbsp;provides Easy, Safe, Convenient, Accurate and Novel treatment and scanning solutions. We focus on back pain, knee pain, physical trauma, neuro diseases which requires faster response for treatment and continuum care at home. We connect Physicians, Imaging centers, Physiotherapy and Dieticians on a single platform.&nbsp; We pioneered fast scanning in MRI for your convenience, AI analysis for scans and treatment</p>

<p>&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;</p>
                  <p></p>
            
              
               
                  
                </div>

                <div className="banner-form">
                  <form>
                    <div className="row align-items-center">
                         <div className="col-lg-3 col-md-6">
                       <div className="form-group">
                          <select style={{display: "none"}}>
                            <option>Category</option>
                            <option value="">Cardiologists</option>
                            <option value="">Dermatologists</option>
                            <option value="">Endocrinologists</option>
                          </select><div className="nice-select" tabindex="0"><span className="current">Category</span><ul className="list"><li data-value="Category" className="option selected">Category</li><li data-value="" className="option">Cardiologists</li><li data-value="" className="option">Dermatologists</li><li data-value="" className="option">Endocrinologists</li></ul></div>
                        </div>

                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="form-group">
                          <select style={{display: "none"}}>
                            <option>Specialist</option>
                            <option value="">Dr. James Adult</option>
                            <option value="">Dr. James Alison</option>
                            <option value="">Dr. Peter Adlock</option>
                          </select><div className="nice-select" tabindex="0"><span className="current">Specialist</span><ul className="list"><li data-value="Specialist" className="option selected">Specialist</li><li data-value="" className="option">Dr. James Adult</li><li data-value="" className="option">Dr. James Alison</li><li data-value="" className="option">Dr. Peter Adlock</li></ul></div>
                        </div>
                      </div>
                     
                      <div className="col-lg-3 col-md-6">
                        <div className="form-group">
                          <input type="date" className="form-control"/>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="form-group">
                          <button type="submit" className="banner-form-btn">
                            Search
                            <i className="fa fa-search"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>

                <div className="banner-btn">
                  <a href="javascript:void(0)" className="default-btn">
                    Clinician Appointment
                    <span></span>
                  </a>
                  <a href="javascript:void(0)" className="default-btn">
                    Diagnostic Booking
                    <span></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>





 
        </>


  )
}

export default Header