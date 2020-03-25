import React, { Suspense, lazy, Fragment } from "react";
import Navigationbar from "./components/navigationbar/Navigationbar";

import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const LandingImage = React.lazy(() =>
  import("./components/landingpage/LandingImage")
);
const Footer = lazy(() => import("./components/footer/Footer"));
const Projects = lazy(() => import("./components/projects/Projects"));
const ContactMe = lazy(() => import("./components/contactme/ContactMe"));
const ExperienceSkills = lazy(() =>
  import("./components/experienceskills/ExperienceSkills")
);

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "500px"
  }
}));

function App() {
  const classes = useStyles();
  return (
    <Fragment>
      <Navigationbar />

      <Suspense
        fallback={
          <div className={classes.root}>
            <CircularProgress size={100} />
          </div>
        }
      >
        <LandingImage />
        <ExperienceSkills />
        <Projects />
        <ContactMe />
        <Footer />
      </Suspense>
    </Fragment>
  );
}

export default App;
