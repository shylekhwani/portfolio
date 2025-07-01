"use client"

import Image from 'next/image'
import React from 'react'
import { useState } from 'react'
import { assets } from '../../../assets/assets'
import { motion } from "motion/react"

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7dcf8132-bc6e-42d8-b225-96c78276ae43");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
    };

  return (
    <motion.div id='Contact' className='w-full px-6 sm:px-[8%] lg:px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-[length:90%_auto] bg-center'
      initial={{opacity:0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1,}}
    >
      <motion.h4 className='text-center mb-2 text-base sm:text-lg font-Ovo' 
      initial={{y: -20, opacity:0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{delay:0.3, duration: 0.5,}}
      >Connect With Me</motion.h4>

      <motion.h2 className='text-center text-3xl sm:text-4xl lg:text-5xl font-Ovo'
      initial={{y: -20, opacity:0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{delay:0.3, duration: 0.5,}}
      >Get In Touch</motion.h2>

      <motion.p className='text-center max-w-2xl mx-auto mt-4 sm:mt-5 mb-8 sm:mb-12 text-sm sm:text-base font-Ovo'
      initial={{opacity:0}}
      whileInView={{opacity: 1}}
      transition={{delay:0.7, duration: 0.5}}
      >
       I'd love to hear from you! Whether you have a question, want to discuss a project, or just want to say hello, feel free to reach out. please use the contact form below or connect with me on social media. Let's create something amazing together!
      </motion.p>

      <motion.form onSubmit={onSubmit} className='max-w-2xl mx-auto' 
      initial={{opacity:0}}
      whileInView={{opacity: 1}}
      transition={{delay:0.9, duration: 0.5,}}
      >
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-8'>
            <motion.input type='text' placeholder='Enter your name' required className='p-3 outline-none border border-gray-400 rounded-md bg-white' name='name' 
              initial={{x: -50, opacity:0}}
              whileInView={{x: 0, opacity: 1}}
              transition={{delay:1.1, duration: 0.6,}}
            />
            <motion.input type='email' placeholder='Enter your email' required className='p-3 outline-none border border-gray-400 rounded-md bg-white' name='email' 
             initial={{x: 50, opacity:0}}
              whileInView={{x: 0, opacity: 1}}
              transition={{delay:1.2, duration: 0.6,}}
            />
        </div>

        <motion.textarea rows={6} placeholder='Enter your message' required className='w-full p-4 outline-none border border-gray-400 rounded-md bg-white mb-6' name='message'
          initial={{y: 100, opacity:0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{delay:1.3, duration: 0.6,}}
        ></motion.textarea>

        <div className="flex justify-center">
            <motion.button
              whileHover={{scale: 1.05}}
              transition={{duration: 0.3}}
            type='submit'
            className='bg-black text-white flex items-center gap-2 py-3 px-8 rounded-full hover:opacity-90 transition-all duration-300'
            >
            Submit now
            <Image src={assets.right_arrow_white} alt='arrow' className='w-4' />
            </motion.button>
        </div>
        <p className='mt-4'>{result}</p>
      </motion.form>
    </motion.div>
  )
}

export default Contact
