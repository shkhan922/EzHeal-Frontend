import React from 'react';
import Image from 'next/image';
import stepthreeImg from '../../public/static/img/step-three-image.png'

const StepThree = () => {
  return (
    <>
        <section class="step-three ptb-100">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="step-three-image">
                            <Image src={stepthreeImg} alt="image"/>
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <div class="step-three-content">
                            <span>Step 3</span>
                            <h3>Pick Up Your Prescription from Your Local Doctor.</h3>
                            <p>Many healthcare systems around the world together with government agencies and startup companies are building and delivering Telehealth</p>
                            <b>We can send your prescription directly to your local pharmacy for easy pick-up. Many healthcare systems around the world together with government agencies and startup companies are building and delivering Telehealth</b>

                            <div class="step-btn">
                                <a href="#" class="default-btn">
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