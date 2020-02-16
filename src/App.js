import React from "react";
import Navigationbar from "./components/navigationbar/Navigationbar";

import LandingImage from "./components/landingpage/LandingImage";
import Footer from "./components/footer/Footer";
import Projects from "./components/projects/Projects";
import ContactMe from "./components/contactme/ContactMe";
import ExperienceSkills from "./components/experienceskills/ExperienceSkills";

function App() {
  return (
    <div>
      <Navigationbar />
      <LandingImage />
      <ExperienceSkills />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
