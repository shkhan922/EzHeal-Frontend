import React from 'react';
import Image from 'next/image';
import { baseUrlImage } from '~/lib/api'
const DoctorArea = (props) => {
  return (
    <>
        <section className="doctor-area pt-100 pb-70">
            <div className="container-fluid">
                <div className="section-title">
                    <div className="section-title">
                        <span>Our Doctors</span>
                        <h2>{props.DoctorH1}</h2>
                        <p>{props.DoctorPara}</p>
                    </div>
                </div>

                <div className="row">
                {
              ((props.DoctorCard || []).map((data, index) => 
                    <div key={data.id} className="col-lg-3 col-md-6">
            
                        <div  className="doctor-item">
                            <div className="image">
                                <Image className='img' src={`${baseUrlImage}${data.img.data.attributes.url}`} width={400} height={480} alt="image"/>
                            </div>
                            <div className="content">
                                <h3>{data.DoctorName}</h3>
                                <span>{data.Doc_type}</span>

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
                    ))}
{/* 
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
                    </div> */}
                </div>
            </div>
        </section>
    </>
  )
}

export default DoctorArea