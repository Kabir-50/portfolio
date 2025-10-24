'use client'
import React, { useEffect, useRef, useState} from 'react'
import { BorderBeam } from "@/components/ui/border-beam"
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

interface flipcard {
  title: string,
  detail: string[],
  image?: string,
}
const FlipCard = ({ title, detail, image}: flipcard) => {

    const [isFlipped, setisFlipped] = useState(false)
    const cardref = useRef(null);


    useEffect(() => {
      // Use the md breakpoint (768px) to match the GSAP logic
      if(window.innerWidth >= 768){ 
        gsap.registerPlugin(ScrollTrigger);
        
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: cardref.current,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        });
        
        tl.fromTo(cardref.current, 
          { y: 200 },
          { y: 0, duration: 2, ease: 'power3.out' }
        )
        .to(cardref.current, {
          y: -15,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut"
        })
      }
    }, [])
    
  return (
    <>
      <div 
      ref={cardref}
       className="card-container"
       onMouseEnter={() => setisFlipped(true)}
       onMouseLeave={() => setisFlipped(false)}
       onClick={() => setisFlipped(true)}
        >
        <div className={`card-inner ${isFlipped ? 'flipped' : ' '}`}>
            <div className="front-card font-bold ">
              {/* Increased text size from text-2xl to md:text-3xl */}
              <h4 className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-2xl md:text-3xl'>{title}</h4>
            </div>
            <div className="back-card">
                {/* Increased list item text size and space-y */}
                <ul className="text-left space-y-2 md:space-y-3">
                    {detail.map((data, idx) => (
                    <li key={idx} className={`flex items-center justify-center bg-white/10 backdrop-blur-md rounded-lg border border-white/20 p-2 text-sm md:text-base`}>
                        {data}
                    </li>
                    ))}
                </ul>
            </div>
        </div>
        <BorderBeam
          duration={11}
          size={200}
          className="rounded-[16px] from-transparent via-white to-transparent"
        />
        <BorderBeam
          duration={11}
          delay={4}
          size={200}
          borderWidth={2}
          className="rounded-[16px] from-transparent via-purple-300 to-transparent"
        />
      </div>

      <style jsx>{`
        /* Default size for mobile/small screens */
        .card-container {
          width: 280px;
          height: 320px;
          perspective: 1000px;
          cursor: pointer;
          border-radius: 16px;
        }

        /* Medium screens (md) and up: Increase size */
        /* @media (min-width: 768px) {
          .card-container {
            width: 320px;
            height: 400px; 
          }
        } */
        
        .card-inner.flipped{
            transform: rotateY(180deg);
        }
        .front-card,.back-card{
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            -webkit-backface-visibility: hidden;
            background-image: url('${image}');
            background-size: cover;
            background-position: center;
           
            display: flex;
            border-radius: 16px;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 24px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }
        .card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }
        .back-card {
          transform: rotateY(180deg);
        }

        @media (width < 40rem) {
            .card-container {
              width: 300px;
              height: 350px; 
            }
        }
        @media (width >= 40rem) {
            .card-container {
              width: 300px;
              height: 370px; 
            }
        }
        @media (width >= 48rem) {
            .card-container {
              width: 300px;
              height: 400px; 
            }
        }
        @media (width >= 64rem) {
            
        }





      `}</style>


    </>
  )
}

export default FlipCard