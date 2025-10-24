import React, { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {IconArrowUpRight} from '@tabler/icons-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger)

interface CardsProps {
  title: string;
  detail: string;
  image: string;
  projectNum: string;
  gitHub: string;
}

const Cards = ({ title, detail, image, projectNum, gitHub }: CardsProps) => {

  const [isHover, setisHover] = useState(false)

  const cards = useRef(null)

  useGSAP(() => {
    gsap.from(cards.current, {
      y: 100,
      opacity: 0,
      duration: 1.5,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: cards.current,
        start: 'top 80%',  
        end: 'bottom 20%',
        toggleActions: 'play none none none'
      }
    })
  })


  return (
    <div ref={cards} className="max-w-sm rounded-[46px] shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-neutral-950  relative h-[460] sm:h-[450px] md:h-[500px] lg:h-[480px] xl:h-[500px]">
      <h1 className='px-5 pt-10 font-bold '>
        <span className='text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-b from-white/80 to-black bg-clip-text text-transparent'>{projectNum}</span>
      </h1>
      <div className="relative z-10 px-5 py-7   flex flex-col justify-center gap-y-2">
        <h3 className="text-[20px] sm:text-[25px] md:text-2xl font-semibold text-white ">
          {title}
        </h3>
        <p className="text-white text-[13.5px] sm:text-[15px] md:text-[15px]">
          {detail}
        </p>
        <div
          className='self-center relative '
          onMouseEnter={() => setisHover(true)}
          onMouseLeave={() => setisHover(false)}
        >
          <div className="relative w-[210px] h-[180px] sm:w-[200px] sm:h-[150px] md:w-[250px] md:h-[200px] mt-4 rounded-[20px] overflow-hidden bg-neutral-900">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
          
          <span className={`bg-black absolute top-8 right-2 rounded-full flex items-center justify-center w-8 h-8 border-2 border-purple-600 hover:bg-purple-600 hover:scale-110 cursor-pointer transition-opacity duration-500 ease-in-out ${isHover ? 'opacity-100' : 'opacity-0'}`}>
            <Link href={ gitHub } target="_blank">
              <IconArrowUpRight className='size-7'/>
            </Link>
          </span>
        </div>
      </div>
      <div className='absolute bottom-0 right-0 w-[200px] h-[200px] bg-gradient-to-bl from-purple-400/90 via-purple-400/60 to-transparent rounded-tl-full blur-3xl opacity-100'></div>
    </div>
  )
}

export default Cards