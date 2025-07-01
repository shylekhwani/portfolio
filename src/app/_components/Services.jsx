import React from 'react';
import { assets, serviceData } from '../../../assets/assets';
import Image from 'next/image';
import { motion } from "motion/react"

const Services = () => {
  return (
    <motion.div id='Services' 
    className='w-full px-6 sm:px-[8%] lg:px-[12%] py-10 scroll-mt-20'
    initial={{opacity:0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1,}}
    >
      <motion.h4 className='text-center mb-2 text-base sm:text-lg font-Ovo'
      initial={{y: -20, opacity:0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 0.5, delay: 0.3}}
       >
        What I Offer</motion.h4>

      <motion.h2 className='text-center text-3xl sm:text-4xl lg:text-5xl font-Ovo'
      initial={{y: -20, opacity:0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 0.5, delay: 0.5}}
      >
        My Services</motion.h2>

      <motion.p className='text-center max-w-2xl mx-auto mt-4 sm:mt-5 mb-8 sm:mb-12 text-sm sm:text-base font-Ovo'
      initial={{opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 0.7, delay: 0.5}}
      >
        I am a Full Stack Developer
      </motion.p>

      <motion.div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'
      initial={{opacity:0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 0.6, delay: 0.9}}
      >
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
            whileHover={{scale: 1.05}}
            key={index}
            className='border border-gray-400 rounded-lg px-6 sm:px-8 py-10 sm:py-12 hover:shadow-black cursor-pointer hover:-translate-y-1 duration-500 transition-all'
          >
            <Image src={icon} alt="" className='w-8 sm:w-10 mb-2' />
            <h3 className='text-base sm:text-lg my-3 sm:my-4 text-gray-700'>{title}</h3>
            <p className='text-sm text-gray-600 leading-5'>{description}</p>
            {/* <a className='flex items-center gap-2 text-sm mt-4 sm:mt-5 text-blue-600' href={link}>
              Read More
              <Image alt='' src={assets.right_arrow} className='w-4' />
            </a> */}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
