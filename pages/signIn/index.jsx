import React from 'react'
import Footer from '~/components/ReusableComponent/Footer'
import Header from '~/components/ReusableComponent/Header'
import Hero from '~/components/ReusableComponent/Hero'
import SignInForm from '~/components/SignInComponent/SignInForm'

const Index = () => {
  return (
    <>
        <Header/>
        {/* <Hero title='Sign In' bg='item-bg-2'/> */}
        <SignInForm/>
        <Footer/>
    </> 
  )
}

export default Index