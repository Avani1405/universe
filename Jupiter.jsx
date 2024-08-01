import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'

function Jupiter() {
    useEffect(()=> {
        Aos.init({duration:3000});
    }, [])
  return (
   <>
        <div id='jupiter' className="w-[1600px] h-[769px] top-[5360px] ">
            <div className="flex" data-aos="fade-up">
                <div className="max-w-[810px] max-h-[152px] top-[80px] left-[98px] gap-[24px] ml-16 mt-6">
                    <img className="max-w-[340px] max-h-[80px] gap-[8px] " src="Text (3).png" alt="" />
                    <img className="w-[610px] h-[48px]" src="Jupiter, the largest planet in our solar system, is a gas giant known for its immense size, powerful storms, and numerous moons..png" alt="" />
                    <div className="max-w-[354px] h-[380px] top-[312px] left-[98px]">
                    <img className="max-w-[352px] max-h-[176px] ml-16 mt-20" src="card (3).png" alt="" />
                    <img className="max-w-[352px] max-h-[176px] ml-16 mt-8 " src="card (4).png" alt="" />
                </div>
                </div>

               

                <img className="mt-[-68px] ml-16"src="Layer 2 (8).png" alt="" />

            </div>

        </div>
   </>
  )
}

export default Jupiter