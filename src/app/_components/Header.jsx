import React from 'react'
import Image from 'next/image'
import { assets } from '../../../assets/assets'
import { motion } from "motion/react"

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl mx-auto text-center flex flex-col items-center justify-center h-screen gap-4'>
      {/* <motion.div
      initial={{scale:0}}
      whileInView={{scale: 1}}
      transition={{duration: 0.8, type: 'spring', stiffness: 100}}
      >
        <Image src={assets.profile_img} alt="" className='rounded-full w-32'/>
      </motion.div> */}

      <motion.h3
      initial={{y: -20, opacity:0}}
      whileInView={{y: 0, opacity:1}}
      transition={{duration: 0.6, delay: 0.3}}
       className='flex items-end gap-2 text-xl md:text-2xl lg:text-3xl mb-3 font-Ovo'
       >
        Hi! I'm Yash Lekhwani <Image src={assets.hand_icon} alt="hand" className='w-6' />
      </motion.h3>

      <motion.h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'
      initial={{y: -30, opacity:0}}
      whileInView={{y: 0, opacity:1}}
      transition={{duration: 0.8, delay: 0.5}}
      >
        Full Stack Web Developer</motion.h1>
      <motion.p className='max-w-2xl mx-auto font-Ovo'
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration: 0.6, delay: 0.7}}
      >
        I am Full Stack Web Developer from India
      </motion.p>

      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <motion.a href="#Contact" className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2'
        initial={{y: 30, opacity:0}}
        whileInView={{y: 0, opacity:1}}
        transition={{duration: 0.6, delay: 1}}
        >
            Contact me  <Image src={assets.right_arrow_white} alt="" className='w-4'/>
        </motion.a>

        <motion.a href="/Yash_Resume.pdf" download className='px-10 py-3 border border-gray-500 rounded-full flex items-center gap-2'
         initial={{y: 30, opacity:0}}
        whileInView={{y: 0, opacity:1}}
        transition={{duration: 0.6, delay: 1.2}}
        >
             My Resume<Image src={assets.download_icon} alt="" className='w-4'/>
        </motion.a>
      </div>
    </div>
  )
};

export default Header
