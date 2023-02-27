import React from 'react'
import Banner from './Banner'
import Footer from './Footer'
import Navbar from './Navbar'
import Slide1 from './Slide1'
import Slide2 from './Slide2'
import Vision from './Vision'

const Home = () => {
  return (
   <>
   <Navbar/>
   <Banner/>
   <Vision/>
   <Slide1/>
   <Slide2/>
   <Footer/>
   </>
  )
}

export default Home;