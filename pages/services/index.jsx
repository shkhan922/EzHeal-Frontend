import React from 'react'
import Header from '~/components/ReusableComponent/Header'
import ServicesSection from '~/components/ServicesComponent/ServicesSection'
import StepThree from '~/components/ServicesComponent/StepThree'
import Appointment from '~/components/AboutComponent/Appointment';
import ConsultArea from '~/components/AboutComponent/ConsultArea';
import Footer from '~/components/ReusableComponent/Footer';
import Hero from '~/components/ReusableComponent/Hero'
import { baseUrl, baseUrlImage } from '~/lib/api'


const Index = ({posts}) => {
  
  const ServiceH1 = posts[0].attributes.ServiceH1
  const servicepara = posts[0].attributes.servicepara
  const ServiceCard = posts[0].attributes.ServiceCard
  const steph1 = posts[0].attributes.steph1
  const steppara1 = posts[0].attributes.steppara1
  const steppara2 = posts[0].attributes.steppara2
  const stepimg = posts[0].attributes.stepimg.data.attributes.url
  const consultH1 = posts[0].attributes.consulth1
  const consultpara = posts[0].attributes.consultpara
  const consultimg = posts[0].attributes.consultimg.data.attributes.url
  const ConsultCard = posts[0].attributes.consultcard

  return (
    <>
        <Header/>
        <Hero bg='item-bg-6' title='Services'/>
        <ServicesSection ServiceH1={ServiceH1} servicepara={servicepara} ServiceCard={ServiceCard}/>
        <StepThree steph1={steph1} steppara1={steppara1} steppara2={steppara2} stepimg={stepimg}/>
        <Appointment/>
      <ConsultArea consultH1={consultH1} consultpara={consultpara} consultimg={consultimg} ConsultCard={ConsultCard}/>
     <Footer/>
    </>
  ) 
}

export default Index

export async function getServerSideProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const param = `service-pages?populate=deep`
  const res = await fetch(`${baseUrl}/${param}`);
  const posts = await res.json();

  console.log(posts.data)
  
  
  
  return {
    props: {
      posts: posts.data,
    },
  }
}
