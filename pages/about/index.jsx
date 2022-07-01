import React from 'react';
import Header from '~/components/ReusableComponent/Header'
import AboutArea from '~/components/AboutComponent/AboutArea';
import DoctorArea from '~/components/AboutComponent/DoctorArea';
import Appointment from '~/components/AboutComponent/Appointment';
import PartnerArea from '~/components/AboutComponent/PartnerArea';
import ConsultArea from '~/components/AboutComponent/ConsultArea';
import Footer from '~/components/ReusableComponent/Footer';
import Hero from '~/components/ReusableComponent/Hero';


function index() {
  return (
    <>
     <Header/>
     <Hero bg='item-bg-1' title='About'/>
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