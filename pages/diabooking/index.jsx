import React from 'react'
import Footer from '~/components/ReusableComponent/Footer'
import Header from '~/components/ReusableComponent/Header'
import Appointment from '~/components/AboutComponent/Appointment'

function index() {
  return (
   <div>

    <Header/>
    <Appointment/>
    <Footer/>
   </div>
  )
}

export default index