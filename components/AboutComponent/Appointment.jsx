import React from 'react'

const Appointment = () => {
  return (
   <>
   <section className="appointment-area ptb-100">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="single-fun-fact">
                                    <h3>
                                        <span className="odometer odometer-auto-theme" data-count="2700"><div className="odometer-inside"><span className="odometer-digit"><span className="odometer-digit-spacer">8</span><span className="odometer-digit-inner"><span className="odometer-ribbon"><span className="odometer-ribbon-inner"><span className="odometer-value">2</span></span></span></span></span><span className="odometer-formatting-mark">,</span><span className="odometer-digit"><span className="odometer-digit-spacer">8</span><span className="odometer-digit-inner"><span className="odometer-ribbon"><span className="odometer-ribbon-inner"><span className="odometer-value">7</span></span></span></span></span><span className="odometer-digit"><span className="odometer-digit-spacer">8</span><span className="odometer-digit-inner"><span className="odometer-ribbon"><span className="odometer-ribbon-inner"><span className="odometer-value">0</span></span></span></span></span><span className="odometer-digit"><span className="odometer-digit-spacer">8</span><span className="odometer-digit-inner"><span className="odometer-ribbon"><span className="odometer-ribbon-inner"><span className="odometer-value">0</span></span></span></span></span></div></span>
                                        <span className="sign-icon ms-2">+</span>
                                    </h3>
                                    <p>Care Locations</p>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <div className="single-fun-fact">
                                    <h3>
                                        <span className="odometer odometer-auto-theme" data-count="2.7"><div className="odometer-inside"><span className="odometer-digit"><span className="odometer-digit-spacer">8</span><span className="odometer-digit-inner"><span className="odometer-ribbon"><span className="odometer-ribbon-inner"><span className="odometer-value">2</span></span></span></span></span><span className="odometer-formatting-mark odometer-radix-mark">.</span><span className="odometer-digit"><span className="odometer-digit-spacer">8</span><span className="odometer-digit-inner"><span className="odometer-ribbon"><span className="odometer-ribbon-inner"><span className="odometer-value">7</span></span></span></span></span></div></span>
                                        <span className="sign-icon ms-2">K</span>
                                    </h3>
                                    <p>Virtual Care Solutions</p>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <div className="single-fun-fact">
                                    <h3>
                                        <span className="odometer odometer-auto-theme" data-count="99.60"><div className="odometer-inside"><span className="odometer-digit"><span className="odometer-digit-spacer">8</span><span className="odometer-digit-inner"><span className="odometer-ribbon"><span className="odometer-ribbon-inner"><span className="odometer-value">9</span></span></span></span></span><span className="odometer-digit"><span className="odometer-digit-spacer">8</span><span className="odometer-digit-inner"><span className="odometer-ribbon"><span className="odometer-ribbon-inner"><span className="odometer-value">9</span></span></span></span></span><span className="odometer-formatting-mark odometer-radix-mark">.</span><span className="odometer-digit"><span className="odometer-digit-spacer">8</span><span className="odometer-digit-inner"><span className="odometer-ribbon"><span className="odometer-ribbon-inner"><span className="odometer-value">6</span></span></span></span></span></div></span>
                                        <span className="sign-icon ms-2">%</span>
                                    </h3>
                                    <p>Connections Success Rate</p>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <div className="single-fun-fact">
                                    <h3>
                                        <span className="odometer odometer-auto-theme" data-count="30"><div className="odometer-inside"><span className="odometer-digit"><span className="odometer-digit-spacer">8</span><span className="odometer-digit-inner"><span className="odometer-ribbon"><span className="odometer-ribbon-inner"><span className="odometer-value">3</span></span></span></span></span><span className="odometer-digit"><span className="odometer-digit-spacer">8</span><span className="odometer-digit-inner"><span className="odometer-ribbon"><span className="odometer-ribbon-inner"><span className="odometer-value">0</span></span></span></span></span></div></span>
                                        <span className="sign-icon ms-2">+</span>
                                    </h3>
                                    <p>Award Winning</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="appointment-form">
                            <div className="content">
                                <span>Call to Action</span>
                                <h3>Make An Appointment</h3>
                            </div>
                            <form>
                                <div className="row">
                                    <div className="col-lg-6 col-sm-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="Name" placeholder="Enter Your Name"/>
                                            <i className="flaticon-user"></i>
                                        </div>
                                    </div>
        
                                    <div className="col-lg-6 col-sm-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="Email" placeholder="Enter Email"/>
                                            <i className="flaticon-email"></i>
                                        </div>
                                    </div>
        
                                    <div className="col-lg-6 col-sm-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="Phone" placeholder="Enter Phone Number"/>
                                            <i className="flaticon-call"></i>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-6 col-sm-6">
                                        <div className="form-group">
                                            <select style={{display: 'none'}}>
                                                <option value="">Select Category</option>
                                                <option value="">Cardiologists</option>
                                                <option value="">Dermatologists</option>
                                                <option value="">Endocrinologists</option>
                                                <option value="">Gastroenterologists</option>
                                                <option value="">Allergists</option>
                                                <option value="">Immunologists</option>
                                            </select><div className="nice-select" tabIndex=""><span className="current">Select Category</span><ul className="list"><li data-value="" className="option selected">Select Category</li><li data-value="" className="option">Cardiologists</li><li data-value="" className="option">Dermatologists</li><li data-value="" className="option">Endocrinologists</li><li data-value="" className="option">Gastroenterologists</li><li data-value="" className="option">Allergists</li><li data-value="" className="option">Immunologists</li></ul></div>	
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-sm-6">
                                        <div className="form-group">
                                            <select style={{display: 'none'}}>
                                                <option value="">Select Doctor</option>
                                                <option value="">Dr. James Adult</option>
                                                <option value="">Dr. James Alison</option>
                                                <option value="">Dr. Peter Adlock</option>
                                                <option value="">Dr. Jelin Alis</option>
                                                <option value="">Dr. Josh Taylor</option>
                                                <option value="">Dr. Steven Smith</option>
                                            </select><div className="nice-select" tabIndex=""><span className="current">Select Doctor</span><ul className="list"><li data-value="" className="option selected">Select Doctor</li><li data-value="" className="option">Dr. James Adult</li><li data-value="" className="option">Dr. James Alison</li><li data-value="" className="option">Dr. Peter Adlock</li><li data-value="" className="option">Dr. Jelin Alis</li><li data-value="" className="option">Dr. Josh Taylor</li><li data-value="" className="option">Dr. Steven Smith</li></ul></div>	
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-sm-6">
                                        <div className="form-group">
                                            <div className="input-group date" id="datetimepicker">
                                                <input type="text" className="form-control" placeholder="Date"/>
                                                <span className="input-group-addon"></span>
                                            </div>	
                                            <i className="flaticon-calendar"></i>
                                        </div>
                                    </div>
                                    
                                    <div className="col-12">
                                        <div className="appointment-btn">
                                            <button type="submit" className="default-btn">
                                                Confirm Appointment
                                                <span></span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
   </>
  )
}

export default Appointment