import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaReact,
  FaJs,
} from "react-icons/fa";
import img from "../Images/copy.jpg";
import img1 from "../Images/One.jpg";

const Home = () => {
  
  return (
    <div className="bg-gray-900 text-white font-sans">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center py-6 px-4">
        <motion.div 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }} 
          className="text-center md:text-left md:w-1/2"
        >
          <h2 className="text-4xl font-bold">Hello! I'm Adnan Ali Shah</h2>
          <p className="text-gray-400 mt-2">
            I'm a freelance <span className="text-blue-400">web developer.</span> <br />
            Focused on HTML, CSS3, React, Tailwind CSS, and JavaScript.
          </p>
          <div className="mt-4 flex gap-4">
            <motion.button 
              whileHover={{ scale: 1.1 }} 
              className="bg-blue-500 px-5 py-2 rounded-lg"
            >
              <a href="mailto: shahadnanali6@gmail.com">Email Me</a>
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.1 }} 
              className="border border-blue-400 px-5 py-2 rounded-lg hover:bg-gray-800"
            >
              <a href="/assets/Adnan Ali Shah.pdf" download="Adnan Ali Shah.pdf">Download CV</a>
            </motion.button>
          </div>
        </motion.div>
        <motion.img 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8 }} 
          src={img} 
          alt="Profile" 
          className="w-60 h-60 rounded-full mt-4 md:mt-0 md:ml-10"
        />
      </section>

      {/* About Me */}
      <section className="bg-gray-900 text-white py-12 px-6 md:px-20">
        <motion.h2 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }} 
          whileHover={{scale: 1.5}}
          className="text-4xl font-bold rounded-lg  text-center"
        >
          About Me
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center mt-10">
          <motion.img 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: -10 }} 
            transition={{ duration: 0.8 }} 
            src={img} 
            alt="Profile" 
            className="w-40 h-40 rounded-full border-4 border-blue-500 shadow-lg"
          />
          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }} 
            className="md:ml-10 mt-6 md:mt-0 text-center md:text-left"
          >
            <h2 className="text-gray-400 text-2xl font-bold mt-2">
              A passionate web developer creating interactive experiences.
            </h2>
            <p className="text-gray-400 mt-2">
              I'm a frontend developer specializing in modern, responsive, and user-friendly web applications. With expertise in React, Tailwind CSS, and JavaScript, I create high-performance interfaces ensuring seamless user experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mt-12 text-center">
        <motion.h3 whileHover={{scale: 1.5}} className="text-3xl font-bold">My Skills</motion.h3>
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }} 
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 justify-center mt-10 text-4xl"
        >
          {[FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub].map((Icon, index) => (
            <motion.div 
              key={index} 
              whileHover={{ scale: 1.2, rotate: 5 }} 
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="group flex flex-col items-center cursor-pointer"
            >
              <Icon className="text-blue-400" />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="flex flex-col md:flex-row py-12 px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8 }} 
          className="md:w-1/2"
        >
          <img src={img1} alt="Client" className="w-40 h-40 rounded-full mx-auto md:mx-0" />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }} 
          className="md:w-200 ml-5 md:text-left md:h-1/2 mt-10"
        >
          <p className="text-gray-400">
            "Hey there! Working with Adnan was an absolute pleasure! His attention to detail, creativity, and professionalism exceeded my expectations."
          </p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center bg-gray-800">
        <p>Created by Adnan Ali Shah | All Rights Reserved</p>
        <motion.div whileHover={{scale: 1.5}} className="flex justify-center gap-6 text-gray-400 mt-3 text-2xl">
          <motion.a whileHover={{scale: 1.5}} href="https://github.com/AdnanAliShah" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-white transition-colors duration-300" />
          </motion.a>
          <motion.a whileHover={{scale: 1.5}} href="https://www.linkedin.com/in/adnan-ali-shah-ad2484" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-white transition-colors duration-300" />
          </motion.a>
          <motion.a whileHover={{scale: 1.5}} href="mailto: shahadnanali6@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="hover:text-white transition-colors duration-300" />
          </motion.a>
        </motion.div>
      </footer>
    </div>
  );
};

export default Home;
