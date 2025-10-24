import React from 'react'
import NavList from './NavList'

const MobNav = ({ links, activeSection  }) => {
  return (
    <>
      <div className=" p-4 flex justify-center text-white md:hidden">
        <ul className="flex flex-col gap-y-5">
          {links.map((link, index) => (
            <li key={index} >
              <NavList name={link.name} link={link.link} active={activeSection === link.link.replace('#', '')} /> 
            </li>
            
          ))}
        </ul>
      </div>
    </>
  )
}

export default MobNav
