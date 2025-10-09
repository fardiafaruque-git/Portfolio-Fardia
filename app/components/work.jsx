import React from 'react'
import Image from 'next/image'
import { workData, assets } from '@/assets/assets'
const work = () => {
    return (
        <div id='work' className='w-full px-[12%] py-20 scroll-mt-20'>
            <h3 className='text-center  text-5xl'>My Latest Work</h3>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 my-10'>
                {workData.map((project, index) => (
                    <div key={index} className='aspect-square bg-no-repeat bg-center 
             rounded-lg relative border border-gray-600 cursor-pointer group'
                        style={{ backgroundImage: `url(${project.bgImage})` }}>
                        <div className='bg-white w-9/12 rounded-md absolute bottom-5
                         left-1/2 -translate-x-1/2 py-3 px-5 
                         flex items-center justify-between duration-500
                          group-hover:bottom-7 border  border-pink-500'><a href={project.link}>
                            <div>
                                <h2 className='font-semibold'>{project.title}</h2>
                                <p className='text-sm text-gray-700'>{project.description}</p>
                            </div>
                            <div className='border rounded-full
                            border-black w-9 aspect-square flex items-center
                             justify-center'>
                                <Image src={assets.send_icon} alt='' className='w-5' />
                            
                            </div>
                        </a>



                        </div>


                    </div>
                ))}
            </div>

            <a href="https://github.com/fardiafaruque-git?tab=repositories" className='w-max flex items-center justify-center
                        text-gray-700 border border-gray-700 px-5 py-2 rounded-full
                        mx-auto my-20'>
                Show More <Image src={assets.right_arrow_bold} alt='Right arrow'
                    className='w-4' />
            </a>
        </div>
    )
}

export default work
