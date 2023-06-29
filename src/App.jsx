import React, {useState, useEffect} from "react";
import About from "./About";
// import Intro from "./Introduction";
import Navbar from "./Navbar";
import Project from "./Project";
import Contact from "./Contact";


function App() {
  const [height,setHeight] = useState(45);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setHeight(220);
        console.log(window.innerWidth);
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
    <div>
       <Navbar height = {height} /> 
      <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth"> 
        {/* <Intro height = {height} /> */}
        <About height = {height} />
        <Project height = {height} />
        <Contact height = {height} />
      </div>
     </div>
    </>
  );
}

export default App;
