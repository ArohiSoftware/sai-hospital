import React from 'react'
import Navbar from '../../component/Navbar/Navbar'
import HeroSection from '../../component/HeroSection/HeroSection'
import MedicalFacility from '../../component/MedicalFacility/MedicalFacility'
import Footer from '../../component/Footer/Footer'

function Home() {
  return (
    <div>
   <Navbar/>
   <HeroSection/>
   <MedicalFacility/>
   <Footer/>
    </div>
  )
}

export default Home
