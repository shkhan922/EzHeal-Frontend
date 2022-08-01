import React from 'react';
import Image from 'next/image'
import Client1 from '../../public/static/img/client/1.jpg'
import Client2 from '../../public/static/img/client/2.jpg'
import Client3 from '../../public/static/img/client/3.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Carousel } from 'react-bootstrap';
import { baseUrl,baseUrlImage } from '../../lib/api'


const TestimonialSection = (props) => {
    
    return (

        <>
          
                
                    
            <div  className="testimonials-slider owl-carousel owl-theme owl-loaded owl-drag">

                
                <div className="owl-stage-outer">
                    <div className="owl-stage" >
                    </div>
                </div>
                
               
                <div className="myCarausel">
               
                 
                    <Carousel interval={1500} touch={true}>
                    {
              ((props.TMsliderCard || []).map((data, index) => 
                
                        <Carousel.Item key={data.id}>
               
                            <div  className="owl-item" style={{}}><div className="testimonials-item">
                                <div className="content">
                                    <span>Testimonials</span>
                                    <h3>{data.slideH1}</h3>
                                    <div className="icon">
                                        <i className="flaticon-left-quote"></i>
                                    </div>
                                    <p>{data.SlidePara}</p>

                                    <div className="info">
                                        <Image src={`${baseUrlImage}${data.clientImg.data.attributes.url}`} alt="image" width={50} height={50} />
                                        <h4>{data.clientName}</h4>
                                        <p>{data.clientTitle}</p>
                                    </div>
                                </div>
                            </div>
               
                            </div>
                
                        </Carousel.Item>
                        ))
                    } 
                         {/* <Carousel.Item>
                            <div className="owl-item" style={{}}><div className="testimonials-item">
                                <div className="content">
                                    <span>Testimonials</span>
                                    <h3>What Client’s Say About Us</h3>
                                    <div className="icon">
                                        <i className="flaticon-left-quote"></i>
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Lorem Ipsum is simply dummy text of the printing and
                                    </p>

                                    <div className="info">
                                        <Image src={Client3} alt="image" width={50} height={50} />
                                        <h4>Steven Smith</h4>
                                        <p>Web Developer</p>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </Carousel.Item>
                       <Carousel.Item>
                            <div className="owl-item" style={{}}>
                             <div className="testimonials-item">
                                <div className="content">
                                    <span>Testimonials</span>
                                    <h3>What Client’s Say About Us</h3>
                                    <div className="icon">
                                        <i className="flaticon-left-quote"></i>
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Lorem Ipsum is simply dummy text of the printing and
                                    </p>

                                    <div className="info">
                                        <Image src={Client3} alt="image" width={50} height={50} />
                                        <h4>Steven Smith</h4>
                                        <p>Web Developer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Carousel.Item>   */}

                    </Carousel>
                   

                </div>

            </div>
    
        </>
    )
}

export default TestimonialSection