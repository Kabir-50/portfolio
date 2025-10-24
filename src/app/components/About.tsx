'use client'
import React, { useRef } from 'react'
import FlipCard from './FlipCard'
import { CardData } from './Data/AboutData'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const About = () => {

  const titleref = useRef(null) 

  useGSAP(() =>{
    gsap.from(titleref.current, {
      y: 100,
      opacity:0,
      duration:1,
      scrollTrigger: {
        trigger: titleref.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none'
      }
    })
  }, [])


  return (
    <div className='about-wrapper flex flex-col items-center gap-y-9 w-[95%]'>
      <div ref={titleref} className="about-title flex flex-col items-center">
        <h1 className='font-bold bg-[linear-gradient(to_bottom,_#8830da_40%,_black_90%)] bg-clip-text text-transparent text-4xl      lg:text-5xl'>CREATIVITY</h1>
        <h1  className='font-bold bg-[linear-gradient(to_bottom,_white,_black_90%)] bg-clip-text text-transparent text-4xl      lg:text-5xl'>IS MY PASSION</h1>
      </div>
      <div className="about-cards flex flex-wrap  gap-8 justify-center lg:pt-8">
        {CardData.map((item, index)=>(
          <div key={index} className={index % 2 === 0 ? 'lg:mt-0' : 'lg:mt-12'}>
            <FlipCard title={item.title} detail={item.detail} image={item.image}  />
          </div>
          
        ))}
      </div>
      
    </div>
  )
}

export default About