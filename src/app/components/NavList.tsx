import Link from 'next/link'
import React from 'react'


const NavList = ({ name, link, active }) => {

  return (
    <>
    {/* md:relative md:inline-block md:flex-row */}
        <ul className="relative inline-block font-bold hover:bg-gradient-to-r from-blue-600 to-purple-600 hover:bg-clip-text hover:text-transparent hover:[text-shadow:0_8px_20px_rgba(139,92,246,0.8),0_8px_40px_rgba(139,92,246,0.7),0_8px_60px_rgba(139,92,246,0.6)] ">
            <Link href={link} >
                <li className={`mx-4 font-bold cursor-pointer hover:text-purple-400 transition-all lg:text-[18px] md:text-[17px] ${active ? 'text-purple-500' : ''}`}>{name}</li>
                {active && ( <span className="absolute left-0 bottom--1 w-full h-[2px] bg-purple-500 rounded-full transition-all duration-300"></span>)}
            </Link>
            
        </ul>
    </>
  )
}

export default NavList
