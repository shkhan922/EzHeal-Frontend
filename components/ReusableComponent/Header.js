import React from "react"
import Link from 'next/link'
import Image from "next/image"
import Logo from '../../public/static/img/logo-white.png'

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
                                    <i className="flaticon-clock"></i>
                                    Mon-Sun 8:00 to 20:00 
                                </li>
                                <li>
                                    <i className="flaticon-phone-call"></i>
                                    <Link href="tel:+919560933344">Call Us: 9560933344</Link>
                                </li>
                                <li>
                                    <i className="flaticon-paper-plane"></i>
                                    <Link href="mailto:contact@ezscan.ai">contact@ezheal.ai</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-6">
                            <ul className="top-social">
                                <li>
                                    <Link href="https://www.facebook.com/EZscan-105588505185824">
                                        <a className="facebook"><i className="fab fa-facebook-f"></i></a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://twitter.com/Aikenist1" >
                                        <a className="twitter"><i className="fab fa-twitter"></i></a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://www.youtube.com/channel/UCrOAQPYxgg9ZM8wCc83pfUA">
                                        <a className="pinterest"><i className="fab fa-youtube"></i></a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://www.linkedin.com/company/aikenist/">
                                       <a className="instagram"> <i className="fab fa-linkedin-in"></i></a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="signIn">
                                       <a className="log-in" style={{color:'white'}}>Sign In</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/signUp">
                                       <a className="sign-in">Sign Up</a> 
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="navbar-area navbar-two">
                <div className="main-responsive-nav">
                    <div className="container">
                        <div className="main-responsive-menu">
                            <div className="logo">
                                <Link href="/">
                              <Image src={Logo} className="white-logo" alt="image" height={100} width={200}/>
                                  
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="main-navbar">
                    <div className="container">
                        <nav className="navbar navbar-expand-md navbar-light">
                            <Link href="/">
                                <Image src={Logo} className="white-logo" alt="image" width={200} height={80}/>
                                
                            </Link>

                            <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent" style={{display: "block"}}>
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link href="/">
                                          <a  className="nav-link"> Home </a> 
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="/about">
                                            <a className="nav-link">About</a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="/services">
                                           <a className="nav-link"> Services </a>
                                        </Link>
                                    </li>
                                   
                                    <li className="nav-item">
                                        <Link href="/contact">
                                          <a  className="nav-link">Contact</a>
                                        </Link>
                                    </li>
                                    
                                    <li className="nav-item">
                                        <Link href="#"><a className="nav-link"> Dashboard </a></Link>
                                        <ul className="dropdown-menu">
                                          <li className="nav-item">
                                              <Link href="doctor-login">
                                                  
                                               <a className="nav-link"> Doctor Panel</a>
                                              </Link>
                                          </li>
                    
                                          <li className="nav-item">
                                              <Link href="diagnostic-login">
                                              <a className="nav-link">Diagnoistic Panel</a> 
                                              </Link>
                                          </li>
                                          <li className="nav-item">
                                            <Link href="pharma-login">
                                             <a className="nav-link">Pharma Panel</a> 
                                            </Link>
                                          </li>
                                         
                                        </ul> 
                                      </li>
                                </ul>

                                    <div className="others-options">
                                    <Link href="/signIn">
                                        <a className="default-btn-two st">Clinician Appointment <span></span></a>
                                        
                                    </Link>
                                     <Link href="/signIn">
                                       <a  className="default-btn-two st ms-1">Diagnostic Booking   <span></span></a> 
                                      
                                    </Link>
                                </div>
                                </div>
                            </nav></div>
                        
                    </div>
                </div>
            
           
        </header>
        </>
    )
}

export default Header