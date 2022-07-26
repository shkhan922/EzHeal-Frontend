import React, { useEffect, useState } from 'react'
import baseUrl from '../../lib/api'
import Image from 'next/image'
import index from '~/pages/about'






const MainBanner = () => {
   
  const[titles, setTitles]= useState([])
  

  const fetchPromotionBanners = async () => {
    const response = await fetch(`https://ezheal.in/api/home-banners?populate=deep`)
    const data = await response.json()
    const response1 = data
    console.log(response1)
    
    console.log(response1.data[0])
    setTitles(response1.data)
  }

  useEffect(() => {
  
    fetchPromotionBanners()
  }, [])

  titles.map(title => console.log(title.attributes.bg_banner.data[0].attributes.formats.large.url))
  
  
  return (
    <>
    {titles.map(title => <div style={{
    backgroundImage: `url(${`https://ezheal.in`+title.attributes.bg_banner.data[0].attributes.formats.large.url})`,
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
                
                 
                 <h1>{title.attributes.home_title}</h1>
                 <p>{title.attributes.Description}</p>            
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
)}
    </>
  )
}


export default MainBanner

// export async function getStaticProps() {
//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library
//   const res = await fetch('https://pokeapi.co/api/v2/pokemon/');
//   const posts = await res.json();
//   console.log(posts);
//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       posts,
//     },
//   }
// }
