import React from 'react'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import Aos from 'aos'

function Mars() {
  useEffect(()=> {
    Aos.init({duration:2000});
}, [])
  return (
    <>
     <div id='mars' className="w-[1440px] h-[781px] top-[4579px]">

       <div className="flex" >
       <div > 
            <div className="max-w-[657px] max-h-[176px] top-[80px] left-[98px] gap-[24px] ml-20"   data-aos="fade-right">
                <img className="max-w-[257px] max-h-[80px] gap-[8px] " src="Text (4).png" alt=""  />
                <img className="max-w-[657px] h-[72px] mt-6" src="Mars, often referred to as the _Red Planet,_ is the fourth planet from the Sun and has captivated human imagination for centuries with its reddish appearance and potential for hosting life..png" alt="" />
            </div>

            <div className="flex"  data-aos="fade-right">
                <img className="h-[500px] w-[1000px] mt-8" src="Group 9.png" alt="" />
                <img className="w-[71.41px] h-[58.84px] top-[351px] left-[639.08px] rotate-[-165.61deg] mt-[110px] ml-[-60px] " src="Group (3).png" alt="" />
                <div className="max-w-[352px] max-h-[144px] top-[418px] left-[596px] gap-[24px] mt-[190px] ml-10">
                    <img className="w-[300px] h-[48px]" src="Martian Moons.png" alt="" />
                    <img className="w-[352px] h-[72px] mt-10 " src="Mars has two small moons, Phobos and Deimos, which are irregularly shaped and thought to be captured asteroids..png" alt="" />
                </div>
            </div>
        </div>

        <div className="w-[352px] h-[560px] ml-[260px]"  data-aos="fade-left">
                <img className="w-[352px] h-[176px] top-[80px] left-[990px] " src="card (5).png" alt="" />
                <img className="w-[352px] h-[176px] top-[80px] left-[990px] mt-[45px]" src="card (1).png" alt="" />
                <img className="w-[352px] h-[176px] top-[80px] left-[990px] mt-[45px]" src="card (2).png" alt="" />
        </div>


       </div>

     </div>
    </>
  )
}

export default Mars