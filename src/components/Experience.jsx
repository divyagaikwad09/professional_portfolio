import React from "react";
import { motion } from "framer-motion";
import {
  FaBuilding,
  FaDatabase,
  FaShieldAlt,
  FaUsers,
  FaBug,
  FaHandshake,
  FaHeadset,
} from "react-icons/fa";

function Experience() {
  const responsibilities = [
    {
      icon: <FaDatabase />,
      text: "Oracle ERP R12 Administration",
    },
    {
      icon: <FaShieldAlt />,
      text: "Security Controls & User Access Management",
    },
    {
      icon: <FaDatabase />,
      text: "SQL Query Optimization",
    },
    {
      icon: <FaHeadset />,
      text: "Functional & Technical Support",
    },
    {
      icon: <FaBug />,
      text: "Testing & Validation",
    },
    {
      icon: <FaHandshake />,
      text: "Cross Functional Collaboration",
    },
    {
      icon: <FaUsers />,
      text: "Support for 200+ Users",
    },
    {
      icon: <FaBuilding />,
      text: "Incident Resolution & Troubleshooting",
    },
  ];

  return (
    <section id="experience" className="section py-24">
      <h2 className="text-5xl font-bold text-center mb-16">
        Experience
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="glass p-8 md:p-10 rounded-3xl border border-white/10 hover:border-indigo-500/40 transition-all duration-300"
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h3 className="text-3xl font-bold text-indigo-400">
              Tata Consultancy Services
            </h3>

            <p className="text-xl mt-2 font-medium">
              ERP DevOps Setup Analyst
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <span className="bg-indigo-600/20 text-indigo-300 px-4 py-2 rounded-full text-sm border border-indigo-500/30">
              Oct 2023 – Sep 2025
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {responsibilities.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-indigo-500/30 transition-all"
            >
              <span className="text-indigo-400 text-lg">
                {item.icon}
              </span>

              <span className="text-gray-300">
                {item.text}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Experience;