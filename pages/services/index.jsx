import React from 'react'
import Header from '~/components/ReusableComponent/Header'
import MainBanner from '~/components/ServicesComponent/MainBanner'
import ServicesSection from '~/components/ServicesComponent/ServicesSection'

const index = () => {
  return (
    <>
        <Header/>
        <MainBanner/>
        <ServicesSection/>
    </>
  )
}

export default index