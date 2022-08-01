import Image from 'next/image'
import React from 'react'


import TestimonialSwiper from './TestimonialSwiper';

const TestimonialSection = (props) => {

    console.log(props.TMsliderCard)
    return (
        <>
            <section className="testimonials-area ptb-100">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="testimonials-image">
                                <div className="image">
                                    <Image src={props.Testimon_img} alt="image" width={1000} height={800}/>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                           <TestimonialSwiper TMsliderCard={props.TMsliderCard}/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TestimonialSection