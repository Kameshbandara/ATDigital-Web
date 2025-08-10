import { useEffect, useState } from 'react'
import { assets } from '../assets/assets'

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false)
  
  useEffect(() => {
    if(showMenu){
      document.body.style.overflow = 'hidden'
    }else{
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [showMenu])


  return (
    <div className="absolute top-0 left-0 w-full z-10" id='Header'>
      <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-[#4F46E5]'>

        <img src={assets.logo} alt="" />
        <ul className='hidden md:flex gap-7 text-white'>
          <a href="#Services" className="cursor-pointer hover:text-gray-400"> SERVICES </a>
          <a href="#Aboutus" className="cursor-pointer hover:text-gray-400"> ABOUT US </a>
          <a href="#Contactus" className="cursor-pointer hover:text-gray-400"> CONTACT US </a>
          <a href="#Careers" className="cursor-pointer hover:text-gray-400"> CAREERS </a>

        </ul>
        
        <img onClick={() =>setShowMenu(true)} src={assets.menu_icon} alt="" className='md:hidden w-7 cursor-pointer' />
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden bg-white ${showMenu ? 'fixed w-full' : 'h-0 w-0'} right-0 top-0 overflow-hidden transition-all`}>
        <div className='flex justify-end p-6 cursor-pointer'>
          <img onClick={() =>setShowMenu(false)} src={assets.cross_icon} alt="" className='w-7' />
        </div>
        <ul className='flex flex-col gap-2 mt-5 px-5 items-start test-lg font-medium'>
          <a href="#Services" onClick={() =>setShowMenu(false)} className="px-4 py-2 rounded-full inline-block "> SERVICES </a>
          <a href="#Aboutus" onClick={() =>setShowMenu(false)} className="px-4 py-2 rounded-full inline-block"> ABOUT US </a>
          <a href="#Contactus" onClick={() =>setShowMenu(false)} className="px-4 py-2 rounded-full inline-block"> CONTACT US </a>
          <a href="#Careers" onClick={() =>setShowMenu(false)} className="px-4 py-2 rounded-full inline-block"> CAREERS </a>
        </ul>
      </div>
    </div>
  )
}
