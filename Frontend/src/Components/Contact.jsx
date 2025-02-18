import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  const [messageSent, setMessageSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        setMessageSent(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setMessageSent(false), 3000);
      } else {
        alert(result.error);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again later.");
    }
  };
  

  return (
    <div className="bg-gray-900 text-white py-12 px-6 md:px-20">
      {/* Header */}
      <h2 className="text-4xl font-bold text-center">Contact Me</h2>
      <p className="text-gray-400 text-center mt-2">Let's work together! Feel free to reach out.</p>

      {/* Contact Info Section */}
      <div className="flex flex-wrap justify-center gap-10 mt-10">
        <div className="flex items-center gap-4">
          <FaEnvelope className="text-blue-400 text-2xl" />
          <p>shahadnanali6@gmail.com</p>
        </div>
        <div className="flex items-center gap-4">
          <FaPhone className="text-green-400 text-2xl" />
          <p>+92 316 5238384</p>
        </div>
        <div className="flex items-center gap-4">
          <FaMapMarkerAlt className="text-red-400 text-2xl" />
          <p>Gilgit, Gilgit Baltistan, Pakistan</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="mt-12 max-w-lg mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 bg-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 bg-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 bg-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Success Message */}
        {messageSent && (
          <div className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-md text-center">
            ✅ Message sent successfully!
          </div>
        )}
      </div>

      {/* Social Media Links */}
      <div className="mt-10 text-center">
        <motion.h3 whileHover={{scale: 1.2}} className="text-xl font-semibold">Connect with me</motion.h3>
        <motion.div whileHover={{scale: 1.5}} className="flex justify-center gap-6 text-2xl mt-4">
          <a href="https://github.com/AdnanAliShah" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-gray-400 hover:text-white transition duration-300" />
          </a>
          <a href="https://www.linkedin.com/in/adnan-ali-shah-ad2484" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-blue-400 hover:text-white transition duration-300" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
