import Navbar from "./components/TopNav";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Volunteering from "./components/Volunteering";
import Contact from "./components/Contact";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Volunteering />
      <Contact />
    </>
  );
}
