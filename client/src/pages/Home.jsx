import React from 'react'
import HeroCarousel from '../components/HeroCarousel'
import WorkProgress from '../components/WorkProgress'
import WhyChooseUs from '../components/WhyChooseUs'
import CountriesWeSupport from '../components/CountriesWeSupport'

const Home = () => {
  return (
    <div className=' dark:bg-gray-900 text-gray-800 dark:text-gray-200'>
      <HeroCarousel/>
      <WorkProgress/>
      <WhyChooseUs/>
      <CountriesWeSupport/>
    </div>
  )
}

export default Home