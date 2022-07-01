import React from 'react'

const Contact = () => {
  return (
    <>
        <section className="contact-area ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="contact-info-box">
                            <div className="icon">
                                <i className="flaticon-email"></i>
                            </div>

                            <h3>Email Here</h3>
                            <p><a href="mailto:contact@ezscan.in">contact@ezscan.in</a></p>
                            <p><a href="mailto:info@ezscan.com">info@ezscan.com</a></p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="contact-info-box">
                            <div className="icon">
                                <i className="flaticon-pin"></i>
                            </div>

                            <h3>Location Here</h3>
                            <p>2750 Quadra Street Victoria, <br/> New York, Canada</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                        <div className="contact-info-box">
                            <div className="icon">
                                <i className="flaticon-phone-call"></i>
                            </div>

                            <h3>Call Here</h3>
                            <p><a href="tel:+919560933344">+919560933344</a></p>
                            <p><a href="tel:+919560933344">+919560933344</a></p>
                        </div>
                    </div>
                </div>
                
                <div className="section-title">
                    <span>Contact Us</span>
                    <h2>Drop us Message for any Query</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                
                <div className="contact-form">
                    <form method="post">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="form-group">
                                    <input type="text" name="name" className="form-control" required="" data-error="Please enter your name" placeholder="Name"/>
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="form-group">
                                    <input type="email" name="email" id="email" className="form-control" required="" data-error="Please enter your email" placeholder="Email"/>
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                             <div className="col-lg-6 col-md-12">
                                <div className="form-group">
                                    <input type="text" name="subject" id="phone_number" required="" data-error="Please enter your subject" className="form-control" placeholder="Subject"/>
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>


                            <div className="col-lg-6 col-md-12">
                                <div className="form-group">
                                    <input type="text" name="number" id="phone_number" required="" data-error="Please enter your number" className="form-control" placeholder="Phone"/>
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>

                           
                            <div className="col-lg-12 col-md-12">
                                <div className="form-group">
                                    <textarea name="message" className="form-control" id="message" cols="30" rows="5" required="" data-error="Write your message" placeholder="Your Message"></textarea>
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <button type="submit" className="default-btn">
                                    Send Message
                                    <span></span>
                                </button>
                                <div id="msgSubmit" className="h3 text-center hidden"></div>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </>
  )
}

export default Contact