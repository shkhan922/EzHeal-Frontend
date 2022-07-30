import React from 'react';
import Link from 'next/link';

const ServicesSection = (props) => {
  return (
    <>
      <section className="services-section bg-f4f6fe pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span>Our Services</span>
            <h2>{props.serviceh1}</h2>
            <p>
              {props.servicepara}
            </p>
          </div>
          {/* {props.servicecard.map (card =>)} */}
          <div className="row">
            {
              ((props.servicecard || []).map((data, index) => {
                return (
                  <div key={data.id} className="col-lg-4 col-md-6">
                    <div className="services-item-two">
                      <div className="icon">
                        <i className={`flaticon-${data.card_icon}`}></i>
                      </div>
                      <Link href="single-services.html">
                        <h3>{data.cardh1}</h3>
                      </Link>
                      <p>{data.cardpara}</p>
                      <Link href="#"><a className="read-btn">Read More +</a></Link>
                    </div>
                  </div>
                )
              }))
            }


            {/* <div className="col-lg-4 col-md-6">
            <div className="services-item-two">
              <div className="icon">
                <i className="flaticon-shield"></i>
              </div>
              <Link href="#">
                <h3>Find Doctors Near You</h3>
              </Link>
              <p>Confirmed appointments</p>
              <Link href="#"><a className="read-btn">Read More +</a></Link>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="services-item-two">
              <div className="icon">
                <i className="flaticon-beauty-treatment"></i>
              </div>
              <Link href="#">
                <h3>Medicines</h3>
              </Link>
              <p>Essentials at your doorstep</p>
              <Link href="#"><a className="read-btn">Read More +</a></Link>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="services-item-two">
              <div className="icon">
                <i className="flaticon-mental-health"></i>
              </div>
              <Link href="#">
                <h3>Lab Tests</h3>
              </Link>
              <p>Sample pickup at your home</p>
              <Link href="#"><a className="read-btn">Read More +</a></Link>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="services-item-two">
              <div className="icon">
                <i className="flaticon-crutches"></i>
              </div>
              <Link href="#">
                <h3>Surgeries</h3>
              </Link>
              <p>Safe and trusted surgery centers</p>
              <Link href="#"><a className="read-btn">Read More +</a></Link>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="services-item-two">
              <div className="icon">
                <i className="flaticon-pregnancy"></i>
              </div>
              <Link href="#">
                <h3>Physiotherapist</h3>
              </Link>
              <p>Get it treated by Link trained physiotherapist</p>
              <Link href="#"><a className="read-btn">Read More +</a></Link>
            </div>
          </div> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default ServicesSection