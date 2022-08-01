import React from 'react';
import Image from 'next/image';
import stepthreeImg from '../../public/static/img/step-three-image.png'
import { baseUrlImage } from '~/lib/api'


const StepThree = (props) => {
  return (
    <>
        <section className="step-three ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="step-three-image">
                            <Image src={`${baseUrlImage}${props.stepimg}`} width={1200} height={1000} alt="image"/>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="step-three-content">
                            <span>Step 3</span>
                            <h3>{props.steph1}</h3>
                            <p>{props.steppara1}</p>
                            <b>{props.steppara2}</b>

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