import React from 'react'
import Hero from '../components/sections/Hero'
import Brands from '../components/sections/Brands'
import Testimonials from '../components/sections/Testimonials'
import Subscribe from '../components/sections/Subscribe'
import HowDoesItWork from '../components/sections/HowDoesItWork'
import MoneyTransfer from '../components/sections/MoneyTransfer'
import ReceivePayment from '../components/sections/ReceivePayment'
import Faq from '../components/sections/Faq'
import Futures from '../components/sections/Futures'


const HomePage = () => {
  
  return (
    <>
      <Hero />
     
      <Brands />
      <Futures/>
      <HowDoesItWork />
      <MoneyTransfer />
      <ReceivePayment />
      <Testimonials />
      <Faq />
      <Subscribe />
    </>
  )
}

export default HomePage