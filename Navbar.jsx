import React from 'react'
import Sun from '../Sun/Sun'
import Mercury from '../Mercury/Mercury'
import Venus from '../Venus/Venus'
import Earth from '../Earth/Earth'
import Mars from '../Mars/Mars'
import Jupiter from '../Jupiter/Jupiter'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect, useState } from 'react'
import Saturn from '../Saturn/Saturn'
import Uranus from '../Uranus/Uranus'
import Neptune from '../Neptune/Neptune'
import {Link as LinkScroll} from 'react-scroll/modules'


function Navbar() {
 const [click,setClick] = useState( false)

  useEffect(()=> {
    Aos.init({duration:2000});
}, [])
  return (
    <>
    <div className="bg-[url('/bg-image.jpg')] max-w-[1600px] h-[9530px] ">
    <div className="w-[100%] h-[1052px] " data-aos="fade-right">
     <div className="  max-w-[1440px] h-[96px] px-[96px] py-[32px] gap-[8px]">
        <div className='flex justify-between '>

         <div className='flex'>
        <img className="w-[32px] h-[32px]" src="eco.png" alt="" /> 
        <img className="w-[232px] h-[32px]" src="universe.png" alt="" />
        </div>

        
        <div className="w-[422px] h-24px] flex justify-between ">
            <LinkScroll activeClass='active' to='mercury' spy={true} smooth={true} offset={0} duration={500} className='w-[64px] h-[24px] font-medium size-[16px] leading[24px] items-center  text-white'>Mercury</LinkScroll>
            <LinkScroll activeClass='active' to='venus' spy={true} smooth={true} offset={0} duration={500} className='w-[64px] h-[24px] font-medium size-[16px] leading[24px] items-center text-white'>Venus</LinkScroll>
            <LinkScroll activeClass='active' to='earth' spy={true} smooth={true} offset={0} duration={500} className='w-[64px] h-[24px] font-medium size-[16px] leading[24px] items-center text-white'>Earth </LinkScroll>
            <LinkScroll activeClass='active' to='mars' spy={true} smooth={true} offset={0} duration={500} className='w-[64px] h-[24px] font-medium size-[16px] leading[24px] items-center text-white'>Mars</LinkScroll>
            <LinkScroll activeClass='active' to='jupiter' spy={true} smooth={true} offset={0} duration={500} className='w-[64px] h-[24px] font-medium size-[16px] leading[24px] items-center text-white'>....</LinkScroll>
            
        </div>
        </div>

     </div>

     <div className="w-[full] h-[890px] top-[17px] left-[-23px] ">
        <div className="flex justify-between">
        <div>
        <img className="w-[200.55px] h-[247.22px] top-[98px] left-[199.55px] " src="Group 2.png" alt="" />
        <img className="w-[850.61px] h-[547.06px] top-[349px] left-[325.51px]" src="Layer 2.png" alt="" />
        <img className="w-[166px] h-[169.93px] top-[881px] left-[-22px]" src="Layer 2 (1).png" alt="" />
        </div>
    
        <div>
        <img className="w-[130.68px] h-[144.85px] top-[134px] left-[733px] ml-[520px]" src="Layer 2 (5).png" alt="" />

        <div className="max-w-[961px] max-h-[594px] top-[215px] left-[238px]">
            <div className="max-w-[961px] max-h-[450px] gap-[24px]">
                <img className="w-[961px] h-[376px]  items-center text-white  " src="abc.png" alt="" />
            </div>

            <div className="max-w-[961px] max-h[450px] gap-[24px]">
                <img className="w-[961px] h-[46px] gap-[20px] mt-4" src="def.png" alt="" />
                <div className="w-[961px] h-[88px] items-center mt-20">
                <LinkScroll  activeClass='active' to='sun' spy={true} smooth={true} offset={0} duration={500} className="w-[200px] max-h-[80px] rounded-[8px] px-[40px] py-[28px] gap-[80px] bg-gradient-to-r from-[#CD1013] via-[#FF0004] to-[#2500FF] text-white ml-[400px] mt-20">Learn More </LinkScroll>
                </div>
            </div>


            
        </div>
        <img className="w-[226px] h-[221.49px] top-[1000px] left-[584px] ml-[370px] mt-4" src="Layer 2 (2).png" alt="" />
        </div>

       <div>
       <img className="w-[485.85px] h-[435.74px] top-[111px] left-[1670.85px]" src="Layer 2 (4).png" alt="" />
       <img className="w-[499.88px] h-[517.01px] top-[681px] left-[1049px]" src="Layer 2 (3).png" alt="" />
       </div>

       </div>
       </div>
       </div>
       <Sun />
       <Mercury />
       <Venus />
       <Earth />
       <Mars />
       <Jupiter />
       <Saturn />
       <Uranus />
       <Neptune />
       </div>
       
     </>


       
        
    
        
    
  )
}

export default Navbar