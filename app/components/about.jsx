import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import {motion} from 'motion/react'
const about = () => {
  return (
    <div
    id='about' className='w-full px-[12%] py-20 scroll-mt-20'
    >
      <h4 className='text-center mb-2 text-lg'>Introduction</h4>
      <h3 className='text-center  text-5xl'>About me</h3>
    <div className='flex gap-20 my-20 flex-col lg:flex-row 
    items-center'>

        <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
            <Image src={assets.user_image} alt='user' className
            ='w-full rounded-3xl'/>
        </div>
        <div className='flex-1'>
            <p className='max-w-2xl mb-10'>I’m Fardia Faruque, a passionate learner with a strong interest in machine learning and software development.
                 I love exploring how data and algorithms can solve real-world problems and make technology smarter. 
                 My work often involves experimenting with models, building clean and efficient code, and learning new frameworks to improve performance and accuracy.
                I enjoy combining logic with creativity to bring ideas to life through development. 
                Every project I take on is a step toward learning, improving, and creating meaningful solutions.</p>


        <ul className=' grid grid-cols-1 sm:grid-cols-3 gap-6
        max-w-2xl'>
            {infoList.map(({icon,iconDark, title, description}, index)=>(
                <li key={index} className='border-[0.5px] border-gray-400
                rounded-xl p-6 cursor-pointer hover:bg-lighthover
                hover:-translate-y-1 duration-500
                hover:shadow-black hover:shadow-lg'>
                    <Image src={icon} alt={title} className='w-7 mt-3'/>
                    <h3 className='my-4 font-semibold text-gray-700
                    '>{title}</h3>
                    <p className='text-gray-600 text-sm'>{description}</p>
                </li>
            ))}
        </ul>

        <h4 className='my-6 text-gray-700'>Tools I use</h4>
        <ul className='flex items-center gap-3 sm:gap-5'>
            {toolsData.map((tool,index)=>(
                <li className='flex place-items-center justify-center
                w-12 sm:w-14 aspect-square border border-gray-400
                rounded-lg cursor-pointer
                hover:-translate-y-1 duration-500'
                 key={index} >
                    <Image src={tool} alt='Tool' className='w-5
                    sm:w-7'/>
                </li>   )
            )}
        </ul>
        </div>
    </div>
    </div>
  )
}

export default about
