import React from 'react';
import Image from 'next/image';
import Image1 from '../../public/static/img/doctors/image1.jpg'
import Image2 from '../../public/static/img/doctors/image2.jpg'
import Image3 from '../../public/static/img/doctors/image3.jpg'
import Image4 from '../../public/static/img/doctors/image4.jpg'

const DoctorArea = () => {
  return (
    <>
        <section className="doctor-area pt-100 pb-70">
            <div className="container-fluid">
                <div className="section-title">
                    <div className="section-title">
                        <span>Our Doctors</span>
                        <h2>Specialized Doctors</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="doctor-item">
                            <div className="image">
                                <Image className='img' src={Image1} alt="image"/>
                            </div>
                            <div className="content">
                                <h3>Dr. James Adult</h3>
                                <span>Cardiologist</span>

                                <ul className="social">
                                    <li>
                                        <a href="#" target="_blank">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i className="fab fa-linkedin-in"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="doctor-item">
                            <div className="image">
                                <Image className='img' src={Image2} alt="image"/>
                            </div>
                            <div className="content">
                                <h3>Dr. James Alison</h3>
                                <span>Medicine</span>

                                <ul className="social">
                                    <li>
                                        <a href="#" target="_blank">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i className="fab fa-pinterest-p"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="doctor-item">
                            <div className="image">
                                <Image className='img' src={Image3} alt="image"/>
                            </div>
                            <div className="content">
                                <h3>Dr. Peter Adlock</h3>
                                <span>Neurologiest</span>

                                <ul className="social">
                                    <li>
                                        <a href="#" target="_blank">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i className="fab fa-pinterest-p"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="doctor-item">
                            <div className="image">
                                <Image className='img' src={Image4} alt="image"/>
                            </div>
                            <div className="content">
                                <h3>Dr. Jelin Alis</h3>
                                <span>Medicine</span>

                                <ul className="social">
                                    <li>
                                        <a href="#" target="_blank">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i className="fab fa-pinterest-p"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default DoctorArea