import React from 'react'

import Section1 from './Section1';
import Section2 from './Section2'
import Section4 from './Section4'
import Section3 from './Section3'
import Section5 from './Section5'
import Carousel from './Carousel'
import Footer from './Footer';
export default function Home() {
  return (
      <div className='animated fadeIn'>
       <Section1 />
       <Section2 />
       <Section3 />
       <Section4 />
       <Carousel />
       <Section5 />
       <Footer />
      </div>
  )
}

