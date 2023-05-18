import { useRef } from "react";
import Navbar from "../components/Navbar";
import Profile from '../components/Profile';
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  const aboutMeRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div>
      <Navbar refs={{ aboutMeRef, projectRef, contactRef }} />
      <div>
        <Profile />
      </div>
      <div ref={aboutMeRef}>
        <About />
      </div>
      <div ref={projectRef}>
        <Projects />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
}
