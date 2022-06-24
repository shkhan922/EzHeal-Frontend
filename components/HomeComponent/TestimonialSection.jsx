import Image from 'next/image'
import React from 'react'
import TestimonialImg from '../../public/static/img/testimonials.jpg';

import TestimonialSwiper from './TestimonialSwiper';

const TestimonialSection = () => {
    return (
        <>
            <section className="testimonials-area ptb-100">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="testimonials-image">
                                <div className="image">
                                    <Image src={TestimonialImg} alt="image" />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                           <TestimonialSwiper/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TestimonialSection