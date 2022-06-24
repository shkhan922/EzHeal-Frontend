import React from 'react'
import Image from 'next/image'
import Backpain from '../../assets/img/partner/BackPain.png'
import Jointpain from '../../assets/img/partner/jointpain.png'
import Kneepain from '../../assets/img/partner/Kneepain.png'
import MusclePain from '../../assets/img/partner/MusclePain.png'
import NeckPain from '../../assets/img/partner/NeckPain.png'
import TendonPain from '../../assets/img/partner/TendonPain.png'

const PartnerSection = () => {
  return (
    <section className="partner-area pt-100 pb-70">
      <div className="container">
        <div className="section-title">
          
          <h2>Consult top doctors online for any health concern</h2>
          <p>
            Private online consultations with verified doctors in all
            specialists
          </p>
        </div>
        <div className="row">
          <div className="col-lg-2 col-md-2 col-sm-3">
            <div className="partner-item" style={{textAlign: "center"}}>
              <a href="#">
                <Image src={Backpain} alt="image" width= {125}  height= {100}/>
                <p className="matx mt-2" style={{fontSize: '13px', fontWeight: '600', textAlign: 'center'}}>
                  Joint Pain
                </p>
                <h5 style={{fontSize: '15px', textAlign: "center"}}>CONSULT NOW</h5>
              </a>
            </div>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-3 ">
            <div className="partner-item" style={{textAlign: "center"}}>
              <a href="#">
                 <Image src={Jointpain} alt="image"  width= {125} height={100} />
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
          </div>
        </div>
      </div>
    </section>
  )
}

export default PartnerSection