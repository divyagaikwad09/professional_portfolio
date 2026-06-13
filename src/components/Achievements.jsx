import React from "react";
import {
  FaTrophy,
  FaYoutube,
  FaLaptopCode,
  FaRocket,
} from "react-icons/fa";

function Achievements() {
  const achievements = [
    {
      icon: <FaTrophy />,
      title: "Full Stack Java Development",
      desc: "Completed professional Full Stack Java Development training with hands-on experience in Java, Spring Boot, React.js, MySQL, REST APIs, and modern software development practices.",
    },

    {
      icon: <FaYoutube />,
      title: "Divya TechVerse",
      desc: "Built and managed a YouTube channel focused on technology, programming concepts, software development learning, and knowledge sharing.",
    },

    {
      icon: <FaLaptopCode />,
      title: "Software Development Projects",
      desc: "Designed and developed multiple real-world applications including Employee Management System, E-Commerce Platform, Portfolio Website, and Java-based projects.",
    },

    {
      icon: <FaRocket />,
      title: "Continuous Learning",
      desc: "Actively exploring modern technologies, frameworks, cloud concepts, DevOps practices, and advanced Full Stack Development techniques.",
    },
  ];

  return (
    <section id="achievements" className="section py-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-5xl font-bold text-center mb-4">
          Achievements
        </h2>

        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
          Highlights of my learning journey, technical growth,
          content creation, and software development experience.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((item) => (
            <div
              key={item.title}
              className="glass p-8 rounded-3xl border border-white/10 hover:border-indigo-500 hover:-translate-y-2 transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;