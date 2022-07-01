import React from 'react'
import Header from '~/components/ReusableComponent/Header'
import MainBanner from '~/components/ServicesComponent/MainBanner'
import ServicesSection from '~/components/ServicesComponent/ServicesSection'
import StepThree from '~/components/ServicesComponent/StepThree'
import Appointment from '~/components/AboutComponent/Appointment';
import ConsultArea from '~/components/AboutComponent/ConsultArea';
import Footer from '~/components/ReusableComponent/Footer';

const index = () => {
  return (
    <>
        <Header/>
        <MainBanner/>
        <ServicesSection/>
        <StepThree/>
        <Appointment/>
     <ConsultArea/>
     <Footer/>
    </>
  ) 
}

export default index