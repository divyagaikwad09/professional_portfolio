import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaEnvelope,
} from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center section pt-24"
    >
      <div className="grid lg:grid-cols-2 gap-20 items-center">

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-indigo-500/20 blur-3xl rounded-full"></div>

            <img
              src="/profile.jpg"
              alt="Divya Gaikwad"
              className="
                relative
                w-72
                h-72
                md:w-80
                md:h-80
                lg:w-96
                lg:h-96
                object-cover
                rounded-full
                border-4
                border-indigo-500
                shadow-[0_0_50px_rgba(99,102,241,0.4)]
                hover:scale-105
                transition-all
                duration-500
              "
            />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Badge */}
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium">
            🚀 Available for Opportunities
          </div>

          <p className="text-indigo-400 mb-3 text-lg">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Divya
            <span className="gradient-text"> Gaikwad</span>
          </h1>

          <div className="text-2xl md:text-3xl font-semibold mt-6 h-20">
            <TypeAnimation
              sequence={[
                "Java Full Stack Developer",
                2000,
                "Spring Boot Developer",
                2000,
                "React.js Developer",
                2000,
                "ERP DevOps Analyst",
                2000,
              ]}
              repeat={Infinity}
            />
          </div>

          <p className="text-gray-400 mt-6 leading-8 text-lg">
            Passionate Software Engineer with 2+ years of professional
            experience at Tata Consultancy Services. Skilled in Java,
            Spring Boot, React.js, REST APIs, SQL Optimization and
            Enterprise ERP Systems. Focused on building scalable,
            high-performance applications.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-10">

            <a
              href="/resume.pdf"
              download
              className="bg-indigo-600 hover:bg-indigo-700 transition px-7 py-4 rounded-xl flex items-center gap-3 font-semibold"
            >
              <FaDownload />
              Download Resume
            </a>

            <a
              href="#contact"
              className="glass hover:border-indigo-500 transition px-7 py-4 rounded-xl flex items-center gap-3 font-semibold"
            >
              <FaEnvelope />
              Contact Me
            </a>

          </div>

          {/* Social Links */}
          <div className="flex gap-6 mt-8 text-3xl">

            <a
              href="https://github.com/divyagaikwad09"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/divya-gaikwad-a3b948237/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition"
            >
              <FaLinkedin />
            </a>

          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12">

            <div className="glass p-5 rounded-2xl text-center hover:border-indigo-500 transition">
              <h3 className="text-4xl font-bold text-indigo-400">
                2+
              </h3>
              <p className="text-gray-300 mt-2">
                Years Experience
              </p>
            </div>

            <div className="glass p-5 rounded-2xl text-center hover:border-indigo-500 transition">
              <h3 className="text-4xl font-bold text-indigo-400">
                6+
              </h3>
              <p className="text-gray-300 mt-2">
                Projects
              </p>
            </div>

            <div className="glass p-5 rounded-2xl text-center hover:border-indigo-500 transition">
              <h3 className="text-4xl font-bold text-indigo-400">
                15+
              </h3>
              <p className="text-gray-300 mt-2">
                Technologies
              </p>
            </div>

          </div>

        </motion.div>
      </div>
    </section>
  );
}

export default Hero;