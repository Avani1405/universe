import React from 'react'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import Aos from 'aos'


function Neptune() {
    useEffect(()=> {
        Aos.init({duration:3000});
    }, [])
  return (
    <>
    <div id='neptune' className="w-[1600px] h-[1024px] top-[7649px]" >

        <div className="max-w-[1075px] max-h-[152px] top-[80px] left-[183px] gap-[24px] ml-[220px]">
            <img className="w-[385px] h-[80px] gap-[8px] ml-[340px]" src="Text (5).png" alt="" />
            <img className="w-1075px] h-[48px]" src="Neptune, often called the _Blue Giant,_ is the eighth and farthest planet from the Sun in our solar system. It is a gas giant known for its striking blue color and turbulent atmosphere..png" alt="" />
        </div>

        <div className="max-w-[744px] max-h-[176px] top-[312px] left-[348px] gap-[40px] flex ml-[370px] mt-[80px]">
            <img className="w-[352px] h-[176px]" src="card (7).png" alt="" />
            <img className="w-[352px] h-[176px]" src="card (6).png" alt="" />
        </div>

        <img className="mt-[-490px]" src="Group 12.png" alt="" />
        <div className="flex "> 
        <img className="" src="Group 16.png" alt="" />
        <div className="w-[1336px] h-[448px] top-[68px] left-[53px] rounded-3xl border-[4px] border-gray-900 px-[40px] py-[8px] gap-[80px] bg-gray-900 ml-[-1400px] mt-20">
             <img className="ml-[225px] mt-6" src="Frame 10.png" alt="" />
             <div className="w-[565px] h-[68px] rounded-full px-[8px] py-[15px] gap-[8px] bg-white mt-10 ml-[340px] flex ">
                <input className="ml-4 mt-1" type="text" placeholder="Write your email" />
                <button className="w-[155px] h-[56px] rounded-full p-[8px] gap-[8px] bg-gradient-to-br from-rose-600 via-red-600 to-blue-600 ml-44 mt-[-9px] text-white">Subscribe</button>
             </div>
             <img className="mt-28" src="Frame 12.png" alt="" />
        </div>
        </div>
        
        

    </div>
    </>
  )
}

export default Neptune