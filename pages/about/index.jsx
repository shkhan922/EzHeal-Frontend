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
import Link from 'next/link';

function Index({ posts }) {

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
      <Header />
      <Hero bg='item-bg-1' title='About' />
      <section className="doctor-area pt-100">
        <div className="container-fluid">
          <div className="section-title">
            <div className="section-title">
              <span>Online Consultation</span>
              <h2 className='mb-0'>Consult Expert Doctors Online For Your Health Issues</h2>
            </div>
            <Link href="/about/chat"><button className='btn default-btn'>Consult Now</button></Link>
          </div>
        </div>
      </section>
      <AboutArea AboutH1={AboutH1} AboutCard={AboutCard} AboutImg={AboutImg} />
      <DoctorArea DoctorH1={DoctorH1} DoctorPara={DoctorPara} DoctorCard={DoctorCard} />
      <Appointment />
      <PartnerArea PartnerH1={PartnerH1} Partnerpara={Partnerpara} partimgcard={partimgcard} />
      <ConsultArea consultH1={consultH1} consultpara={consultpara} consultimg={consultimg} ConsultCard={ConsultCard} />
      <Footer />
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
