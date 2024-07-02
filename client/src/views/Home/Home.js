import React from 'react'
import Navbar from '../../component/Navbar/Navbar'
import HeroSection from '../../component/HeroSection/HeroSection'
import MedicalFacility from '../../component/MedicalFacility/MedicalFacility'
import Footer from '../../component/Footer/Footer'
import NewLester from '../../component/NewLester/NewLester'
import CaseStudies from '../../component/CaseStudy/CaseStudy'
import ExpertTeam from '../../component/Team/Team'
import FAQComponent from '../../component/FAQ/FAQ'

function Home() {
  return (
    <div>
   <Navbar/>
   <HeroSection/>
   <MedicalFacility/>
   <CaseStudies/>
   <ExpertTeam/>
   <FAQComponent/>
   <NewLester/>
   
   <Footer/>

    </div>
  )
}

export default Home
