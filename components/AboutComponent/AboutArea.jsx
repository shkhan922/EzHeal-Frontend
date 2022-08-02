import React from 'react';
import Image from 'next/image';
import About3 from '../../public/static/img/about-3.jpg'
import { baseUrlImage } from '~/lib/api'

const AboutArea = (props) => {
    return (
        <>
            <section className="about-area pt-100">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="about-image">
                                <Image src={`${baseUrlImage}${props.AboutImg.data.attributes.url}`} alt="image" width={1000} height={630}/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-content">
                                <span>About Us</span>
                                <br />
                                <p></p><h2>{props.AboutH1}</h2>
                                <p></p>
                             
                                <ul className="about-features two">
                                {
              ((props.AboutCard || []).map((data, index) => 
                                    <li key={data.id}>
                                        <span>
                                            <i className={`flaticon-${data.icon_class}`}></i>
                                            {data.Title}
                                        </span>
                                    </li>
                                      
                                      ))} 
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