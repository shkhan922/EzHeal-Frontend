import React, { useEffect, useState } from 'react'
import Image from 'next/image'
//import Backpain from '../../public/static/img/partner/BackPain.png'
import jointpain from '../../public/static/img/partner/jointpain.png'
import Kneepain from '../../public/static/img/partner/Kneepain.png'
import MusclePain from '../../public/static/img/partner/MusclePain.png'
import NeckPain from '../../public/static/img/partner/NeckPain.png'
import TendonPain from '../../public/static/img/partner/TendonPain.png'
import { baseUrl,baseUrlImage } from '../../lib/api'


const PartnerSection = (props) => {

  // const[titles, setTitles]= useState([])
  

  // const fetchPromotionServices = async () => {
  //   const param = `home-pages?populate=deep`
  //   const response = await fetch(`${baseUrl}/${param}`)
  //   const data = await response.json()
  //   const response1 = data.data
    
  //   setTitles(response1)
  //   // const Backpain = 'http://localhost1337'+response1.attributes.image_item.image.data[0].attributes.format.small.url
  // }

  // useEffect(() => {
  
  //   fetchPromotionServices()
  // }, [])


  return (
    <>
    {/* {titles.map(title => */}

    
    <section className="partner-area pt-100 pb-70">

      <div className="container">
        <div className="section-title">
          
          <h2>{props.consulth1}</h2>
          <p>
          {props.consult_subh2}
          </p>
        </div>
        
        <div className="row">
        {((props.ConsultImages || []).map((data, index) => 
          <div key={data.id} className="col-lg-2 col-md-2 col-sm-3">
          
            <div className="partner-item" style={{textAlign: "center"}}>
              <a href="#">
                <Image src={`${baseUrlImage}${data.image.data[0].attributes.url}`} alt="image" width= {125}  height= {100}/>
                <p className="matx mt-2" style={{fontSize: '13px', fontWeight: '600', textAlign: 'center'}}>{data.name}</p>
                <h5 style={{fontSize: '15px', textAlign: "center"}}>CONSULT NOW</h5>
              </a>
            </div>
          </div>
          ))
        }
      {/*
           <div className="col-lg-2 col-md-2 col-sm-3 ">
            <div className="partner-item" style={{textAlign: "center"}}>
              <a href="#">
                 <Image src={jointpain} alt="image"  width= {125} height={100} />
              <p className="matx" style={{fontSize: '13px' ,fontWeight: '600' ,textAlign: "center"}}>
                Knee Pain
              </p>
              <h5 style={{fontSize: '15px' ,textAlign: "center"}}>CONSULT NOW</h5>
           </a>
              
           </div>
           </div>
          
          <div className="col-lg-2 col-md-2 col-sm-3">
            <div className="partner-item" style={{textAlign: "center"}}>
              <a href="#">
                 <Image src={Kneepain} alt="image" width= {125} height={100} />
              <p className="matx" style={{fontSize: '13px', fontWeight: '600' ,textAlign: "center"}}>
               Muscle Pain
              </p>
              <h5 style={{fontSize: '15px', textAlign: "center" }}>CONSULT NOW</h5>
            </a>
              
            </div>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-3">
            <div className="partner-item" style={{textAlign: "center"}}>
              <a href="#">
                 <Image src={MusclePain} alt="image" width= {125} height={100}/>
              <p className="matx" style={{fontSize: '13px', fontWeight: '600' ,textAlign: "center"}}>
              Tendon and Ligament Pain
              </p>
              <h5 style={{fontSize: '15px',textAlign: "center"}}>CONSULT NOW</h5>
            </a>        
            </div>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-3">
            <div className="partner-item" style={{textAlign: "center"}}>
              <a href="#">
                 <Image src={NeckPain} alt="image" width= {125} height={100} />
              <p className="matx" style={{fontSize: '13px', fontWeight: '600', textAlign: "center"}}>
               Back Pain
              </p>
              <h5 style={{fontSize: '15px', textAlign: "center"}}>CONSULT NOW</h5>
            </a>  
            </div>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-3"> 
            <div className="partner-item" style={{textAlign: "center"}}>
              <a href="#">
                 <Image src={TendonPain} alt="image" width= {125} height={100}/>
              <p className="matx" style={{fontSize: '13px', fontWeight: '600', textAlign: "center"}}>
               Neck Pain
              </p>
              <h5 style={{fontSize: '15px', textAlign: "center"}}>CONSULT NOW</h5>
            </a>
              
            </div>
          </div> */}
        </div>
      </div>
    </section>
    {/* )} */}
    </>
    
  )
}

export default PartnerSection