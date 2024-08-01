import React, { forwardRef } from 'react'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import Aos from 'aos'

function Mercury(ref) {
  useEffect(()=> {
    Aos.init({duration:3000});
}, [])
  return (
   <>
    <div id='mercury' className="w-[16000px] h-[850px] top-[2077px] flex ">

        <div className="w-[706px] h-[706px] top-[30px] left-[-185px]">
            <img className="w-[600.42px] h-[720.41px] top-[61.3px] left-[-157.39px]" src="Group 4.png" alt="" />
        </div>

        <div className="max-w-[740px] max-h-[608px] top-[100px]  left-[602px] gap-[40px]" data-aos="fade-left">
              <img src="Frame 7.png" alt="" />
        </div>

    </div>
   </>
  )
}

export default Mercury 