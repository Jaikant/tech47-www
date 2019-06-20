import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import WhoWeAre from '../components/WhoWeAre'
import ServicesCareer from '../components/ServicesCareer'
import Quote from '../components/Quote'
import AlignLogo from '../assets/icons/Align.svg'
import AlignBackground from '../assets/images/align-Background.jpg'
import SoundwiseLogo from '../assets/icons/Soundwise.svg'
import SoundwiseBackground from '../assets/images/soundwise-Background.png'
import LekplatsLogo from '../assets/icons/Lekplats.svg'
import LekplatsBackground from '../assets/images/lekplats-Background.png'

const Landing = ({data}) => (
  <Layout footer> 
    <Hero />
    <WhoWeAre />
    <ServicesCareer image1={data.image1.fluid} image2={data.image2.fluid}/>
    <Quote
      logo={AlignLogo}
      img={AlignBackground}
      author={'Scott Raymond, Founder'}
    >
      Jai has been instrumental in our project success. He transformed rough
      design specs into running code, with a strong eye toward React best
      practices, usability, and efficiency.
    </Quote>
    <Quote
      logo={SoundwiseLogo}
      img={SoundwiseBackground}
      author={'Natasha Che, Founder'}
    >
      I had a great experience working with Jai. He is technically very
      competent and also is proactive and very good at communicating work needs
      and offering suggestions.
    </Quote>
    <Quote
      logo={LekplatsLogo}
      img={LekplatsBackground}
      author={'Daniel Lapidus, Founder'}
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
 }
 `