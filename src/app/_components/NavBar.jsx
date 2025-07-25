"use client";

import React, { useRef } from "react";
import { assets } from "../../../assets/assets.js";
import Image from "next/image.js";


const NavBar = ({ isDarkMode, setIsDarkMode }) => {
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  return (
    <>
      {/* Background design */}
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>

      <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex justify-between items-center bg-white dark:bg-darkTheme z-50 shadow-md">
        <a href="#top">
          <Image
            src={assets.grayscale_nobuffer}
            alt="Logo"
            width={100}
            height={100}
            className="cursor-pointer"
          />
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 text-lg rounded-full px-12 py-3 bg-white dark:bg-darkTheme shadow-sm bg-opacity-50 dark:bg-opacity-80">
          <li><a className="font-Ovo" href="#top">Home</a></li>
          <li><a className="font-Ovo" href="#about">About Me</a></li>
          <li><a className="font-Ovo" href="#Services">Services</a></li>
          <li><a className="font-Ovo" href="#work">My Work</a></li>
          <li><a className="font-Ovo" href="#Contact">Contact Me</a></li>
        </ul>

        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          {/* <button onClick={() => setIsDarkMode((prev) => !prev)}>
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt=""
              className={`w-6 ${isDarkMode ? "invert" : ""}`}
            />
          </button> */}

          {/* Contact Button */}
          <a
            href="#Contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 dark:border-white rounded-full ml-4 font-Ovo"
          >
            Contact{" "}
            <Image
              src={assets.arrow_icon}
              className="w-3"
              alt="arrow"
            />
          </a>

          {/* Mobile Menu Toggle */}
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image src={assets.menu_black} alt="" className="w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 dark:bg-darkTheme transition duration-500 items-center gap-4"
        >
          <div className="absolute top-6 right-6" onClick={closeMenu}>
            <Image src={assets.close_black} alt="" className="w-5 cursor-pointer" />
          </div>

          <li><a className="font-Ovo" onClick={closeMenu} href="#top">Home</a></li>
          <li><a className="font-Ovo" onClick={closeMenu} href="#about">About Me</a></li>
          <li><a className="font-Ovo" onClick={closeMenu} href="#Services">Services</a></li>
          <li><a className="font-Ovo" onClick={closeMenu} href="#work">My Work</a></li>
          <li><a className="font-Ovo" onClick={closeMenu} href="#Contact">Contact Me</a></li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
