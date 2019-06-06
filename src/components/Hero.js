import React from 'react'
import ReactLogo from '../assets/icons/ReactLogo.svg';
import styled from 'react-emotion';
import { ArrowButton, BottomLine } from './Common';
import cloud from '../assets/images/cloud.jpg';

const Text1 = styled.div`
    font-size: 96px;
    color: white;  
    line-height: 94.38%;
//    background: url('src/assets/images/cloud.jpg');
// // background: url('../assets/images/cloud.jpg');

//   -webkit-background-clip: text;
//    -webkit-text-fill-color: transparent;

    // background: url('https://www.google.com/search?q=cloud&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjQ1ous88ziAhUWSY8KHVq_DKoQ_AUIECgB&biw=1280&bih=672#imgrc=PiKHJHeJLfXieM:');
    // -webkit-background-clip: text;
    // -webkit-text-fill-color: transparent;
`
const Text2 = styled.div`
    font-size:36px;
    color: #363636;
    line-height: 64px;
`

const Wrapper = styled.div`
    position: absolute;
    top: 20%;
    left: 17%;
    right: 17%;
`
const RightHero = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const LeftHero = styled.div`
    display: flex;
    flex-direction: column;
`
const Hero = () => (
   <Wrapper>
       <RightHero>
       <LeftHero>
       <Text1>We Build React Web Apps</Text1>
       <Text2>Because we love to.</Text2>
       <ArrowButton text="Get in touch" white />
       </LeftHero>
       <img src={ReactLogo} width="268" height="563" alt="ReactLogo" />
       </RightHero>
       <BottomLine />
   </Wrapper>
   )

export default Hero;

