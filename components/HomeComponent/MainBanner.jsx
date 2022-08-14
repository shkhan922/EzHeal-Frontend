import React, { useEffect, useState } from 'react'

import Image from 'next/image'
import index from '~/pages/about'
import { baseUrl,baseUrlImage } from '../../lib/api'






const MainBanner = (props) => {
   
  // const[titles, setTitles]= useState([])
  

  // const fetchPromotionBanners = async () => {
  //   const param = `home-pages?populate=deep`
  //   const response = await fetch(`${baseUrl}/${param}`)
  //   const data = await response.json()
  //   const response1 = data
  //   setTitles(response1.data)
  // }

  // useEffect(() => {
  
  //   fetchPromotionBanners()
  // }, [])

  
  
  return (
    <>
    <div style={{
    backgroundImage: `url(${props.imgurl})`,
    position: 'relative',
    zIndex:'1',
    backgroundPosition:'center center',
    backgroundSize:'cover',
    backgroundRepeat:'no-repeat',
    backgroundAttachment:'fixed',
    
  }}>
    
     
      <div className="d-table">
        <div className="d-table-cell">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div className="main-banner-content">
                
                 
                 <h1>{props.bannerh1}</h1>
                 <p>{props.bannerpara}</p>            
               </div>
{/*     
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
                </div> */}

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
