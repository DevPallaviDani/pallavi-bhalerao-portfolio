import React from "react";
import projects from "../data/projects";
import ProjectCard from "../layouts/ProjectCard";
function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen py-24 flex flex-col x-8 bg-gray-50 dark:bg-gray-900"
    >
      <div>
       <h2 className="text-3xl md:text-4xl text-center font-bold mb-16">
            My <span className="text-indigo-500">Projects</span>
          </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden shadow-sm 
                  hover:shadow-xl hover:-translate-y-2 transition duration-300"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
