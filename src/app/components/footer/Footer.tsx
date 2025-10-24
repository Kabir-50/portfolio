import React from 'react'
import { IconMail, IconPhone } from '@tabler/icons-react'

const Footer = () => {
  return (
    <footer className="w-full bg-black border-t border-gray-800 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-gray-400 text-sm">
          <a 
            href="mailto:kabeer.0750@gmail.com" 
            className="hover:text-purple-500 transition-colors flex items-center gap-2"
          >
            <IconMail size={20} stroke={1.5} />
            kabeer.0750@gmail.com
          </a>
          
          <span className="hidden sm:inline text-gray-600">|</span>
          
          <a 
            href="tel:+923421275447" 
            className="hover:text-purple-500 transition-colors flex items-center gap-2"
          >
            <IconPhone size={20} stroke={1.5} />
            +92 342 1275447
          </a>
        </div>
        
        <p className="text-center text-gray-600 text-xs mt-4">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer