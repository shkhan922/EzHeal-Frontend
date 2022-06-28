import React from 'react';
import Image from 'next/image';
import About3 from '../../public/static/img/about-3.jpg'

const AboutArea = () => {
    return (
        <>
            <section className="about-area pt-100">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="about-image">
                                <Image src={About3} alt="image" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-content">
                                <span>About Us</span>
                                <br />
                                <p></p><h2>EZheal&nbsp; a revolutionary approach to benefit patient medical treatment&nbsp;</h2>
                                <p></p>
                                <ul className="about-features two">
                                    <li>
                                        <span>
                                            <i className="flaticon-doctor"></i>
                                            Orthopedic Solutions
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className="flaticon-worm"></i>
                                            Chronic Disease
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className="flaticon-cough"></i>
                                            COVID-19 Test
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className="flaticon-blood-test"></i>
                                            Diabetic Test
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className="flaticon-family"></i>
                                            Family Solutions
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className="flaticon-insurance"></i>
                                            Medical Questions
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutArea