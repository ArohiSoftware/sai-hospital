import React from 'react'
import Navbar from '../../component/Navbar/Navbar';
import logo from "./../../assets/images/home images/logo.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import Footer from '../../component/Footer/Footer';
import chooseimage from "./../../assets/images/home images/choose-2.avif"
import over1 from "./../../assets/images/home images/over1.jpg"
import over2 from "./../../assets/images/home images/over2.jpg"
import over3 from "./../../assets/images/home images/over3.webp"
import doctor1 from "./../../assets/images/doctor images/2.webp"
import doctor2 from "./../../assets/images/doctor images/istockphoto-465124678-612x612.jpg";
import review1 from "./../../assets/images/home images/review 1.jpg"
import review2 from "./../../assets/images/home images/review 2.jpeg"
// import review3 from "./../../assets/images/home images/review 3.jpeg"



function Home() {
  return (
    <div>
      <Navbar/>

      <div className="logo">
      <img
        src={logo}
        height="300"
        width="300"
        alt=""
        data-aos="zoom-in-down"
        data-aos-duration="3000"
      />
      <h1 className="text-center" data-aos="zoom-in-down" data-aos-duration="3000">
        Sai Multispecility Hospital
      </h1>
      <h5 className="text-center" data-aos="zoom-in-down" data-aos-duration="3000">
        ❁GENERAL ❁PEDIATRICS ❁BONE DISEASE ❁VIGILANCE ❁SURGICAL
      </h5>
    </div>
    <div>
      {/* Overview Section */}
      <div className="overview">
        <div className="over">
          <h2 data-aos="zoom-out" data-aos-duration="3000">Overview</h2>
          <p data-aos="fade-right" data-aos-duration="3000">
            Welcome to Sai Multispecility Hospital in Shrigonda, Ahmednagar, the original and largest Sai
            Multispecility Hospital campus. Located in the heart of Shrigonda, Ahmednagar — a dynamic city just 90
            minutes East of Pune and Sai Multispecility Hospital has been safely caring for patients from around
            the world for more than 10 years.
          </p>
          <p data-aos="fade-right" data-aos-duration="3000">
            Sai Multispecility Hospital will always be your safe care destination.
          </p>
        </div>
        <div className="images">
          <div className="box">
            <img src={over1} alt="" className="img1 imag" data-aos="fade-left" data-aos-duration="1500" />
          </div>
          <div className="box">
            <img src={over2} alt="" className="img2 imag" data-aos="fade-left" data-aos-duration="1500" />
          </div>
          <div className="box">
            <img src={over3} alt="" className="img3 imag" data-aos="fade-left" data-aos-duration="1500" />
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="choose">
        <img src={chooseimage} alt="" data-aos="zoom-in" data-aos-duration="3000" />
        <div className="why-choose">
          <h2 data-aos="zoom-out" data-aos-duration="3000">Why People Choose Sai Hospital</h2>
          <p data-aos="fade-left" data-aos-duration="3000">
            <span className="text-black fw-bolder">The right answers the first time <br /></span>
            Effective treatment depends on getting the right diagnosis. Our experts diagnose and treat the toughest medical challenges.
          </p>
          <br />
          <p data-aos="fade-left" data-aos-duration="3000">
            <span className="text-black fw-bolder">Top-ranked in Maharashtra</span>
            Sai Multispecility Hospital has more No. 1 rankings than any other hospital in the state according to Maharashtra News & state Report.
            <a href="./../pages/about.html">Learn more about our top-ranked specialties.</a>
          </p>
          <div className="why" data-aos="fade-left" data-aos-duration="3000">
            <a href="./about.html" className="fw-bold">Read More..</a>
          </div>
        </div>
      </div>

      {/* Appointment Section */}
      <div className="appointment mt-5 mb-5">
        <div className="point point1" data-aos="fade-right" data-aos-duration="3000">
          <span className="material-symbols-outlined">error</span>
          <h3 className="fw-bolder" data-aos="zoom-out" data-aos-duration="3000">Appointment and visitor <br /> updates</h3>
          <p>Review campus-specific guidelines and safety measures as you plan your visit.</p>
          <a href="./OPD.HTML">Visitors updates</a>
        </div>
        <div className="point point2" data-aos="fade-right" data-aos-duration="3000" data-aos-delay="500">
          <span className="material-symbols-outlined">vaccines</span>
          <h3 className="fw-bolder" data-aos="zoom-out" data-aos-duration="3000">COVID-19 vaccination <br />guidance</h3>
          <p>State health agencies distribute vaccine supplies and set local availability guidelines.</p>
          <a href="./signin.html">Patient appointment and visitors updates</a>
        </div>
        <div className="point point3" data-aos="fade-right" data-aos-duration="3000" data-aos-delay="900">
          <span className="material-symbols-outlined">travel</span>
          <h3 className="fw-bolder" data-aos="zoom-out" data-aos-duration="3000">How to get here safely</h3>
          <p>Connect to expert Mayo Clinic travel guidance and services.</p>
          <p><a href="https://www.booking.com/flights/index.html?slc=1f;aid=324791;label=&msclkid=2b16d8a4fe891293abebbd7baa10e01a&label=msn-QbyD*2KnEbbovJInpPII1A-80264483112204:tikwd-80264628256967:loc-90:neo:mte:lp149209:dec:qspune%20airport&utm_campaign=Airport%20-%20India&utm_medium=cpc&utm_source=bing&utm_term=QbyD*2KnEbbovJInpPII1A&msclkid=2b16d8a4fe891293abebbd7baa10e01a">Pune Airport</a> is the closest airport to the Rochester campus</p>
        </div>
      </div>

      {/* Doctors Section */}
      <div className="drs mt-5 mb-5">
        <h2 className="doctor text-center" data-aos="zoom-out" data-aos-duration="3000">Our Special Doctors</h2>
        <div className="cards">
          <div className="card card-1" data-aos="flip-right" data-aos-duration="3000" style={{ width: '18rem' }}>
            <img src={doctor1} className="card-img-top" alt="..." height="300" />
            <div className="card-body">
              <h5 className="card-title text-center">Dr. Arun Dhawale</h5>
              <p className="card-text text-center">BHMS</p>
              <button><a href="./doctor.html">view profile</a></button>
            </div>
          </div>
          <div className="card card-2" data-aos="flip-left" data-aos-duration="3000" style={{ width: '18rem' }}>
            <img src={doctor2} className="card-img-top" alt="..." height="300" />
            <div className="card-body">
              <h5 className="card-title text-center">Dr. Shraddha Dhawale</h5>
              <p className="card-text text-center">BHMS, PGDEMS, Cosmetic Care and Tricology</p>
              <button><a href="./doct.html">view profile</a></button>
            </div>
          </div>
        </div>
      </div>

      {/* Review Section */}
      <div className="review mt-5 mb-5">
        <h2 className="text-center" data-aos="zoom-out" data-aos-duration="3000">Review</h2>
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-aos="fade-left" data-aos-duration="3000">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="para">
                <img src={review1} alt="" />
                <p className="w-50 text-center mx-auto mt-5 mb-4">"Recently my father was admitted in Charnock Hospital, New Town Rajarhat. Both my father and I were extremely satisfied with the quality of treatment offered by the doctors and support staff. I would always recommend this hospital to my friends and associates."</p>
                <h5 className="text-center">- Sushmita Sen, Pune</h5>
              </div>
            </div>
            <div className="carousel-item">
              <div className="para">
                <img src={review2} alt="" />
                <p className="w-50 text-center mx-auto mt-5 mb-4">"Last week I had a bike accident near Eco Park. My brother took me to the Emergency of nearby Charnock Hospitals. I was really moved at the prompt attention of the doctor–in-charge and support staff of the department. We are lucky to have such a high-quality hospital in our locality."</p>
                <h5 className="text-center">- Leo Das, Nagpur</h5>
              </div>
            </div>
            <div className="carousel-item">
              <div className="para">
                <img src={review2} alt="" />
                <p className="w-50 text-center mx-auto mt-5 mb-4">"I had come to Kolkata from Delhi to visit my in-laws. I felt ill after I landed at the airport which forced my relatives to take me to nearby Charnock Hospital. After Emergency doctors checked me I was advised to get admitted. I was there for 3 days and was discharged in stable condition. During my stay at the hospital, I never felt uncomfortable for a moment. Treatment was of highest quality, but special mention has to be made about the nursing quality and care, which has been top quality."</p>
                <h5 className="text-center">- Md. Yasin, Mumbai.</h5>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      
    </div>

        <Footer/>
    </div>

    
  )
}

export default Home
