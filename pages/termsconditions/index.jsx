import React from 'react';
import Footer from '~/components/ReusableComponent/Footer';
import Hero from '~/components/ReusableComponent/Hero';
import Header from '~/components/ReusableComponent/Header';
import Content from '~/components/TermConditions/Content';

const index = () => {
  return (
    <>
        <Header/>
        <Hero bg='item-bg-2' title='Terms & Conditions'/>
        <Content/>
        <Footer/>
    </>
  )
}

export default index