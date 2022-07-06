import React from 'react';
import Content from '~/components/PrivacyPolicy/Content';
import Footer from '~/components/ReusableComponent/Footer';
import Header from '~/components/ReusableComponent/Header';
import Hero from '~/components/ReusableComponent/Hero';

const index = () => {
  return (
    <>
        <Header/>
        <Hero bg='item-bg-3' title='Privacy Policy'/>
        <Content/>
        <Footer/>
    </>
  )
}

export default index