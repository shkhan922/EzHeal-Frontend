import React from 'react';
import Header from '~/components/ReusableComponent/Header'
import PageTitleArea from '~/components/AboutComponent/pageTitleArea'
import AboutArea from '~/components/AboutComponent/AboutArea';
import DoctorArea from '~/components/AboutComponent/DoctorArea';
import Appointment from '~/components/AboutComponent/Appointment';
import PartnerArea from '~/components/AboutComponent/PartnerArea';
import ConsultArea from '~/components/AboutComponent/ConsultArea';
import Footer from '~/components/ReusableComponent/Footer';


function index() {
  return (
    <>
     <Header/>
     <PageTitleArea/>
     <AboutArea/>
     <DoctorArea/>
     <Appointment/>
     <PartnerArea/>
     <ConsultArea/>
     <Footer/>
    </>
   

  )
}

export default index