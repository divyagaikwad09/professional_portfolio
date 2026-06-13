import React from "react";
import {
  FaGraduationCap,
  FaUniversity,
  FaCalendarAlt,
  FaAward,
} from "react-icons/fa";

function Education() {
  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      university: "SASTRA University",
      cgpa: "8.2",
      year: "2023 - 2025",
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      university:
        "K.B. Joshi Institute of Information Technology",
      cgpa: "9.42",
      year: "2020 - 2023",
    },
  ];

  return (
    <section id="education" className="section py-24">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-5xl font-bold text-center mb-4">
          Education
        </h2>

        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
          My academic journey has provided a strong foundation
          in software development, problem-solving, and modern
          technology practices.
        </p>

        {/* Education Cards */}
        <div className="space-y-8">
          {education.map((item) => (
            <div
              key={item.degree}
              className="glass p-8 rounded-3xl border border-white/10 hover:border-indigo-500 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6">

                {/* Icon */}
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-4xl">
                  <FaGraduationCap />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold">
                    {item.degree}
                  </h3>

                  <p className="flex items-center gap-2 text-indigo-400 mt-3">
                    <FaUniversity />
                    {item.university}
                  </p>

                  <div className="flex flex-wrap gap-4 mt-5">

                    <span className="bg-indigo-600 px-4 py-2 rounded-full text-sm flex items-center gap-2">
                      <FaAward />
                      CGPA : {item.cgpa}
                    </span>

                    <span className="glass px-4 py-2 rounded-full text-sm flex items-center gap-2">
                      <FaCalendarAlt />
                      {item.year}
                    </span>

                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;