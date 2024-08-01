import React from 'react'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import Aos from 'aos'

function Earth() {
    useEffect(()=> {
        Aos.init({duration:2000});
    }, [])
  return (
   <>
   <div id='earth'className="w-[1440px] h-[800px] top-[3685px]"  data-aos="fade-down">


    <div className="flex justify-between px-[70px]">
        <div className="max-w-[677px] h-[210px] top-[64px] left-[98px] gap-[24px]">
            <div className="max-w-[281px] h-[100px] gap-[8px]">
                <img src="Text (1).png" alt="" />
             </div>
             <div className="w-[677px] h-[72px]">
                    <img src="Earth is the third planet from the Sun and the only known planet to support life. Earth is the only planet known to harbor life. It's a diverse and dynamic world with a wide range of ecosystems, climates, and geolo.png" alt="" />
             </div>

        </div>

        <div className="max-w-[352px] max-[176px] top-[64px] left-[990px]">
            <img src="card.png" alt="" />
        </div>
    </div>


   <div className="flex gap-[280px] w-[px]">

   <div className="max-w-[500px] max-h-[110px] top-[296px] l gap-[24px]">
           <div className="w-[256px] h-[75px]  ">
             <img className="w-[256px] h-[48px] ml-[770px] " src="Moon Planet.png" alt="" />
            </div> 

            <div className="w-[677px] h-[48px]">
                <img className="ml-[377px]" src="Earth has one natural satellite, the Moon, which plays a role in stabilizing the planet's rotation and tides. The Moon's gravitational pull causes ocean tides to rise and fall..png" alt="" />
            </div>
    </div>

    <div className="w-[155.88px] h-[129.34px] top-[266px] left-[1095.17px] rotate-[370.25deg] ml-[250px]">
            <img src="Group (3).png" alt="" />
    </div>

   
   </div>
   <div className="flex">
        <img className="w-[181.99px] h-[186.89px] top-[425px] left-[-12px]" src="Group (2).png" alt="" />
        <img className="top-[356px] left-[1351px] mt-[-135px]" src="Layer 2 (1).png" alt="" />
    </div>


   </div>
   </>
  )
}

export default Earth