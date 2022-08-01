import React from 'react';
import Image from 'next/image';;
import consultImg from '../../public/static/img/consult.jpg'
import { baseUrlImage } from '~/lib/api'

const ConsultArea = (props) => {
  return (
    <>
    <section className="consult-area ptb-100">
            <div className="container-fluid pl-0">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className="consult-image">
                            <Image src={`${baseUrlImage}${props.consultimg}`} width={1000} height={577} alt="image"/>
                        </div>
                    </div>

                    <div className="col-lg-5">
                        <div className="consult-content">
                            <span>Online Consult</span>
                            <h3>{props.consultH1}</h3>
                            <p>{props.consultpara}</p>
                            {
              ((props.ConsultCard || []).map((data, index) =>
                            <ul className="list">
               
                                <li key={data.id}>
                                    <i className={`flaticon-${data.icon_class}`}></i>
                                    {data.title}
                                </li>
                                {/* <li>
                                    <i className="flaticon-check-1"></i>
                                    Easily book appointments and renew prescriptions
                                </li>
                                <li>
                                    <i className="flaticon-check-1"></i>
                                    Skip unnecessary trips to the ER or urgent care
                                </li>
                                <li>
                                    <i className="flaticon-check-1"></i>
                                    Have a Remote Visit with your primary care provider over video
                                </li>
                                <li>
                                    <i className="flaticon-check-1"></i>
                                    Message with your provider
                                </li>
               */}
                            </ul>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default ConsultArea