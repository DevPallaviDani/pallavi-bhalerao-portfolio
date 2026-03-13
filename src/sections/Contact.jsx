import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen py-24 flex flex-col x-8 bg-gray-50 dark:bg-gray-900 section-offset"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl text-center font-bold mb-16">
          Contact <span className="text-indigo-500">Me</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-10">
          Feel free to reach out if you’d like to collaborate or just say hello.
        </p>
        <div className="flex justify-center gap-8 flex-wrap">
          <a
            href="mailto:danipallavi55@gmail.com"
            className="flex items-center gap-3 px-6 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-indigo-50 dark:hover:bg-gray-700 hover:scale-105 transition"
          >
            <FaEnvelope className="text-indigo-500" />
            Email
          </a>
          <a
            href=""
            target="_blank"
            className="flex items-center gap-3 px-6 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-indigo-50 dark:hover:bg-gray-700 hover:scale-105 transition"
          >
            <FaGithub className="text-indigo-500" />
            GitHub
          </a>
          <a
            href=""
            target="_blank"
            className="flex items-center gap-3 px-6 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-indigo-50 dark:hover:bg-gray-700 hover:scale-105 transition"
          >
            <FaLinkedin className="text-indigo-500" />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
