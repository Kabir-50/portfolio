'use client'
import React, { useRef } from 'react'
import ProjectSlider from './ProjectSlider'
import { ProjectData } from '../Data/ProjectData'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Projects = () => {
  
  const title1 = useRef(null)
  const title2 = useRef(null)

  useGSAP(() =>{
    gsap.from(title1.current, {
      y: -100,
      opacity: 0,
      duration: 2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: title1.current,
        start: 'top 80%',  // Jab card screen ke 80% par aaye
        end: 'bottom 20%',
        toggleActions: 'play none none none'
      }
    })
    gsap.from(title2.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: title2.current,
        start: 'top 80%',  // Jab card screen ke 80% par aaye
        end: 'bottom 20%',
        toggleActions: 'play none none none'
      }
    })
  })

  return (
    <>
      <div className="project-wrapper flex flex-col items-center justify-center gap-y-9 ">
          <div className="project-content-wrapper  flex flex-col justify-center items-center">
            <h1 ref={title1} className='title font-bold bg-[linear-gradient(to_bottom,_white,_black_90%)] bg-clip-text text-transparent text-[30px] sm:text-4xl    lg:text-5xl'>I MAKE INCREDIBLE</h1>
            <h1 ref={title2} className='title font-bold bg-[linear-gradient(to_bottom,_#8830da_40%,_black_90%)] bg-clip-text text-transparent text-4xl      lg:text-5xl'>PROJECTS</h1>
          </div>
          <div className="project-slides-wrapper h-full">
              <ProjectSlider projects={ProjectData} />
          </div>
      </div>
    </>
  )
}

export default Projects
