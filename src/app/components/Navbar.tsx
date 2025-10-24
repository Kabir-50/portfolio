'use client'
import React from 'react'
import NavList from './NavList'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid'
import { useState } from 'react'
import MobNav from './MobNav'
import Link from 'next/dist/client/link'
import { useEffect } from 'react'


const Navbar = () => {


    const NavItems = [
        {
            name: 'About Us',
            link: '#about'
        },
        {
            name: 'Projects',
            link: '#projects'
        },
        {
            name: 'Contact',
            link: '#contact'
        }   
    ]


    const [NavbarOpen, setNavbarOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('')
    


      useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) 
                setScrolled(true)
            else 
                setScrolled(false)

            // active section
            const sections = NavItems.map(item => item.link.replace('#', ''))
            sections.forEach(section => {
                const element = document.getElementById(section)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(section)
                    }
                }
            })
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll()
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])




  return (
    <>
      <nav className={`${scrolled ? 'shadow-md bg-black/70' : 'bg-transparent'} `}>
        <div className=" h-17 px-5 lg:px-10 flex items-center justify-center">
            <div className="w-full flex items-center justify-between ">
                <div className="logo text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent [text-shadow:0_8_20px_rgba(139,92,246,0.8),0_8_40px_rgba(139,92,246,0.6),0_8_80px_rgba(139,92,246,0.4)] md:text-4xl lg:text-4xl">
                    <Link href="#top">Portfolio</Link>
                </div>
                <div className="mob-list md:hidden">
                    {
                        NavbarOpen ? 
                        <button className='cursor-pointer'>
                            <XMarkIcon className='h-8 w-8 hover:shadow-[0_8px_20px_rgba(139,92,246,0.8),0_8px_40px_rgba(139,92,246,0.6),0_8px_80px_rgba(139,92,246,0.4)]' onClick={() => setNavbarOpen(false)} />
                        </button> 
                        : 
                        <button className='cursor-pointer'>
                            <Bars3Icon className='h-8 w-8 hover:shadow-[0_8px_20px_rgba(139,92,246,0.8),0_8px_40px_rgba(139,92,246,0.6),0_8px_80px_rgba(139,92,246,0.4)]' onClick={() => setNavbarOpen(true)} />
                        </button>
                    }
                </div>
                <div className="nav-list hidden md:gap-x-6 lg:gap-x-16 md:flex text-sm ">
                    {NavItems.map((item, index) => (
                        <NavList key={index} name={item.name} link={item.link} active={activeSection === item.link.replace('#', '')} />
                    ))}
                </div>
            </div>
        </div>
        <div className={`transition-all duration-300 ease-in-out ${NavbarOpen ? 'opacity-100' : 'opacity-0'}`}>
            {NavbarOpen ? <MobNav links={NavItems} activeSection={activeSection} /> : null}
        </div>
      </nav>
    </>
  )
}

export default Navbar
