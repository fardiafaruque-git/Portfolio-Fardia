import React from 'react'
import Image from 'next/image'
import { serviceData, assets } from '@/assets/assets'
import {motion} from 'motion/react'
const services = () => {
  return (
     <div id='services' className='w-full px-[12%] py-20 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg'>What I Offer</h4>
      <h3 className='text-center  text-5xl'>My Services</h3>
      <motion.div 
       initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.6, delay:0.3}} 
      className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10'>
        {serviceData.map(({icon,title,desccription}, index)=>(
        <div key={index} className='border border-gray-400 rounded-lg
        px-8 py-8 hover:shadow_black hover:shadow-lg '>
            <Image src={icon} alt='' className='w-10'/>
            <h3 className='text-lg font-semibold text-gray-700 my-4
                    '>{title}</h3>
            <p className='text-gray-600 text-sm leading-5'>{desccription}</p>
            
            </div>    
        ))}
      </motion.div>
    </div>
  )
}

export default services
