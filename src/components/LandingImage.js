import React from "react";
import cs from "../images/cs.jpg";
import Typography from "@material-ui/core/Typography";
import ArrowDropDownCircleIcon from "@material-ui/icons/ArrowDropDownCircle";

export default function LandingImage() {
  return (
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
        <ArrowDropDownCircleIcon
          style={{ fontSize: "4rem" }}
          onClick={() => window.scrollTo(0, 700)}
        />
      </div>
    </div>
  );
}
