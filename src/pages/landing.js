import React from 'react'
//import NavBar from '../components/NavBar';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import WhoWeAre from '../components/WhoWeAre';
import ServicesCareer from '../components/ServicesCareer';
import Quote from '../components/Quote';
import AlignLogo from '../assets/icons/Align.svg';
import AlignBackground from '../assets/images/align-Background.jpg';

const Landing = () => (
   <Layout>
      <Hero />
      <WhoWeAre />
      <ServicesCareer />
      <Quote logo={AlignLogo} img={AlignBackground} author={"Scott Raymond, Founder"} >
      Jai has been instrumental in our project success. He transformed rough design specs into running code, with a strong eye toward React best practices, usability, and efficiency.
      </Quote>  
   </Layout>
)

export default Landing;