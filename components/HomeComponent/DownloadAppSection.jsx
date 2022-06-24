import Image from 'next/image'
import React from 'react';
import MobileImg from '../../public/static/img/mobile.png';
import PlayStoreImg from "../../public/static/img/play-store.png"

const DownloadAppSection = () => {
    return (
        <>
            <section className="testimonials-area pb-100">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="testimonials-image">
                                <div className="image">
                                    <Image src={MobileImg} alt="image" />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="testimonials-slider owl-carousel owl-theme owl-loaded owl-drag">
                                <div className="testimonials-item">
                                    <div className="content">
                                        <h3>Download the EZscan app</h3>

                                        <p>
                                            Access video consultation with India’s top doctors on the
                                            EZscan app. Connect with doctors online, available 24/7,
                                            from the comfort of your home.
                                        </p>

                                        <div className="box">
                                            <a href="#">
                                                <Image src={PlayStoreImg} alt="play-store" />
                                            </a>
                                        </div>
                                    </div>
                                </div></div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default DownloadAppSection