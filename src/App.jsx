import React, { useEffect } from "react";
import Nav from "./Components/navbar/Nav";
import Home from "./Components/home/Home";
import "../src/app.css";
import About from "./Components/about/About";
import Projects from "./Components/projects/Projects";
import Resume from "./Components/resume/Resume";
import Footer from "./Components/footer/Footer";


function App() {
  return (
    <>
    <div >
      <Nav />
      <Home />
      <Projects />
      <Resume/>
      <About />
      <Footer/>
      </div>
    </>
  );
}

export default App;
