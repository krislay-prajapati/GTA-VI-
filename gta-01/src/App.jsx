import React, { useState } from 'react'
import { useGSAP }from "@gsap/react";
import gsap from "gsap";
import 'remixicon/fonts/remixicon.css';

const App = () => {
const [showcontent, setShowcontent] = useState(false)






  useGSAP(()=>{
    const tl = gsap.timeline();

    tl.to(".vi-mask-group",{
      rotate :10,
      duration:2,
      ease:"Power4.easeInout",
      transformOrigin:"50% 50%"
    })
    .to(".vi-mask-group",{
      scale:10,
      duration:2,
      delay:-1.8,
      ease:"Expo.easeIntOut",
      transformation:"50% 50%",
      opacity:0,
      onUpdate: function(){
        if(this.progress()>=.9){
          document.querySelector(".svg").remove();
          setShowcontent(true)
          this.kill
        }
      }
    })
  })

  useGSAP(()=>{
    if(!showcontent) return;
    gsap.to(".main",{
      scale:1,
      rotate:0,
      
      duration:2,
      delay:"-1",
      ease:"Expo.easeInOut"

    })
    gsap.to(".sky",{
      scale:1.1,
      rotate:0,
      
      duration:2,
      delay:"-.8",
      ease:"Expo.easeInOut"

    })
    gsap.to(".bg",{
      scale:1.1,
      rotate:0,
      
      duration:2,
      delay:"-1",
      ease:"Expo.easeInOut"

    })
    gsap.to(".character",{
      scale:2,
      x:"30%",
      bottom:"0%",
      rotate:0,
      
      duration:2,
      delay:"-.8",
      ease:"Expo.easeInOut"

    })
    gsap.to(".text",{
      scale:1,
      
      rotate:0,
      
      duration:2,
      delay:"-.8",
      ease:"Expo.easeInOut"

    })
    
    const main = document.querySelector(".main");

    main?.addEventListener("mousemove",function(e){
      const xMove = (e.clientX / window.innerWidth - 0.5)*40;
      gsap.to(".imagesdiv .text",{
        x:`${xMove *0.4}%`,
      });
      gsap.to(".sky",{
        x:xMove,
      });
      gsap.to(".bg",{
        x:xMove*1.7,
      });
         

    });
  },[showcontent])
  return (
    <>
    <div className='svg fixed top-0 left-0 z-[12] items-center justify-center w-full h-screen overflow-hidden bg-[#000]'>
      <svg viewBox='0 0 900 600' preserveAspectRtio="xMIldYMid slice">
        <defs>
          <mask id="viMask">
            <rect width="100%" height="100%" fill='black'/>
            <g className='vi-mask-group'>
              <text x='50%' y='50%' fontSize='250' textAnchor='middle' fill='white' dominantBaseline='middle' fontFamily='Arial black'>
                VI
              </text>
            </g>
          </mask>
        </defs>
        <image href='./bg.png' width='100%' height='100%' preserveAspectRatio='xMildYMid slice' mask='url(#viMask)' />
      </svg>
    </div> 
    {showcontent && <div className='main w-full rotate-[-5deg] scale-[1.7]'>
    <div className='landing overflow-hidden relative w-full h-screen bg-black'>
    <div className='navbar absolute w-full py-10 px-10 top-0 left-0 z-[10]'>
      <div className='logo flex gap-7'>
        <div className='lines flex flex-col gap-[5px]'>
          <div className='line w-19 h-4 bg-white'></div>
          <div className='line w-12 h-4  bg-white'></div>
          <div className='line w-9  h-4 bg-white'></div>
          
        </div>
        <h3 className='text-7xl text-white -mt-[15px] leading-none'>Rockstar</h3>
      </div>
    </div>
    
      <div className='imagesdiv relative overflow-hidden w-full h-screen '>
      <img className='w-full sclae-[1.6] rotate-[-20deg] sky  absolute top-0 left-0 h-full object-cover ' src='./sky.png' alt=''/>
        <img className='w-full absolute top-0 left-0 bg sclae-[1.8] rotate-[-3deg] h-full object-cover ' src='./bg.png' alt=''/>
        <div className='text text-white absolute flex flex-col gap-10 scale-[1.4] rotate-[-10deg] top-39 left-1/2 -translate-x-1/2'>
      <h1 className='text-[12rem] -ml-40 leading-none'>grand</h1>
      <h1 className='text-[12rem]  ml-20 leading-none'>theft</h1>
      <h1 className='text-[12rem] -ml-40 leading-none'>autocar</h1>
    </div>
        <img className='character absolute bottom-[200%] left-1/2 -translate-x-1/2 scale-[4] rotate-[-20deg]  ' src='./girlbg gta.png' alt=''/>
        
      </div> 
      <div className='btmbar text-white w-full py-15 px-10 absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent'>
      
        <div className='flex gap-4 items-center'>
          <i className="ri-arrow-down-line text-7xl"></i>
          <h4 className='font-[Helvetica_Now_Display] text-7xl'>Scroll Down</h4>
        </div>
        <img className='h-[85px]  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src='./ps5.png' alt=''/>
        
      </div>
    </div>
    <div className='w-full h-screen bg-black flex px-10 items-center justify-center'>
    <div className='cntr flex  text-white w-full h-[80%]'>
      <div className='limg relative w-1/2 h-full '>
        <img className='absolute scale-[2.5] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src='./gta 3.png' alt=''/>
      </div>
      <div className='rg flex py-30 flex-col w-[30%]'>
      <h className='text-9xl mt-4'>Still Running,</h>
      
      <h className='text-9xl mt-4'>Not Hunting</h>
      <p className='mt-13 text-3xl font-[Helvetica_Now_Display]'>GTA 6 takes players back to the iconic Vice City, delivering a massive open world filled with crime, adventure, memorable characters, fast cars, beautiful beaches, and unpredictable chaos. Its detailed visuals, dynamic world, and cinematic storytelling promise an unforgettable gaming experience.</p>
      <p className='mt-4 text-3xl font-[Helvetica_Now_Display]'>GTA 6 returns players to the neon-filled world of Vice City, featuring an expansive open world, exciting criminal adventures, unforgettable characters, fast cars, beautiful beaches, dangerous missions, and stunning visuals that create an immersive and cinematic gaming experience.</p>
      <p className='mt-10 text-3xl font-[Helvetica_Now_Display]'>GTA 6 returns players to the neon-filled world of Vice City, featuring an expansive open world, exciting criminal adventures, unforgettable characters, fast cars, beautiful beaches, dangerous missions, and stunning visuals that create an immersive and cinematic gaming experience.</p>
      <button className='bg-yellow-500 text-4xl text-black px-10 py-10 mt-10'>Download Now</button>

      </div>
    </div>
      
    </div>
    </div>

    }
    </>
  )
}

export default App