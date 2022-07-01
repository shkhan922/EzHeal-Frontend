import React from 'react'
import Contact from '~/components/ContactComponent/contact'
import Hero from '~/components/ReusableComponent/Hero'
import Footer from '~/components/ReusableComponent/Footer'
import Header from '~/components/ReusableComponent/Header'

const index = () => {
  return (
    <>
        <Header/>
        <Hero bg='item-bg-3' title='Contact'/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default index