import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import WhoWeAre from '../components/WhoWeAre'
import ServicesCareer from '../components/ServicesCareer'
import Quote from '../components/Quote'
import AlignLogo from '../assets/icons/Align.svg'
import SoundwiseLogo from '../assets/icons/Soundwise.svg'
import LekplatsLogo from '../assets/icons/Lekplats.svg'
import { HeroText, ContentInset } from '../components/Common';

const Landing = ({data}) => (
  <Layout footer>
    <Hero />
    <WhoWeAre />
    <ServicesCareer image1={data.image1.fluid} image2={data.image2.fluid}/>
    <ContentInset>
      <HeroText data-scroll-fade={true}>
        Here’s what some of our customers say about our work.
      </HeroText>
    </ContentInset>  
    <Quote
      logo={AlignLogo}
      img={data.image3.fluid}
      author={'Scott Raymond, Founder'}
      location={'San Francisco, United States'}
    >
      Jai has been instrumental in our project success. He transformed rough
      design specs into running code, with a strong eye toward React best
      practices, usability, and efficiency.
    </Quote>
    <Quote
      logo={SoundwiseLogo}
      img={data.image4.fluid}
      author={'Natasha Che, Founder'}
      location={'Washington DC, United States'}
    >
      I had a great experience working with Jai. He is technically very
      competent and also is proactive and very good at communicating work needs
      and offering suggestions.
    </Quote>
    <Quote
      logo={LekplatsLogo}
      img={data.image5.fluid}
      author={'Daniel Lapidus, Founder'}
      location={'Stockholm, Sweden'}
    >
      Jai is a wonderful programmer to work with. Takes responsibility for the
      whole process and communicates very effectively. Can warmly recommend.
      Will rehire.
    </Quote>
  </Layout>
)

export default Landing

export const query = graphql`
query {
   image1 : imageSharp(original: {src: {regex: "/Career/"}}) {
     fluid (maxWidth: 600, maxHeight: 200, quality: 100, grayscale: true){
         ...GatsbyImageSharpFluid
   }
   }
   image2 : imageSharp(original: {src: {regex: "/TextImage/"}}) {
      fluid (maxWidth: 600, maxHeight: 200, quality: 100){
          ...GatsbyImageSharpFluid
    }
    }
    image3 : imageSharp(original: {src: {regex: "/align-Background/"}}) {
      fluid (maxWidth: 800, quality: 100){
          ...GatsbyImageSharpFluid
    }
    }
    image4 : imageSharp(original: {src: {regex: "/soundwise-Background/"}}) {
      fluid (maxWidth: 800,  quality: 100){
          ...GatsbyImageSharpFluid
    }
    }
    image5 : imageSharp(original: {src: {regex: "/lekplats-Background/"}}) {
      fluid (maxWidth: 800, quality: 100){
          ...GatsbyImageSharpFluid
    }
    }
 }
 `