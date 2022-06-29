import React from 'react';

const ServicesSection = () => {
  return (
    <>
        <section className="services-section bg-f4f6fe pt-100 pb-100">
            <div className="container">
                <div className="section-title">
                    <span>Our Services</span>
                    <h2>Our Healthcare Services</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="services-item-two">
                            <div className="icon">
                                <i className="flaticon-bacteria"></i>
                            </div>
                            <a href="single-services.html">
                                <h3>COVID-19 Consulting</h3>
                            </a>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore</p>
                            <a href="single-services.html" className="read-btn">Read More +</a>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="services-item-two">
                            <div className="icon">
                                <i className="flaticon-shield"></i>
                            </div>
                            <a href="single-services.html">
                                <h3>Special Follow Up</h3>
                            </a>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore</p>
                            <a href="single-services.html" className="read-btn">Read More +</a>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="services-item-two">
                            <div className="icon">
                                <i className="flaticon-beauty-treatment"></i>
                            </div>
                            <a href="single-services.html">
                                <h3>Dermatology</h3>
                            </a>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore</p>
                            <a href="single-services.html" className="read-btn">Read More +</a>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="services-item-two">
                            <div className="icon">
                                <i className="flaticon-mental-health"></i>
                            </div>
                            <a href="single-services.html">
                                <h3>Mental Health</h3>
                            </a>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore</p>
                            <a href="single-services.html" className="read-btn">Read More +</a>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="services-item-two">
                            <div className="icon">
                                <i className="flaticon-crutches"></i>
                            </div>
                            <a href="single-services.html">
                                <h3>Orthopedics</h3>
                            </a>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore</p>
                            <a href="single-services.html" className="read-btn">Read More +</a>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="services-item-two">
                            <div className="icon">
                                <i className="flaticon-pregnancy"></i>
                            </div>
                            <a href="single-services.html">
                                <h3>Gynecological</h3>
                            </a>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore</p>
                            <a href="single-services.html" className="read-btn">Read More +</a>
                        </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                        <div className="pagination-area">
                            <a href="#" className="prev page-numbers">
                                <i className="fa fa-chevron-left"></i>
                            </a>
                            <a href="#" className="page-numbers">1</a>
                            <span className="page-numbers current" aria-current="page">2</span>
                            <a href="#" className="page-numbers">3</a>
                            <a href="#" className="page-numbers">4</a>
                            <a href="#" className="next page-numbers">
                                <i className="fa fa-chevron-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default ServicesSection