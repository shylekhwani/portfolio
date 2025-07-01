import React from 'react'
import { assets, workData } from '../../../assets/assets'
import Image from 'next/image'
import { motion } from "motion/react"

const Work = () => {
  return (
    <motion.div id='work' className='w-full px-6 sm:px-[8%] lg:px-[12%] py-10 scroll-mt-20'
    initial={{opacity:0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1,}}
    >
      <motion.h4 className='text-center mb-2 text-base sm:text-lg font-Ovo'
      initial={{y: -20, opacity:0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{delay:0.3, duration: 0.5,}}
      >My portfolio</motion.h4>

      <motion.h2 className='text-center text-3xl sm:text-4xl lg:text-5xl font-Ovo'
      initial={{y: -20, opacity:0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{delay:0.3, duration: 0.5,}}
      >My latest work</motion.h2>

      <motion.p className='text-center max-w-2xl mx-auto mt-4 sm:mt-5 mb-8 sm:mb-12 text-sm sm:text-base font-Ovo'  
      initial={{opacity:0}}
      whileInView={{opacity: 1}}
      transition={{delay:0.7, duration: 0.5,}}>
        Welcome to my web development portfolio! Here, you'll find a showcase of my latest projects and achievements in the world of web design and development. Each project reflects my passion for creating user-friendly, visually appealing, and functional websites. Explore my work to see how I can bring your ideas to life with innovative web solutions.
      </motion.p>

      <motion.div className='grid grid-cols-1 my-10 sm:grid-cols-2 lg:grid-cols-3 gap-5'
      initial={{opacity:0}}
      whileInView={{opacity: 1}}
      transition={{delay:0.9, duration: 0.6,}}
      >
        {workData.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target='_blank'
            rel='noopener noreferrer'
          >
             <motion.div key={index} style={{ backgroundImage: `url(${project.bgImage})` }} className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative group' whileHover={{scale: 1.05}} transition={{duration: 0.3}}>
              <div className='absolute bg-white w-10/12 rounded-md left-1/2 -translate-x-1/2 group-hover:bottom-7 bottom-5 duration-500 flex items-center justify-between px-5 py-3'>
                <div>
                    <h2 className='font-semibold'>{project.title}</h2>
                    <p className='text-sm text-gray-700'>{project.description}</p>
                </div>
                <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0px_#000] group-hover:bg-lime-300 cursor-pointer transition'>
                    <Image src={assets.send_icon} alt='send' className='w-3'/>
                </div>
             </div>
            </motion.div>
          </a>
        ))}
      </motion.div>

      {/* <motion.a href="" className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500'
      initial={{opacity:0}}
      whileInView={{opacity: 1}}
      transition={{delay: 1.1, duration: 0.5,}}
      >
       Show more <Image src={assets.right_arrow_bold} alt='Right arrow' className='w-4'/>
      </motion.a> */}

    </motion.div>
  )
}

export default Work
