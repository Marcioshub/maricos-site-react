import React from "react";
import Navigationbar from "./components/Navigationbar";

import LandingImage from "./components/LandingImage";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Process from "./components/Process";
import Experience from "./components/experienceskills/ExperienceSkills";

function App() {
  return (
    <div>
      <Navigationbar />
      <LandingImage />
      <AboutMe />
      <Experience />
      <Projects />
      <Process />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
