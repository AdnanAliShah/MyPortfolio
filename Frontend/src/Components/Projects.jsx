import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import two from "../Images/two.png"
import three from "../Images/three.png"
import four from "../Images/four.png"

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio website built with React and Tailwind CSS.",
    image: three,
    github: "https://github.com",
    // live: "https://yourportfolio.com",
  },
  {
    title: "E-Commerce Store",
    description: "A modern e-commerce platform with payment integration.",
    image: four,
    github: "https://github.com",
    // live: "https://yourecommerce.com",
  },
  {
    title: "Chat App",
    description: "A real-time chat application using Firebase and React.",
    image: two,
    github: "https://github.com",
    // live: "https://yourchatapp.com",
  },
];

const Projects = () => {
  return (
    <section className="bg-gray-900 text-white py-12 px-6">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-6">My Projects</h2>
        <p className="text-gray-400">Here are some of my recent works.</p>
      </div>

      <div className="mt-10 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <img src={project.image} alt={project.title} className="rounded-md w-full h-40 object-cover" />
            <h3 className="text-2xl font-semibold mt-4">{project.title}</h3>
            <p className="text-gray-400 mt-2">{project.description}</p>
            <div className="flex justify-between mt-4">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-400 hover:text-blue-600">
                <FaGithub className="mr-2" /> GitHub
              </a>
              {/* <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center text-green-400 hover:text-green-600">
                <FaExternalLinkAlt className="mr-2" /> Live Demo
              </a> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
