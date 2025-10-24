'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

// Swiper styles import karen
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
// import 'swiper/css/navigation';
import Cards from '../Cards';
import './swiper.css'

interface Project {
  projectNum: string;
  title: string;
  detail: string;
  image: string;
  gitHub: string;
}

interface projectSliderProps {
  projects: Project[]
}

const ProjectSlider = ({ projects }: projectSliderProps) => {
  return (
    <div className="container">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        initialSlide={2}
        coverflowEffect={{
          rotate: 35,
          stretch: 30,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        // pagination={{
        //   clickable: true,       
        //   dynamicBullets: true,  
        //   dynamicMainBullets: 3,  
        // }}
        
        modules={[EffectCoverflow, Pagination]}  
        className="mySwiper"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <Cards projectNum={project.projectNum} title={project.title} detail={project.detail} image={project.image} gitHub={project.gitHub} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ProjectSlider