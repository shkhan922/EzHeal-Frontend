import React from 'react';
import Image from 'next/image';;
import consultImg from '../../public/static/img/consult.jpg'

const ConsultArea = () => {
  return (
    <>
    <section className="consult-area ptb-100">
            <div className="container-fluid pl-0">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className="consult-image">
                            <Image src={consultImg} alt="image"/>
                        </div>
                    </div>

                    <div className="col-lg-5">
                        <div className="consult-content">
                            <span>Online Consult</span>
                            <h3>Get 24/7 Care Right From Your Phone</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy</p>

                            <ul className="list">
                                <li>
                                    <i className="flaticon-check-1"></i>
                                    Get unlimited 24/7 Video Chat with a provider at no extra cost
                                </li>
                                <li>
                                    <i className="flaticon-check-1"></i>
                                    Easily book appointments and renew prescriptions
                                </li>
                                <li>
                                    <i className="flaticon-check-1"></i>
                                    Skip unnecessary trips to the ER or urgent care
                                </li>
                                <li>
                                    <i className="flaticon-check-1"></i>
                                    Have a Remote Visit with your primary care provider over video
                                </li>
                                <li>
                                    <i className="flaticon-check-1"></i>
                                    Message with your provider
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

export default ConsultArea