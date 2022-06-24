import React from 'react'

const MainBanner = () => {
  return (
    <>
         <div className="main-banner bg-two">
      <div className="d-table">
        <div className="d-table-cell">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div className="main-banner-content">
                                       
                
              <h1>Faster, Accurate Convenient, Safe</h1>
                  <p style={{backgroundColor:'#00beff'}}></p><p>EZheal&nbsp;provides Easy, Safe, Convenient, Accurate and Novel treatment and scanning solutions. We focus on back pain, knee pain, physical trauma, neuro diseases which requires faster response for treatment and continuum care at home. We connect Physicians, Imaging centers, Physiotherapy and Dieticians on a single platform.&nbsp; We pioneered fast scanning in MRI for your convenience, AI analysis for scans and treatment</p>

<p>&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;</p>
                  <p></p>
            
              
               
                  
                </div>

                <div className="banner-form">
                  <form>
                    <div className="row align-items-center">
                         <div className="col-lg-3 col-md-6">
                       <div className="form-group">
                          <select style={{display: "none"}}>
                            <option>Category</option>
                            <option value="">Cardiologists</option>
                            <option value="">Dermatologists</option>
                            <option value="">Endocrinologists</option>
                          </select><div className="nice-select" tabIndex="0"><span className="current">Category</span><ul className="list"><li data-value="Category" className="option selected">Category</li><li data-value="" className="option">Cardiologists</li><li data-value="" className="option">Dermatologists</li><li data-value="" className="option">Endocrinologists</li></ul></div>
                        </div>

                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="form-group">
                          <select style={{display: "none"}}>
                            <option>Specialist</option>
                            <option value="">Dr. James Adult</option>
                            <option value="">Dr. James Alison</option>
                            <option value="">Dr. Peter Adlock</option>
                          </select><div className="nice-select" tabIndex="0"><span className="current">Specialist</span><ul className="list"><li data-value="Specialist" className="option selected">Specialist</li><li data-value="" className="option">Dr. James Adult</li><li data-value="" className="option">Dr. James Alison</li><li data-value="" className="option">Dr. Peter Adlock</li></ul></div>
                        </div>
                      </div>
                     
                      <div className="col-lg-3 col-md-6">
                        <div className="form-group">
                          <input type="date" className="form-control"/>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="form-group">
                          <button type="submit" className="banner-form-btn">
                            Search
                            <i className="fa fa-search"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>

                <div className="banner-btn">
                  <a href="javascript:void(0)" className="default-btn">
                    Clinician Appointment
                    <span></span>
                  </a>
                  <a href="javascript:void(0)" className="default-btn">
                    Diagnostic Booking
                    <span></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default MainBanner