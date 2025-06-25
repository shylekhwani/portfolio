"use client"

import Image from 'next/image'
import React from 'react'
import { useState } from 'react'
import { assets } from '../../../assets/assets'

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
    <div id='Contact' className='w-full px-6 sm:px-[8%] lg:px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-[length:90%_auto] bg-center'>
      <h4 className='text-center mb-2 text-base sm:text-lg font-Ovo'>Connect With Me</h4>
      <h2 className='text-center text-3xl sm:text-4xl lg:text-5xl font-Ovo'>Get In Touch</h2>

      <p className='text-center max-w-2xl mx-auto mt-4 sm:mt-5 mb-8 sm:mb-12 text-sm sm:text-base font-Ovo'>
       I'd love to hear from you! Whether you have a question, want to discuss a project, or just want to say hello, feel free to reach out. please use the contact form below or connect with me on social media. Let's create something amazing together!
      </p>

      <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-8'>
            <input type='text' placeholder='Enter your name' required className='p-3 outline-none border border-gray-400 rounded-md bg-white' name='name'/>
            <input type='email' placeholder='Enter your email' required className='p-3 outline-none border border-gray-400 rounded-md bg-white' name='email' />
        </div>
        <textarea rows={6} placeholder='Enter your message' required className='w-full p-4 outline-none border border-gray-400 rounded-md bg-white mb-6' name='message'></textarea>

        <div className="flex justify-center">
            <button
            type='submit'
            className='bg-black text-white flex items-center gap-2 py-3 px-8 rounded-full hover:opacity-90 transition-all duration-300'
            >
            Submit now
            <Image src={assets.right_arrow_white} alt='arrow' className='w-4' />
            </button>
        </div>
        <p className='mt-4'>{result}</p>
      </form>
    </div>
  )
}

export default Contact
