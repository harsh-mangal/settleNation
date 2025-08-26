import React from 'react'
import HeroCarousel from '../components/HeroCarousel'
import WorkProgress from '../components/WorkProgress'
import WhyChooseUs from '../components/WhyChooseUs'
import CountriesWeSupport from '../components/CountriesWeSupport'

const Home = () => {
  return (
    <div>
      <HeroCarousel/>
      <WorkProgress/>
      <WhyChooseUs/>
      <CountriesWeSupport/>
    </div>
  )
}

export default Home