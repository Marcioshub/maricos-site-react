import React from "react";
import Navigationbar from "./components/Navigationbar";

import LandingImage from "./components/LandingImage";
import AboutMe from "./components/aboutme/AboutMe";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Process from "./components/Process";
import ExperienceSkills from "./components/experienceskills/ExperienceSkills";

function App() {
  return (
    <div>
      <Navigationbar />
      <LandingImage />
      <AboutMe />
      <ExperienceSkills />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
