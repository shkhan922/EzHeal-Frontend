import React from 'react';
import Header from '~/components/ReusableComponent/Header'
import AboutArea from '~/components/AboutComponent/AboutArea';
import DoctorArea from '~/components/AboutComponent/DoctorArea';
import Appointment from '~/components/AboutComponent/Appointment';
import PartnerArea from '~/components/AboutComponent/PartnerArea';
import ConsultArea from '~/components/AboutComponent/ConsultArea';
import Footer from '~/components/ReusableComponent/Footer';
import Hero from '~/components/ReusableComponent/Hero';


function Index({posts}) {

  
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
