import React from 'react'
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'

function Saturn() {
    useEffect(()=> {
        Aos.init({duration:3000});
    }, [])
  return (
    <>
    <div id='saturn' className="w-[1600px] h-[808px] top-[6022px]" >
       
       <div className="flex">
       <img className="w-[900px] h-[800px] mt-[-40px]" src="Layer 2 (10).png" alt=""  />
       <div className="max-w-[708px] max-h-[176px] top-[80px] left-[634px] gap-[24px] ml-[-150px]" data-aos="fade-left">
          <img className="w-[334px] h-[80px] gap-[8px]" src="Text (7).png" alt="" />
          <img className="w-[708px] h-[72px]" src="Saturn, often referred to as the _Ringed Planet,_ is known for its stunning system of rings that encircle the planet's equator. It's the sixth planet from the Sun and is one of the most visually distinctive objects.png" alt="" />
        
        <div className="w-[352px] h-[400px] top-[336px] left-[990px] ml-[357px]">
            <img className="mt-24" src="card (11).png " alt="" />
            <img className="mt-12" src="card (10).png " alt="" />

        </div>
        
        </div> 
        
       </div>


    </div>
    </>
  )
}

export default Saturn