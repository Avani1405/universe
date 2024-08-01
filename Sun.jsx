import React from 'react'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import Aos from 'aos'

function Sun() {
  useEffect(()=> {
    Aos.init({duration:3000});
}, [])
  return (
    <>
   <div id='sun' className="w-[1600px] h-[1350px] top-[1053px]" >
    <img className="w-[1600px] h-[700px] top-[1053px] left-[-211.15px]" data-aos="fade-left" src="Layer 2 (6).png" alt="" />

    <div className="max-w-[826px] max-h-[400px] top-[536px] left-[98px] gap-[40px] mt-[80px] ml-[80px] " data-aos="fade-up">
        <div className="max-w-[826px] max-h-[176px] gap-[24px] ">
            <img className="max-w-[171px] max-h-[80px] gap-[8px] mt-4" src="text.png" alt="" />
            < img className="w-[826px] h-[72px]" src="Sun.png" alt="" />
        </div>
            
        <div className="max-w-[744px] max-h-[176px] gap-[40px] flex mt-[70px]">
                <div className="max-w-[352px] max-h-[176px] rounded-xl  px-[24px] py-[40px] gap-[24px] bg-gradient-radial from-[#430E49] to-[#100A33] bg-center bg-contain border-4 border-solid border-purple-900 flex ">
                    <div>
                    <img className="w-[80px] h-[80px]" src="donut_large.png" alt="" />
                    </div>
                   
                   <div className="max-w-[200px] max-h-[128px] gap-[8px] ">
                   <img className="w-[81px] h-[24px]" src="Diameter.png" alt="" />
                   <img className="w-[200px] h-[90px] gap-[8px] mt-2" src="870,000 Miles.png" alt="" />
                   </div>
                     
                </div>

                <div className="max-w-[352px] max-h-[176px] rounded-xl  px-[24px] py-[40px] gap-[24px] bg-gradient-radial from-[#430E49] to-[#100A33] bg-center bg-contain border-4 border-solid border-purple-900 flex ">
                    <div>
                        <img className="w-[32.92px] h-[80px]" src="Group 3.png" alt="" />
                    </div>

                    <div className="max-w-[200px] max-h-[128px] gap-[8px]" >
                            <img className="w-[118px] h-[24px]" src="Temperature.png" alt="" />
                            <img className="w-[200px] h-[96px] gap-[8px]" src="±5,500° Celsius.png" alt="" />
                    </div>

                    </div>
        </div>

    </div>
   </div>
      
    </>
  
        
    
  )
}

export default Sun