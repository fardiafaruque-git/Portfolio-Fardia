import React, { useEffect, useRef,useState } from "react";

import { assets } from '@/assets/assets'
import Image from 'next/image'
const navbar = () => {
    const [isScroll, setIsScroll] = useState(false)
    const sidemenuRef = useRef();
    const openMenu = () => {
        sidemenuRef.current.style.transform = 'translateX(0)';
    }

    const closeMenu = () => {
        sidemenuRef.current.style.transform = 'translateX(100%)';
    }
    useEffect(() => {
        window.addEventListener('scroll',() => {
            if(scrollY>50){
                setIsScroll(true)
            }
            else
            {
                setIsScroll(false)
            }
    }) 
    }, [])
  return (
    <>
      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4
      flex items-center justify-between z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm": ""}`} >
        <div className='fixed top-0 right-0 w-11/12 -z-10 
        translate-y-[-100%]'>
            <Image src={assets.header_bg_color} alt="" className='w-full'/>
        </div>
        <a href="#" >
            <Image src={assets.logo} alt="" className='w-28 cursor-pointer 
            mr-14'/>
        </a>
        <ul className=' hidden md:flex items-center gap-10 lg:gap-8 
        rounded-full px-12 py-3'>
            <li><a href="#top">Home</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#work">My Work</a></li>
            <li><a href="#contact">Contact Me</a></li>
        </ul>
        
        <div>
            <a href="https://www.linkedin.com/in/fardia-faruque-83a9521b0" className=' hidden lg:flex 
            items-center ml-4 gap-3 rounded-full px-10 py-2.5 border border-gray-500'> LinkedIn <Image src={assets.arrow_icon}
             alt="" className='w-3' /> </a>

             <button className='block md:hidden ml-4' onClick={openMenu}>
                <Image src={assets.menu_black} alt="" className='w-6'/>
            </button>
        </div>



        {/* mobile menu */}
                <ul
            ref={sidemenuRef}
            className='flex md:hidden flex-col gap-6 px-10 py-20 fixed top-0 right-0 bottom-0
            bg-rose-50 w-64 h-screen z-50 transition-transform duration-500'
            style={{ transform: 'translateX(100%)' }}  // start hidden
            >
            <div className='absolute top-6 right-6' onClick={closeMenu}>
                <Image src={assets.close_black} alt="close" className='w-5 cursor-pointer' />
            </div>

            <li><a onClick={closeMenu} href="#top">Home</a></li>
            <li><a onClick={closeMenu} href="#about">About Me</a></li>
            <li><a onClick={closeMenu} href="#services">Services</a></li>
            <li><a onClick={closeMenu} href="#work">My Work</a></li>
            <li><a onClick={closeMenu} href="#contact">Contact Me</a></li>
            </ul>


      </nav>
    </>
  )
}

export default navbar
