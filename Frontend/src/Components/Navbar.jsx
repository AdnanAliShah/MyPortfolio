import React from "react";
import { FaCode } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


const Navbar = () => {
  return (
    <div className="bg-gray-900 w-full text-white font-sans">
        {/* Navbar */}
        <nav className="flex justify-between items-center px-6 py-2 bg-gray-800">
          <motion.h1 whileHover={{ scale: 1.5 }} className="text-2xl font-bold">
            <Link to="/">
          <FaCode className="text-blue-500 text-4xl" />
          </Link>
          </motion.h1>
          <ul className="hidden md:flex gap-6">
            <li className="hover:text-blue-400 cursor-pointer"><Link to="/">Home</Link></li>
            <li className="hover:text-blue-400 cursor-pointer"><Link to="/projects">Projects</Link></li>
            <li className="hover:text-blue-400 cursor-pointer"><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
    </div>
      );
};

export default Navbar;
