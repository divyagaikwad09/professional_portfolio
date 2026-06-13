import React from "react";

import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20">

      <div className="section py-10">

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          <div>

            <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-pink-500 bg-clip-text text-transparent">
              Divya Gaikwad
            </h3>

            <p className="text-gray-400 mt-2">
              Java Full Stack Developer
            </p>

          </div>

          {/* Social Icons */}

          <div className="flex gap-5 text-2xl">

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

            <a
              href="https://youtube.com/@DivyaTechVerse"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition"
            >
              <FaYoutube />
            </a>

          </div>

          {/* Back To Top */}

          <a
            href="#home"
            className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4 rounded-full hover:scale-110 transition"
          >
            <FaArrowUp />
          </a>

        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400">

          © {new Date().getFullYear()} Divya Gaikwad.
          All Rights Reserved.

        </div>

      </div>

    </footer>
  );
}

export default Footer;