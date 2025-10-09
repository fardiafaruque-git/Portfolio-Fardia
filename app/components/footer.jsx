import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const footer = () => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image src={assets.logo} alt='' className='w-36 mx-auto mb-2'/>
        <div className='w-max flex items-center mx-auto gap-2'>
        <Image src={assets.mail_icon} alt='' className='w-6'/>
        fardiafaruque@gmail.com
        </div>
      </div>

    <div className='text-cente sm:flex items-center justify-between border-t border-gray-400 mt-12 py-6 mx-[10%]'>
   
   <p>© 2025 Fardia Faruque. All Rights Reserved</p>
   <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>

    <li><a target='_blank' href="https://github.com/fardiafaruque-git">Github</a></li>
    <li><a target='_blank' href="https://www.linkedin.com/in/fardia-faruque-83a9521b0/">LinkedIn</a></li>
    </ul>
    
    </div>

    </div>
  )
}

export default footer
