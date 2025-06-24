import React from 'react'
import { assets, workData } from '../../../assets/assets'
import Image from 'next/image'

const Work = () => {
  return (
    <div id='work' className='w-full px-6 sm:px-[8%] lg:px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-base sm:text-lg font-Ovo'>My portfolio</h4>
      <h2 className='text-center text-3xl sm:text-4xl lg:text-5xl font-Ovo'>My latest work</h2>

      <p className='text-center max-w-2xl mx-auto mt-4 sm:mt-5 mb-8 sm:mb-12 text-sm sm:text-base font-Ovo'>
        Welcome to my web development portfolio! Here, you'll find a showcase of my latest projects and achievements in the world of web design and development. Each project reflects my passion for creating user-friendly, visually appealing, and functional websites. Explore my work to see how I can bring your ideas to life with innovative web solutions.
      </p>

      <div className='grid grid-cols-1 my-10 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
        {workData.map((project, index) => (
            <div key={index} style={{ backgroundImage: `url(${project.bgImage})` }} className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative group'>
              <div className='absolute bg-white w-10/12 rounded-md left-1/2 -translate-x-1/2 group-hover:bottom-7 bottom-5 duration-500 flex items-center justify-between px-5 py-3'>
                <div>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                </div>
                <div>
                    <Image src={assets.send_icon} alt='send' className='w-5'/>
                </div>
             </div>
            </div>
        ))}
      </div>

    </div>
  )
}

export default Work
