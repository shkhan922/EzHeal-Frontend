import React from 'react';
import Image from 'next/image';
import stepthreeImg from '../../public/static/img/step-three-image.png'

const StepThree = () => {
  return (
    <>
        <section className="step-three ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="step-three-image">
                            <Image src={stepthreeImg} alt="image"/>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="step-three-content">
                            <span>Step 3</span>
                            <h3>Pick Up Your Prescription from Your Local Doctor.</h3>
                            <p>Many healthcare systems around the world together with government agencies and startup companies are building and delivering Telehealth</p>
                            <b>We can send your prescription directly to your local pharmacy for easy pick-up. Many healthcare systems around the world together with government agencies and startup companies are building and delivering Telehealth</b>

                            <div className="step-btn">
                                <a href="#" className="default-btn">
                                    Make Appointment
                                    <span></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default StepThree