import React from "react";
import {
  FaJava,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaTools,
  FaServer,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiMysql,
  SiJavascript,
  SiPostman,
  SiHibernate,
} from "react-icons/si";

function Skills() {
  const skillCategories = [
    {
      title: "Backend Development",
      icon: <FaServer />,
      skills: [
        { name: "Java", icon: <FaJava /> },
        { name: "Spring Boot", icon: <SiSpringboot /> },
        { name: "Hibernate", icon: <SiHibernate /> },
        { name: "REST APIs", icon: <FaServer /> },
        { name: "J2EE", icon: <FaServer /> },
      ],
    },

    {
      title: "Frontend Development",
      icon: <FaReact />,
      skills: [
        { name: "React.js", icon: <FaReact /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
      ],
    },

    {
      title: "Database",
      icon: <FaDatabase />,
      skills: [
        { name: "MySQL", icon: <SiMysql /> },
        { name: "SQL", icon: <FaDatabase /> },
      ],
    },

    {
      title: "Tools & Platforms",
      icon: <FaTools />,
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "Postman", icon: <SiPostman /> },
        { name: "VS Code", icon: <FaTools /> },
        { name: "Eclipse", icon: <FaTools /> },
        { name: "STS", icon: <FaTools /> },
      ],
    },
  ];

  return (
    <section id="skills" className="section py-24">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-4">
          Technical Skills
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto">
          Expertise across Java Full Stack Development,
          Enterprise Applications, Database Management,
          and Modern Frontend Technologies.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="glass p-8 rounded-3xl border border-white/10 hover:border-indigo-500/40 hover:-translate-y-2 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="text-2xl text-indigo-400">
                {category.icon}
              </div>

              <h3 className="text-2xl font-bold">
                {category.title}
              </h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-indigo-500/40 hover:bg-indigo-500/10 transition-all"
                >
                  <span className="text-indigo-400">
                    {skill.icon}
                  </span>

                  <span className="text-sm font-medium">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* <div className="grid grid-cols-3 md:grid-cols-3 gap-6 mt-16">
        <div className="glass p-6 rounded-2xl text-center">
          <h3 className="text-4xl font-bold text-indigo-400">
            10+
          </h3>
          <p className="text-gray-400 mt-2">
            Technologies
          </p>
        </div>

        <div className="glass p-6 rounded-2xl text-center">
          <h3 className="text-4xl font-bold text-indigo-400">
            2+
          </h3>
          <p className="text-gray-400 mt-2">
            Years Experience
          </p>
        </div>

        <div className="glass p-6 rounded-2xl text-center">
          <h3 className="text-4xl font-bold text-indigo-400">
            5+
          </h3>
          <p className="text-gray-400 mt-2">
            Projects Built
          </p>
        </div>
      </div> */}
    </section>
  );
}

export default Skills;