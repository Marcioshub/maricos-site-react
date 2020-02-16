import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import AboutMeCards from "./AboutMeCards";

export default function AboutMe() {
  return (
    <div style={{ textAlign: "center", marginTop: 100, marginBottom: 100 }}>
      <Container maxWidth="sm">
        <Typography variant="h2" gutterBottom>
          About Me
        </Typography>
        <Typography variant="body1" gutterBottom>
          The world of computing is a vast field which allows us so much
          flexibility in choosing a particular field. Computers are growing at
          an un-recordable rate everyday, and they are the most influential
          tools in our lives; they are our present and future. With this
          exponential growth and excitement in the computing industry I can
          choose from many different fields that I enjoy, particularly Software
          Engineering.
        </Typography>
      </Container>
      <AboutMeCards />
    </div>
  );
}
