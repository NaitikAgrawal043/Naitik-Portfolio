import { useState, useEffect, useRef } from "react";
import Preloader from "./components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import { HashRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";

function App() {
  const [load, updateLoad] = useState(true);
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  // Preloader logic
  useEffect(() => {
    const timer = setTimeout(() => updateLoad(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  // Custom cursor logic (hardware-accelerated, leak-free)
  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    if (window.matchMedia("(max-width: 768px)").matches) return;

    let mouseX = -100, mouseY = -100;
    let ringX = -100, ringY = -100;
    let animationId;

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.2;
      ringY += (mouseY - ringY) * 0.2;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      animationId = requestAnimationFrame(animateRing);
    };
    animationId = requestAnimationFrame(animateRing);

    const handleMouseOver = (e) => {
      if (e.target.closest("a, button, .nav-link, .project-card-view, .tech-icons, .social-icons")) {
        dot.classList.add("cursor-hover");
        ring.classList.add("cursor-hover");
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.closest("a, button, .nav-link, .project-card-view, .tech-icons, .social-icons")) {
        dot.classList.remove("cursor-hover");
        ring.classList.remove("cursor-hover");
      }
    };

    window.addEventListener("mousemove", moveCursor, { passive: true });
    document.addEventListener("mouseover", handleMouseOver, { passive: true });
    document.addEventListener("mouseout", handleMouseOut, { passive: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <Router>
      {/* Custom cursor */}
      <div className="cursor-dot" ref={dotRef}></div>
      <div className="cursor-ring" ref={ringRef}></div>

      {/* Show preloader only while loading */}
      <Preloader load={load} />

      <div className="App" id={load ? "no-scroll" : "scroll"}>
        {/* Navbar and scroll handling */}
        <Navbar />
        <ScrollToTop />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
