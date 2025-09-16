import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { assets, infoList, toolsData } from "../../../assets/assets";

const fadeInUp = (delay = 0.3) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
  viewport: { once: true },
});

const fadeIn = (delay = 0.3) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: 0.6, delay },
  viewport: { once: true },
});

const About = () => {
  return (
    <motion.section
      id="about"
      className="w-full px-6 sm:px-[8%] lg:px-[12%] py-10 scroll-mt-20"
      {...fadeIn()}
    >
      {/* Headings */}
      <motion.h4
        className="text-center mb-2 text-lg font-Ovo"
        {...fadeInUp(0.3)}
      >
        Introduction
      </motion.h4>

      <motion.h2
        className="text-center text-3xl sm:text-4xl lg:text-5xl font-Ovo"
        {...fadeInUp(0.5)}
      >
        About Me
      </motion.h2>

      <div className="mt-12 flex flex-col items-center">
        {/* About Description */}
        <motion.p
          className="max-w-3xl text-center mb-12 font-Ovo text-sm sm:text-base leading-6 text-gray-700"
          {...fadeIn(0.8)}
        >
          I am a Full Stack Web Developer with a passion for creating dynamic
          and responsive web applications. I have a strong foundation in both
          front-end and back-end technologies, allowing me to build complete
          solutions that deliver exceptional user experiences. My expertise
          includes HTML, CSS, JavaScript, React, Node.js, and various databases.
          I am committed to continuous learning and staying updated with the
          latest industry trends to ensure that my skills remain relevant and
          effective.
        </motion.p>

        {/* Info Cards */}
        <motion.ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mb-10"
          {...fadeIn(1)}
        >
          {infoList.map(({ icon, title, description }, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.05, y: -4 }}
              className="border border-gray-400 rounded-xl p-6 cursor-pointer 
                         hover:bg-lightHover transition-all duration-500 hover:shadow-md"
            >
              <Image src={icon} alt={title} className="w-7 mt-3" />
              <h3 className="my-4 font-semibold text-gray-700">{title}</h3>
              <p className="text-gray-600 text-sm">{description}</p>
            </motion.li>
          ))}
        </motion.ul>

        {/* Tools Section */}
        <motion.h4
          className="mb-6 text-gray-700 font-Ovo text-lg"
          {...fadeInUp(1.3)}
        >
          Tools I use
        </motion.h4>

        <motion.ul
          className="flex flex-wrap justify-center gap-5"
          {...fadeIn(1.5)}
        >
          {toolsData.map((tool, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1, y: -4 }}
              className="flex items-center justify-center w-12 sm:w-14 aspect-square 
                         border border-gray-400 rounded-lg cursor-pointer 
                         transition-all duration-500"
            >
              <Image src={tool} alt="tool" className="w-5 sm:w-7" />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.section>
  );
};

export default About;
