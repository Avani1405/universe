import React from 'react'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import Aos from 'aos'

function Venus() {
  useEffect(()=> {
    Aos.init({duration:3000});
}, [])
  return (
    <>
    <div id='venus' className="w-[1600px] h-[785px] top-[2900px] flex " >

        <div className="max-w-[597px] max-h-[624px] top-[80px] left-[98px] gap-[80px] ml-20" >
            <div className="max-w-[597px] h-[200px] gap-[24px]" data-aos="fade-down">
                <img className="max-w-[321px] max-h-[80px] gap-[8px]" src="Text (2).png" alt=""  />
                <img className="w-[597px] h-[55px]" src="Venus is often referred to as Earth's _sister planet_ due to its similar size and composition, but it stands out with its extremely inhospitable environment.png" alt="" />
            </div>
            <div className="max-w-[597px] max-h-[392px] gap-[40px]">
            <img className="max-w-[500px] max-h-[392px] gap-[40px]" data-aos="fade-right" src="Frame 5.png" alt="" />
                
           </div>

        </div>


        <div className="w-[1098.64px] h-[1098.64px] top-[71.68px] left-[1440.68px]">
            <img className="w-[900px] h-[720px]" src="Layer 2 (7).png" alt=""/>
        </div>

    </div>
    </>
  )
}

export default Venus