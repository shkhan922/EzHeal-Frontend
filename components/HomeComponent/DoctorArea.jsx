import React from 'react'

const DoctorArea = (props) => {
  return (
    <section className="doctor-area pt-100 pb-70">
      <div className="container-fluid">
        <div className="section-title">
          <div className="section-title">
            <span>Our clinician</span>
            <h2>{props.ClinicH1}</h2>
            <p>
            {props.ClinicPara}
            </p>
          </div>
        </div>

        <div className="row">
              

            
          </div>
      </div>
    </section>
  )
}

export default DoctorArea