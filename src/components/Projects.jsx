import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
 const projects = [
  {
    title: "Employee Management System",
    image: "/employee-project.png",
    tech: ["Spring Boot", "React", "MySQL", "REST API"],
    desc:
      "Full Stack Employee Management Application with CRUD operations and API integration.",
    github:
      "https://github.com/divyagaikwad09/Final_employee-react-java",
    live: "#",
  },

  {
    title: "E-Commerce Store",
    image: "/ecommerce-project.png",
    tech: [
      "React.js",
      "JavaScript",
      "CSS3",
      "Local Storage",
    ],
    desc:
      "Modern E-Commerce application featuring product listing, category filtering, search functionality, shopping cart management, and responsive design.",
    github:
      "https://github.com/divyagaikwad09/Ecommerce_app_Final_Project",
    live: "#",
  },
  {
    title: "E-Commerce Store",
    image: "/ecommerce-project.png",
    tech: [
      "React.js",
      "JavaScript",
      "CSS3",
      "Local Storage",
    ],
    desc:
      "Modern E-Commerce application featuring product listing, category filtering, search functionality, shopping cart management, and responsive design.",
    github:
      "https://github.com/divyagaikwad09/Ecommerce_app_Final_Project",
    live: "#",
  },
  
];
  return (
    <section id="projects" className="section py-24">
      <h2 className="text-5xl font-bold text-center mb-16">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project) => (
          <div
            key={project.title}
            className="glass p-8 rounded-3xl hover:scale-105 transition duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-52 object-cover rounded-xl mb-6"
            />

            <h3 className="text-2xl font-bold mb-3">
              {project.title}
            </h3>

            <p className="text-gray-400 mb-5">
              {project.desc}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="bg-indigo-600 px-3 py-1 rounded-full text-sm"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-600 hover:bg-indigo-700 transition px-5 py-3 rounded-xl flex items-center justify-center"
              >
                <FaGithub size={20} />
              </a>

              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="glass hover:border-indigo-500 transition px-5 py-3 rounded-xl flex items-center justify-center"
              >
                <FaExternalLinkAlt size={18} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;