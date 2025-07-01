import React from 'react';
import Image from 'next/image';
import { assets } from '../../../assets/assets';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image src={assets.grayscale_nobuffer} alt='' className='w-36 mx-auto mb-2' />

        <div className='w-max flex items-center gap-2 mx-auto'>
          <Image src={assets.mail_icon} alt='' className='w-6' />
          yashlekhwani49@gmail.com
        </div>
      </div>

      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>&copy; 2025 Yash Lekhwani. All rights reserved</p>

        <ul className='flex items-center justify-center gap-10 mt-4 sm:mt-0'>
          <li>
            <Link target='_blank' href='https://www.linkedin.com/in/yash-lekhwani-73792b224'>
              LinkedIn
            </Link>
          </li>
          <li>
            <Link target='_blank' href='https://github.com/shylekhwani'>
              GitHub
            </Link>
          </li>
          <li>
            <Link target='_blank' href='https://leetcode.com/u/Shy-boy/'>
              LeetCode
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
