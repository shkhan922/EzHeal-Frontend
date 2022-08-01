import React from 'react'
import Contact from '~/components/ContactComponent/contact'
import Hero from '~/components/ReusableComponent/Hero'
import Footer from '~/components/ReusableComponent/Footer'
import Header from '~/components/ReusableComponent/Header'
import { baseUrl, baseUrlImage } from '~/lib/api'

const Index = ({posts}) => {

  const contactH1 = posts[0].attributes.contactH1
  const contactpara = posts[0].attributes.contactpara
  const email1 = posts[0].attributes.email1
  const email2 = posts[0].attributes.email2
  const Phone1 = posts[0].attributes.Phone1
  const Phone2 = posts[0].attributes.Phone2
  const address = posts[0].attributes.address
  return (
    <>
        <Header/>
        <Hero bg='item-bg-3' title='Contact'/>
        <Contact contactH1={contactH1} contactpara={contactpara} email1={email1} email2={email2} Phone1={Phone1} Phone2={Phone2} address={address} />
        <Footer/>
    </>
  )
}

export default Index

export async function getServerSideProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const param = `contact-pages?populate=deep`
  const res = await fetch(`${baseUrl}/${param}`);
  const posts = await res.json();

  console.log(posts.data)
  
  
  
  return {
    props: {
      posts: posts.data,
    },
  }
}

