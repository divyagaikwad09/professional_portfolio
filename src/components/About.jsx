import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="section py-24">

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <h2 className="text-5xl font-bold text-center mb-12">
          About Me
        </h2>

        <div className="glass p-10 rounded-3xl">

          <p className="text-gray-300 leading-9 text-lg">
            Java Full Stack Developer with professional
            experience as an ERP DevOps Setup Analyst at
            Tata Consultancy Services (TCS).
          </p>

          <p className="text-gray-300 leading-9 text-lg mt-6">
            Experienced in Oracle ERP R12 administration,
            user access management, security controls,
            SQL optimization, technical support,
            testing and cross-functional collaboration.
          </p>

          <p className="text-gray-300 leading-9 text-lg mt-6">
            Skilled in Java, Spring Boot, Hibernate,
            React.js, REST APIs, MySQL and modern web
            development technologies.
          </p>

        </div>

      </motion.div>

    </section>
  );
}

export default About;