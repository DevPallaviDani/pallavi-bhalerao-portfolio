import React from "react";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-between px-8 gap-10 py-24"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          About <span className="text-indigo-500">Me</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          I am a frontend developer who enjoys building responsive and
          user-friendly web applications. I work mainly with React, JavaScript
          and modern UI tools to create clean and efficient interfaces.
        </p>
        <p className="text-gray-600 dark:text-gray-300 mt-4">
          I focus on writing maintainable code and creating smooth user
          experiences across devices.
        </p>
           {/* Skills */}
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <span className="skill">React</span>
        <span className="skill">Javascript</span>
        <span className="skill">HTML</span>
        <span className="skill">CSS</span>
        <span className="skill">TailWind</span>
      </div>
        {/* Scroll down indicator */}
      {/* <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <a
          href="#projects"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer"
        >
          <div className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center animate-bounce">
            ↓
          </div>
        </a>
      </div> */}
       </div>
      
    </section>
  );
}

export default About;
