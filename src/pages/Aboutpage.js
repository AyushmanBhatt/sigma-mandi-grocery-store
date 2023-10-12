import React from 'react'
import Navbar from '../components/Navbar'
import img1 from "../images/aditya.JPG"
import img2 from "../images/aboutimg2.png"
import img3 from "../images/shivam.jpg"
import img4 from "../images/aboutimg4.jpg"
import img5 from "../images/badal.jpg"
import '../css/Aboutpage.css'
import BottomNavbar from '../components/BottomNavbar'
import Footer from '../components/Footer'
const Aboutpage = () => {
  return (
    <div>
      <Navbar />
      <BottomNavbar />
      <div className='about-container'>
      <div class="about-intro">
        <h2>OUR MISSION</h2>
        <h1>HARVEST DEALS UNVEILED !</h1>
        <p>In an era where convenience and smart decision-making are paramount, Sigma Mandi emerges as a trailblazing online grocery price prediction and comparison website. We understand that grocery shopping is a vital aspect of your life, and our mission is to empower you with the tools and insights you need to shop smarter, save money, and make informed choices.
        </p>
        <h1 id="teamname">Team Alpha Pro</h1>
        <h3 id="slogan">Creating a community for impact</h3>
        <hr />
      </div>
      </div>
      <div class="about-content">
        <div class="about-card">
          <div class="left-about-card">
            <img alt="" src={img1} />
          </div>
          <div class="right-about-card">
            <div class="right-about-content">
              <h3>Front-End Developer, Innovator</h3>
              <h1>Aditya Negi</h1>
              <p>Aditya's creativity knows no bounds, and his technical prowess ensures that Sigma Mandi's interface is not only visually appealing but also highly user-friendly.</p>
              <button><a href="https://www.linkedin.com/in/aditya-negi-180727240/">LEARN MORE</a></button> 
            </div>
          </div>
        </div>
        <div class="about-card">
          <div class="right-about-card">
            <div class="right-about-content">
              <h3>Fullstack Developer, Initiator</h3>
              <h1>Ayushman Bhatt</h1>
              <p>Ayushman's commitment to both front-end and back-end development ensures that Sigma Mandi is a robust and seamless platform that caters to all your needs.</p>
              <button><a href="https://www.linkedin.com/in/ayushman-bhatt-34b41624b/">LEARN MORE</a></button>
            </div>
          </div>
          <div class="left-about-card">
            <img alt="" src={img2} />
          </div>
        </div>
        <div class="about-card">
          <div class="left-about-card">
            <img alt="" src={img3} />
          </div>
          <div class="right-about-card">
            <div class="right-about-content">
              <h3>ML Developer, Designer</h3>
              <h1>Shivam Kulashri</h1>
              <p>Shivam brings the magic of machine learning to Sigma Mandi, creating predictive algorithms that help you anticipate price trends and make informed decisions. His design expertise ensures that our platform is as beautiful as it is functional.</p>
              <button><a href="https://www.linkedin.com/in/shivam-kulashri-669a50281/">LEARN MORE</a></button>
            </div>
          </div>
        </div>
        <div class="about-card">
          <div class="right-about-card">
            <div class="right-about-content">
              <h3>Front-End Developer, Backbone</h3>
              <h1>Anushk Pathak</h1>
              <p>Anushk's meticulous attention to detail and dedication to excellence make him the backbone of our front-end development team, guaranteeing that Sigma Mandi's interface is not only intuitive but also responsive to your needs.</p>
              <button><a href="https://www.linkedin.com/in/anushkpathak16/">LEARN MORE</a></button>
            </div>
          </div>
          <div class="left-about-card">
            <img alt="" src={img4} />
          </div>
        </div>
        <div class="about-card">
          <div class="left-about-card">
            <img alt="" src={img5} />
          </div>
          <div class="right-about-card">
            <div class="right-about-content">
              <h3>Back-End Developer</h3>
              <h1>Badal Nagpal</h1>
              <p>Badal's expertise in back-end development is the foundation upon which Sigma Mandi's functionality and data processing capabilities are built. His contributions ensure a seamless experience for our users.</p>
              <button><a href="https://www.linkedin.com/in/badal-nagpal/">LEARN MORE</a></button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Aboutpage
