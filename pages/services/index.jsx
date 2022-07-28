import React from 'react'
import Header from '~/components/ReusableComponent/Header'
import ServicesSection from '~/components/ServicesComponent/ServicesSection'
import StepThree from '~/components/ServicesComponent/StepThree'
import Appointment from '~/components/AboutComponent/Appointment';
import ConsultArea from '~/components/AboutComponent/ConsultArea';
import Footer from '~/components/ReusableComponent/Footer';
import Hero from '~/components/ReusableComponent/Hero'

const Index = () => {
  return (
    <>
        <Header/>
        <Hero bg='item-bg-6' title='Services'/>
        <ServicesSection/>
        <StepThree/>
        <Appointment/>
     <ConsultArea/>
     <Footer/>
    </>
  ) 
}

export default Index