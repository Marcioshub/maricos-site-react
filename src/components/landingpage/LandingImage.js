import React, { Fragment } from "react";
import cs from "../../images/cs.jpg";
import Typography from "@material-ui/core/Typography";
import ArrowDropDownCircleIcon from "@material-ui/icons/ArrowDropDownCircle";
import AboutMe from "../aboutme/AboutMe";

export default function LandingImage(props) {
  // window.scrollTo(0, 1000)
  return (
    <Fragment>
      <div className="landing-img-container">
        <img src={cs} width="100%" className="landing-img" alt="landing img" />

        <div className="landing-img-center">
          <Typography variant="h2" style={{ fontSize: "4rem" }}>
            I am Marcio Castillo
          </Typography>
          <Typography
            variant="overline"
            display="block"
            style={{ fontSize: "1rem" }}
            gutterBottom
          >
            Full Stack Developer
          </Typography>
          <br />
          <br />
          <br />
          <br />
          <a href="#aboutme">
            <ArrowDropDownCircleIcon
              style={{ fontSize: "4rem", color: "white" }}
            />
          </a>
        </div>
      </div>
      <div id="aboutme"></div>
      <AboutMe />
    </Fragment>
  );
}
