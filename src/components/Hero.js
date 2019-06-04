import React from 'react'
import ReactLogo from '../assets/icons/ReactLogo.svg';
import Arrow from '../assets/icons/Arrow.svg';
import Partition from '../assets/icons/Partition.svg';
import styled from 'react-emotion';
import colors from '../utils/colors';
import cloud from '../assets/images/cloud.jpg';

const Text1 = styled.div`
    font-size: 96px;
    color: white;  
    // background: url(https://www.google.com/search?q=cloud&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjQ1ous88ziAhUWSY8KHVq_DKoQ_AUIECgB&biw=1280&bih=672#imgrc=PiKHJHeJLfXieM:) no-repeat;
    // -webkit-background-clip: text;
    // -webkit-text-fill-color: transparent;
`
const Text2 = styled.div`
    font-size:36px;
    color: #363636;
`

const Text3 = styled.div`
    font-size:18px;
    color: #f0f0f0;
    margin-right: 10px;
`
const E = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    // align-content: center;
`
const C = styled.div`
    display: flex;
    align-items: center;
    flex-basis: 10%;
    background: yellow;
`
const B = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    // background: green;
`
const A = styled.div`
    display: flex;
    align-items: baseline;
    //justify-content: space-between;
`
const D = styled.div`
    display: flex;
    justify-content: center;
`
const Hero = () => (
   <E>
       {/* <img src={cloud}/> */}
       <C>
       <B>
       <Text1>We Build React Web Apps</Text1>
       <Text2>Because we love to.</Text2>
       <A>
       <Text3>Get in touch</Text3>
       <img src={Arrow} width="24" alt="Arrow" />
       </A>
       </B>
       <img src={ReactLogo} width="268" height="563" alt="ReactLogo" />
       </C>
       <D>
       <img src={Partition} width="300" height="3" alt="Partition" />
       </D>
   </E>
   )

export default Hero;