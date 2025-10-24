import Link from 'next/link'
import React from 'react'

const HeroSocialIcon = ({ link, icon, name, download }) => {
  return (
    <div className="relative flex items-center">
      <div className="group relative flex items-center">
        <Link
          href={link}
          target="_blank"
          download={download}
          className="hover:shadow-[0_8px_20px_rgba(139,92,246,0.8),0_8px_40px_rgba(139,92,246,0.6),0_8px_80px_rgba(139,92,246,0.4)] transition-all duration-300"
        >
          {icon}
        </Link>

        {/* Tooltip text — only shows when icon itself hovered */}
        <span className="absolute left-14 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent md:text-[1rem] lg:text-[1.3rem]">
          {name}
        </span>
      </div>
    </div>
  )
}

export default HeroSocialIcon
