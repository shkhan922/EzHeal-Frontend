import React from 'react';
import Image from 'next/image';

import { baseUrlImage } from '~/lib/api'

const PartnerArea = (props) => {
  return (
    <>
        <section className="partner-area pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span>Partners</span>
                    <h2>{props.PartnerH1}</h2>
                    <p>{props.Partnerpara}</p>
                </div>
               
                <div  className="partner-list">
                {
              ((props.partimgcard || []).map((data, index) =>
                    <div key={data.id} className="partner-item">
                        <a href="partner.html">
                            <Image src={`${baseUrlImage}${data.img.data.attributes.url}`} width={220} height={150}alt="image"/>
                        </a>
                    </div>))}
{/* 
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
                    </div> */}
                </div>
            </div>
              
        </section>
    </>
  )
}

export default PartnerArea