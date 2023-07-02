import React, { useState, useEffect } from "react";
import About from "./About";
import Intro from "./Introduction";
import Navbar from "./Navbar";
import Project from "./Project";
import Contact from "./Contact";


function App() {
  const [height, setHeight] = useState(45);
  useEffect(() => {
    const handleCustomEvent = () => {
      // Custom logic to determine height based on your requirements
      if (window.innerWidth >= 640) {
        setHeight(70);
        console.log(window.innerWidth);
      }
    };

    // Trigger the custom event when needed
    const triggerCustomEvent = () => {
      const customEvent = new CustomEvent("myCustomEvent");
      window.dispatchEvent(customEvent);
    };

    // Listen for the custom event
    window.addEventListener("myCustomEvent", handleCustomEvent);

    // Call the function to trigger the custom event
    triggerCustomEvent();

    return () => {
      window.removeEventListener("myCustomEvent", handleCustomEvent);
    };
  }, []);
  return (
    <>
      <div>
        <Navbar height={height} />
        <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
          <Intro height={height} />
          <About height = {height} />
          <Project height = {height} />
          <Contact height = {height} />
        </div>
      </div>
    </>
  );
}

export default App;
