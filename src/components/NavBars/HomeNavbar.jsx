import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { MdCall } from "react-icons/md";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Icon, MenuBar, MenuCross, NavLinks } from '../../utils';
const HomeNavbar = () => {
  
  const [isHovered, setIsHovered] = useState(false);
  const [Nav, setNav] = useState(false)
  const current = 0
  const ANav = useRef(null)
  useGSAP(() => {
    gsap.from(ANav.current, {
      y: -100,
      duration: 1,
      delay: 1
    })
  })
    return (
    <div ref={ANav}  className='w-full flex flex-col bg-transparent backdrop-blur-md shadow-lg sm:flex-row sm:justify-between sm:items-center sm:px-[2%] fixed z-100'>
      <div className='flex items-center justify-between px-2 py-3 sm:w-fit'>
        <div className='flex items-center gap-2'>
          <img className='h-[56px] w-[56px] object-contain' src={Icon} alt="" />
          <h2 className='font-heading font-normal sm:hidden'>Digital Samael</h2>
        </div>
        <div>
          <img onClick={()=>setNav(!Nav)} className='sm:hidden' src={Nav ? MenuCross : MenuBar} alt="" />
        </div>
      </div>
      <nav className={`w-full sm:w-fit self-center`}>
        <div className={`flex-col ${Nav ? 'flex' : 'hidden'} sm:flex sm:flex-row sm:gap-3 text-sm`}>
          {NavLinks.map((elem, index) => (
            <div className={`px-4 py-4 backdrop-blur-lg shadow-md lg:shadow-none lg:py-3 rounded-full ${current === index ? 'bg-[#22d3ee77] text-[#333]': 'bg-transparent'}`} key={index}>
              <Link to={`/${index === 0 ? '': elem.label.toLowerCase()}`}>
                  <div className={`flex gap-2 items-center text-sm`}>
                    <elem.icons className='h-6 w-6 text-primary' />
                    <h1 className='font-heading sm:hidden lg:block'>{elem.label}</h1>
                  </div>
              </Link>
            </div>
          ))}
        </div>
      </nav>
      <div>
        <button className={`sm:flex gap-2 font-para px-3 py-3 items-center hidden bg-transparent backdrop-blur-lg shadow-lg sm:text-2xl sm:bg-black text-slate-100 rounded-full transition-all ease-in-out delay-150 duration-1000 ${setIsHovered ? 'flex' : 'block'} lg:bg-transparent lg:text-[#333] hover:text-slate-100 hover:bg-slate-950`}
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}
        >
          <MdCall/>
          <span className={`text-base transition-all duration-500 ease-in-out ${
      isHovered ? 'opacity-100 scale-100 sm:block' : 'opacity-0 scale-0 sm:hidden'} lg:block lg:bg-transparent lg:opacity-100 lg:scale-100`}>+91 88512 52546</span>
        </button>
      </div>
      
    </div>
  )
}

export default HomeNavbar