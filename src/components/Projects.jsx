import React, { useState } from 'react';
import { FiGithub, FiExternalLink, FiX } from 'react-icons/fi';
import intern from "../assets/intern.png"
import virtual from "../assets/virtual.png"
import library from "../assets/library.png"
import portfolio from "../assets/portfolio.png"

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [loading, setLoading] = useState(true);

  const projects = [
    {
      title: "Virtual Assistant",
      description: "A smart virtual assistant designed to help users with various tasks, built with React and advanced AI integrations.",
      imageUrl: virtual,
      repoUrl: "https://github.com/KishanKumar1047/virtual._.assistant",
      demoUrl: "https://kishankumar-virtual-assistant.vercel.app",
      technologies: ["React", "JavaScript", "AI Integrations"],
      date: "2024",
    },
    {
      title: "Intern It Website",
      description: "A platform designed to connect interns with recruiters, featuring a clean UI and efficient management system.",
      imageUrl: intern,
      repoUrl: "https://github.com/KishanKumar1047/Intern_It_website",
      demoUrl: "https://kishankumar-internit.vercel.app",
      technologies: ["React", "Tailwind CSS", "Node.js"],
      date: "2024",
    },
    {
      title: "Management System Projects",
      description: "A collection of management system projects aimed at streamlining different organizational tasks.",
      imageUrl: library,
      repoUrl: "https://github.com/KishanKumar1047/ManagementSystem_Projects",
      demoUrl: "https://kishankumar-management.vercel.app",
      technologies: ["Java", "Spring Boot", "MySQL"],
      date: "2024",
    },
    {
      title: "Personal Website",
      description: "A personal website showcasing my portfolio and resume, built with React and Tailwind CSS.",
      imageUrl: portfolio,
      repoUrl: "https://github.com/KishanKumar1047/webpage",
      demoUrl: "https://kishankumar-portfolio.vercel.app",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      date: "2024",
    }
  ];
  

  const handleImageLoad = () => setLoading(false);

  return (
    <div>
      <section id="projects" className="py-32 px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4 text-[#1a3c34]">Featured Projects</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Showcasing my journey through code and creativity.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                onClick={() => setSelectedProject(project)} 
                className="group cursor-pointer transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl">
                  <div className="relative aspect-[4/3]">
                    {loading && (
                      <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                    )}
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      onLoad={handleImageLoad}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center p-6">
                      <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
                      <p className="text-sm text-gray-200 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span key={i} className="px-2 py-1 bg-[#4CAF50]/20 text-[#4CAF50] rounded text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/20 z-50 p-4 backdrop-blur-sm">
          <div className="bg-white rounded-lg max-w-2xl w-full mx-auto relative shadow-lg">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <FiX size={24} />
            </button>
            
            <div className="p-6">
              <h4 className="text-2xl font-bold mb-2">{selectedProject.title}</h4>
              <p className="text-sm text-gray-500 mb-4">{selectedProject.date}</p>
              
              <img 
                src={selectedProject.imageUrl} 
                alt={selectedProject.title} 
                className="w-full h-auto rounded-lg mb-6" 
              />
              
              <p className="text-gray-700 mb-6">{selectedProject.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.technologies.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <a 
                  href={selectedProject.repoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-[#4CAF50] text-white rounded-lg hover:bg-[#45a049] transition-colors"
                >
                  <FiGithub /> View Code
                </a>
                {selectedProject.demoUrl && (
                  <a 
                    href={selectedProject.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-[#4CAF50] text-[#4CAF50] rounded-lg hover:bg-[#4CAF50] hover:text-white transition-colors"
                  >
                    <FiExternalLink /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;