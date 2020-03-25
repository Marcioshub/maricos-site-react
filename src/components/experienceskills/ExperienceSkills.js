import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Experience from "./Experience";
import Skills from "./Skills";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#393e46",
    paddingBottom: 100
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.text.secondary,
    wordWrap: "break-word"
  },
  title: {
    margin: theme.spacing(10, 0, 2),
    color: "white"
  }
}));

export default function ExperienceSkills() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container fixed>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" className={classes.title}>
              MY EXPERIENCE
            </Typography>
            <Experience />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" className={classes.title}>
              DEVELOPMENT SKILLS
            </Typography>
            <Skills />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
