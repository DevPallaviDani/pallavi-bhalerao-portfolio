import React from "react";
import About from "./sections/About";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Skills from "./sections/Skills";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import ScrollTop from "./components/ScrollTop";

function App() {
  return (
    <>
      <Navbar />

      <main className="flex-grow pt-24">
        <section id="home" className="scroll-mt-24 section-offset transition duration-700 ease-out">
          <Hero />
        </section>
        <section id="about" className="scroll-mt-24 section-offset transition duration-700 ease-out">
          <About />
        </section>
        <section id="projects" className="scroll-mt-24 section-offset transition duration-700 ease-out">
          <Projects />
        </section>
        <section id="skills" className="scroll-mt-24 section-offset transition duration-700 ease-out">
          <Skills />
        </section>
        <section id="contact" className="scroll-mt-24 section-offset transition duration-700 ease-out">
          <Contact />
        </section>
      </main>
      <ScrollTop />
      <Footer />
    </>
  );
}

export default App;
