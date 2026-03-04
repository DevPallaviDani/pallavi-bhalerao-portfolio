import React from 'react';
import About from "./sections/About";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";;
import Experience from "./sections/Experience";
import Navbar from "./layouts/Navbar";



function App() {  

  return (
    <>
    <Navbar/>
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold text-blue-600">
          Hello!! there.... I'm Pallavi Bhalerao
        </h1>
      </div>
      
      <section id="about"><About /></section>
      <section id="experience"><Experience /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>
    </>
  );
}

export default App;
