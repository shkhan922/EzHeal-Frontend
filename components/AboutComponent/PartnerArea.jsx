import React from 'react';
import Image from 'next/image';
import image1 from '../../public/static/img/partner/1.jpg'
import image2 from '../../public/static/img/partner/2.jpg'
import image3 from '../../public/static/img/partner/3.jpg'
import image4 from '../../public/static/img/partner/4.jpg'
import image5 from '../../public/static/img/partner/5.jpg'
import image6 from '../../public/static/img/partner/6.jpg'
import image7 from '../../public/static/img/partner/7.jpg'

const PartnerArea = () => {
  return (
    <>
        <section className="partner-area pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span>Partners</span>
                    <h2>Featured Customer &amp; Partners</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse</p>
                </div>

                <div className="partner-list">
                    <div className="partner-item">
                        <a href="partner.html">
                            <Image src={image1} alt="image"/>
                        </a>
                    </div>

                    <div className="partner-item">
                        <a href="partner.html">
                            <Image src={image2} alt="image"/>
                        </a>
                    </div>

                    <div className="partner-item">
                        <a href="partner.html">
                            <Image src={image3} alt="image"/>
                        </a>
                    </div>

                    <div className="partner-item">
                        <a href="partner.html">
                            <Image src={image4} alt="image"/>
                        </a>
                    </div>

                    <div className="partner-item">
                        <a href="partner.html">
                            <Image src={image5} alt="image"/>
                        </a>
                    </div>


                    <div className="partner-item">
                        <a href="partner.html">
                            <Image src={image6} alt="image"/>
                        </a>
                    </div>

                    <div className="partner-item">
                        <a href="partner.html">
                            <Image src={image7} alt="image"/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default PartnerArea