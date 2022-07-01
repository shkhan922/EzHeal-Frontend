import React from 'react'
import Footer from '~/components/ReusableComponent/Footer'
import Header from '~/components/ReusableComponent/Header'
import Hero from '~/components/ReusableComponent/Hero'
import SignUpForm from '~/components/SignUpComponent/SignUpForm'

const index = () => {
  return (
    <>
        <Header/>
        <Hero title='SignUp' bg='item-bg-2'/>
        <SignUpForm/>
        <Footer/>
    </> 
  )
}

export default index