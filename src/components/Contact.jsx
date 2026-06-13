import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaYoutube,
} from "react-icons/fa";

function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        "service_rvk2v1c",
        "template_v1qbwkt",
        form.current,
        "j2N2IItxjKRQeNOy2"
      )
      .then(
        () => {
          alert("Message Sent Successfully!");
          form.current.reset();
          setLoading(false);
        },
        (error) => {
          console.log(error);
          alert("Failed to send message");
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="section py-24">

      <h2 className="text-5xl font-bold text-center mb-4">
        Contact Me
      </h2>

      <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
        Open to Full Stack Java Developer opportunities,
        collaborations, freelance projects, and technical discussions.
      </p>

      <div className="grid lg:grid-cols-2 gap-10">

        {/* LEFT */}
        <div className="glass p-10 rounded-3xl">

          <h3 className="text-3xl font-bold mb-6">
            Let's Connect 🚀
          </h3>

          <p className="text-gray-400 leading-relaxed mb-8">
            I'm passionate about Java Full Stack Development,
            Spring Boot, React.js and building scalable web applications.
            Feel free to reach out for opportunities or collaborations.
          </p>

          <div className="space-y-5">

            <div className="flex items-center gap-4">
              <div className="bg-indigo-600 p-3 rounded-xl">
                <FaEnvelope />
              </div>

              <div>
                <p className="text-gray-400 text-sm">
                  Email
                </p>

                <p>
                  divyagaikwad425@gmail.com
                </p>
              </div>
            </div>

          </div>

          {/* Socials */}

          <div className="flex gap-5 mt-10">

            <a
              href="https://github.com/divyagaikwad09"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-indigo-600 transition p-4 rounded-xl text-xl"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/divya-gaikwad-a3b948237/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-indigo-600 transition p-4 rounded-xl text-xl"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://youtube.com/@DivyaTechVerse"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-red-600 transition p-4 rounded-xl text-xl"
            >
              <FaYoutube />
            </a>

          </div>
        </div>

        {/* FORM */}

        <form
          ref={form}
          onSubmit={sendEmail}
          className="glass p-10 rounded-3xl"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-4 bg-black/30 rounded-xl mb-5 outline-none border border-white/10 focus:border-indigo-500"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-4 bg-black/30 rounded-xl mb-5 outline-none border border-white/10 focus:border-indigo-500"
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Write your message..."
            required
            className="w-full p-4 bg-black/30 rounded-xl mb-5 outline-none border border-white/10 focus:border-indigo-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:scale-105 transition px-8 py-4 rounded-xl font-semibold"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

      </div>
    </section>
  );
}

export default Contact;