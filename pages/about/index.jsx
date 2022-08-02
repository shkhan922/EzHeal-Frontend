import React from 'react';
import Header from '~/components/ReusableComponent/Header'
import AboutArea from '~/components/AboutComponent/AboutArea';
import DoctorArea from '~/components/AboutComponent/DoctorArea';
import Appointment from '~/components/AboutComponent/Appointment';
import PartnerArea from '~/components/AboutComponent/PartnerArea';
import ConsultArea from '~/components/AboutComponent/ConsultArea';
import Footer from '~/components/ReusableComponent/Footer';
import Hero from '~/components/ReusableComponent/Hero';
import { baseUrl, baseUrlImage } from '~/lib/api'

function Index({posts}) {

  const AboutH1 = posts[0].attributes.AboutH1
  const AboutCard = posts[0].attributes.AboutCard
  const AboutImg = posts[0].attributes.AboutImg
  const DoctorH1 = posts[0].attributes.DoctorH1
  const DoctorPara = posts[0].attributes.DoctorPara
  const DoctorCard = posts[0].attributes.DoctorCard
  const PartnerH1 = posts[0].attributes.PartnerH1
  const Partnerpara = posts[0].attributes.Partnerpara
  const partimgcard = posts[0].attributes.partimgcard
  const consultH1 = posts[0].attributes.consultH1
  const consultpara = posts[0].attributes.consultpara
  const consultimg = posts[0].attributes.consultimg.data.attributes.url
  const ConsultCard = posts[0].attributes.ConsultCard
  console.log(consultimg)
  return (
    <>
     <Header/>
     <Hero bg='item-bg-1' title='About'/>
     <AboutArea AboutH1={AboutH1} AboutCard={AboutCard} AboutImg={AboutImg}/>
     <DoctorArea DoctorH1={DoctorH1} DoctorPara={DoctorPara} DoctorCard={DoctorCard}/>
     <Appointment/>
     <PartnerArea PartnerH1={PartnerH1} Partnerpara={Partnerpara} partimgcard={partimgcard}/>
     <ConsultArea consultH1={consultH1} consultpara={consultpara} consultimg={consultimg} ConsultCard={ConsultCard}/>
     <Footer/>
    </>
   

  )
}

export default Index

export async function getServerSideProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const param = `about-pages?populate=deep`
  const res = await fetch(`${baseUrl}/${param}`);
  const posts = await res.json();

  console.log(posts.data)
  
  
  
  return {
    props: {
      posts: posts.data,
    },
  }
}
