import React from "react";
import skills from "../data/skills";
const Skills = () => {
  return (
    <>
      <section
        id="skills"
        className="min-h-screen py-24 flex flex-col x-8 bg-gray-50 dark:bg-gray-900"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center font-bold mb-16">
            My <span className="text-indigo-500">Skills</span>
          </h2>
          {/* Skill Card */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 hover:shadow-xl hover:scale-105 transition duration-300">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div key={index} className="flex flex-col items-center justify-center p-6 rounded-xl bg-white dark:bg-gray-800 shadow hover:-translate-y-2 transition">
                  <Icon className="text-indigo-500 mb-3"/>
                  <p className="font-medium">{skill.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
