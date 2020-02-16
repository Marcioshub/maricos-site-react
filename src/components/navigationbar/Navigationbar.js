import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1,
    textAlign: "left"
  },
  icons: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3)
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Marcio Castillo
          </Typography>

          <a
            href="https://www.linkedin.com/in/marcio-castillo-70b41545/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white" }}
          >
            <LinkedInIcon className={classes.icons} />
          </a>

          <a
            href="https://github.com/Marcioshub"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white" }}
          >
            <GitHubIcon />
          </a>
        </Toolbar>
      </AppBar>
    </div>
  );
}
