import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import {motion} from 'motion/react'
const header = () => {
  return (
    <div className='w-11/12  max-w-3xl 
    mx-auto text-center h-screen flex flex-col items-center
    justify-center gap-4'>
      
        <div>
            <Image src={assets.profile_img} alt='' className='
            rounded-full w-32'/>
        </div>
        <motion.h3
        initial={{y:-20, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{duration:0.6, delay:0.3}} 
        className='flex items-end gap-2 text-xl md:text-2xl 
        mb-3 font-ovo'>Hi! I'm Fardia Faruque <Image src={assets.hand_icon}
        alt='' className='w-6'/></motion.h3>
        <h1 className='text-3xl sm:text-6xl lg:text-[66px]
        font-ovo'>Interested in Software development and ML</h1>
        <p className= 'max-w-2xl mx-auto font-ovo'>
       A tech enthusiast with a deep interest in machine learning and software development. 
       I love exploring how data and code can create smarter, real-world solutions while
        continuously learning and growing through every project.
        </p>
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <a href="#contact" className='px-10 py-3 border border-white
             rounded-full bg-black text-white  flex
             items-center gap-2'>Contact Me <Image src={assets.right_arrow_white} alt='' className='
             w-4'/></a>


             <a href="/Fardia_Faruque_Resume.pdf" download 
             className='px-10 py-3 border rounded-full border-gray-500 flex
             items-center gap-2'>My Resume
              <Image src={assets.download_icon} alt='' className=' w-4'/></a>
        </div>


        </div>

   
  )
}

export default header
