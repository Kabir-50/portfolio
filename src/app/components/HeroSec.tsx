'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import {IconBrandGithubFilled, IconBrandLinkedinFilled, IconFileCvFilled} from '@tabler/icons-react';
import HeroSocialIcon from './HeroSocialIcon'
import Tilt from 'react-parallax-tilt';




const HeroSec = () => {

    const webRef = useRef<HTMLHeadingElement | null>(null);
    const devRef = useRef<HTMLHeadingElement | null>(null);
    const leftRef = useRef<HTMLDivElement | null>(null);
    const centerRef = useRef<HTMLDivElement | null>(null);
    const rightRef = useRef<HTMLDivElement | null>(null);

    useGSAP(() => {

        const tl = gsap.timeline();
        
        // Left section - slide from left and fade in
        tl.fromTo(
          leftRef.current,
          { x: -100, opacity: 0 },
          { x: 0, opacity: 1, duration: 1, ease: 'power3.out' }
        )
        // Center image - fade in
        .fromTo(
          centerRef.current,
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 1, ease: 'power3.out' },
          '-=0.7'
        )
        // Right section - slide from right and fade in
        .fromTo(
          rightRef.current,
          { x: 100, opacity: 0 },
          { x: 0, opacity: 1, duration: 1, ease: 'power3.out' },
          '-=1.5'
        );


        if (window.innerWidth < 768) return;
        const webLetters = webRef.current?.querySelectorAll('.letter');
        const devLetters = devRef.current?.querySelectorAll('.letter');

        if (webLetters && devLetters) {
          const tl = gsap.timeline({
            repeat: -1,       // infinite loop
            repeatDelay: 1,   // wait 1 second before next cycle
          });

          // 1️⃣ Enter: from top → bounce down
          tl.fromTo(
            webLetters,
            { y: -80, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              ease: 'elastic.out(1, 0.5)',
              duration: 1.2,
              stagger: 0.08,
            }
          )
            .fromTo(
              devLetters,
              { y: -80, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                ease: 'elastic.out(1, 0.5)',
                duration: 1.2,
                stagger: 0.08,
              },
              '-=0.8'
            )

            .to({}, { duration: 1 })

            .to(
              webLetters,
              {
                y: 80,
                opacity: 0,
                ease: 'elastic.in(1, 0.5)', 
                duration: 1.2,
                stagger: 0.08,
              },
              '-=0.8'
            )
            .to(
              devLetters,
              {
                y: 80,
                opacity: 0,
                ease: 'elastic.in(1, 0.5)',
                duration: 1.2,
                stagger: 0.08,
              },
              '-=0.8'
            );
        }
      });



      const webText = 'Web';
      const devText = 'Developer';

      const socialIconData = [
        {
          name: "Github",
          link: "https://github.com/Kabir-50?tab=repositories",
          icon: <IconBrandGithubFilled className='size-7 sm:size-8 lg:size-10'/>
        },
        {
          name: "LinkedIn",
          link: "https://www.linkedin.com/in/muhammad-kabeer-46992436b/",
          icon: <IconBrandLinkedinFilled className='size-7 sm:size-8 lg:size-10'/>
        },
        {
          name: "Resume",
          link: "document/Mr_Kabeer_Resume.docx",
          icon: <IconFileCvFilled className='size-7 sm:size-8 lg:size-10'/>,
          download: true,
        },
        
      ]





  return (
    <>
      <div 
      className="pt-8 sm:pt-20 md:pt-0 flex justify-center">
        <div className="hero-wrapper h-screen flex flex-col justify-center bg-hero-pattern md:flex-row md:items-center md:w-[100%]">
          
          <div ref={leftRef} className="hero-left pl-6 sm:pl-6 md:w-[30%] md:flex md:flex-col md:items-end lg:w-[40%]">
            <h3 className='text-[#8830da] font-bold sm:text-2xl lg:text-[1.7rem]'>Hello, I&apos;m</h3>
            <h2 className="hero-name text-5xl font-bold text-white lg:text-[3.5rem]"><i>Kabir<br/>Sheikh</i></h2>
          </div>
          <div ref={centerRef} className="overflow-hidden">
            <Tilt
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              perspective={1000}
              scale={1.05}
              gyroscope={true}
            >
              <div className="relative hero-center pt-4 self-center">
                <Image
                  src="/images/animated boy bg.png"
                  alt="Kabir Sheikh"
                  width={800}
                  height={200}
                  className="md:w-[700px] lg:w-[850px]"
                />
                <div className="absolute bottom-[-10px] left-0 right-0 h-9 bg-gradient-to-t from-black/100 via-black/100 to-red"></div>
              </div>
            </Tilt>
          </div>
          <div ref={rightRef} className="hero-right self-center sm:self-start sm:left-45 md:self-center md:left-0 relative bottom-2 sm:bottom-3 md:w-[30%] lg:w-[40%]">
            <h3 className='text-[#8830da] font-bold text-[1.2rem] sm:text-[1.2rem] lg:text-[1.7rem]'>creative</h3>
            <h2 ref={webRef} className="text-4xl font-bold absolute sm:text-4xl lg:text-5xl" >
              {webText.split('').map((char, i) => (
              <span key={i} className="letter bg-[linear-gradient(to_bottom,_#8830da_40%,_black_90%)] bg-clip-text text-transparent inline-block ">
                {char}
              </span>
            ))}
            </h2>
            <h2 ref={devRef} className="text-4xl font-bold text-white relative top-6 sm:text-4xl sm:top-6 lg:text-5xl">
              {devText.split('').map((char, i) => (
              <span key={i} className="letter inline-block">
                {char}
              </span>
            ))}
            </h2>
          </div>
          <div className="social-icons relative left-5 bottom-50 flex flex-col gap-y-4 sm:bottom-40 sm:left-7 sm:gap-y-6 md:absolute md:bottom-5 md:left-5.5 lg:left-22">
            {
            socialIconData.map((icons,index) => (
              <HeroSocialIcon key={index} link={icons.link} icon={icons.icon} download={icons.download} name={icons.name}/>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSec
