import React from 'react'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import Aos from 'aos'


function Uranus() {
    useEffect(()=> {
        Aos.init({duration:3000});
    }, [])
  return (
    <>
    <div id='uranus' className="w-[1600px] h-[819px] top-[6830px]">
        <div className="flex gap-[80px] " data-aos="fade-down">
            <div className="max-w-[504px] max-h-[176px] top-[80px] left-[98px] gap-[24px] ml-24">
                <img className="w-[336px] h-[80px] gap-[8px]" src="Text (6).png" alt="" />
                <img className="w-[564px] h-[72px] mt-6" src="Uranus, often referred to as the _Ice Giant,_ is a unique and mysterious planet in our solar system. It stands out due to its distinct blue-green color and its unusual rotation axis..png" alt="" />
            </div>

            <img className="w-[352px] h-[176px] top-[80px] left-[622px] gap-[16px]" src="card (9).png" alt="" />
            <img className="w-[352px] h-[176px] top-[80px] left-[622px] gap-[16px] ml-[-60px]" src="card (8).png" alt="" />
        </div>

        <img className="mt-16" data-aos="fade-up" src="Layer 2 (9).png" alt="" />

    </div>
    </>
  )
}

export default Uranus