import React, { Fragment } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import VisibilityIcon from "@material-ui/icons/Visibility";
import CodeIcon from "@material-ui/icons/Code";

import beamremotes from "../../images/beamremotes.png";
import parkinglot from "../../images/parkinglot.png";

import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
    width: "100%",
    height: "55vh"
  },
  title: {
    color: "white"
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
  }
}));

const HtmlTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9"
  }
}))(Tooltip);

const tileData = [
  {
    img: beamremotes,
    title: "Beam Remotes",
    author: "Marcio",
    website: "https://upbeat-bhaskara-723a27.netlify.com/",
    github: "",
    hover: "Remote control code finder written in React"
  },
  {
    img: parkinglot,
    title: "ST Parking Lot",
    author: "Marcio",
    website: "https://st-parkinglot.firebaseapp.com/",
    github: "",
    hover:
      "Parking lot web app which manages the employee parking lot. Written in React and Firebase"
  },
  {
    img: beamremotes,
    title: "",
    author: "Marcio",
    website: "https://upbeat-bhaskara-723a27.netlify.com/",
    github: "",
    hover: "Remote control code finder written in React"
  },
  {
    img: beamremotes,
    title: "Beam Remotes",
    author: "Marcio",
    website: "https://upbeat-bhaskara-723a27.netlify.com/",
    github: "",
    hover: "Remote control code finder written in React"
  },
  {
    img: beamremotes,
    title: "Beam Remotes",
    author: "Marcio",
    website: "https://upbeat-bhaskara-723a27.netlify.com/",
    github: "",
    hover: "Remote control code finder written in React"
  },
  {
    img: beamremotes,
    title: "Beam Remotes",
    author: "Marcio",
    website: "https://upbeat-bhaskara-723a27.netlify.com/",
    github: "",
    hover: "Remote control code finder written in React"
  }
];

export default function SingleLineGridList() {
  const classes = useStyles();

  return (
    <div>
      <Typography
        variant="h2"
        gutterBottom
        style={{ textAlign: "center", marginTop: "5%" }}
      >
        Projects
      </Typography>
      <CssBaseline />
      <Container maxWidth="lg">
        <div className={classes.root}>
          <GridList className={classes.gridList} cols={2.5}>
            {tileData.map(tile => (
              <GridListTile key={tile.img} style={{ height: "100%" }}>
                <img src={tile.img} alt={tile.title} />
                <GridListTileBar
                  title={tile.title}
                  classes={{
                    root: classes.titleBar,
                    title: classes.title
                  }}
                  actionIcon={
                    <Fragment>
                      <IconButton aria-label={`star ${tile.title}`}>
                        <a
                          href={tile.website}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <HtmlTooltip
                            title={
                              <React.Fragment>
                                <Typography color="inherit">
                                  {tile.title}
                                </Typography>
                                {tile.hover}
                              </React.Fragment>
                            }
                          >
                            <VisibilityIcon className={classes.title} />
                          </HtmlTooltip>
                        </a>
                      </IconButton>

                      <IconButton aria-label={`star ${tile.title}`}>
                        <a
                          href={tile.website}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <HtmlTooltip
                            title={
                              <React.Fragment>
                                <Typography color="inherit">
                                  {tile.title}
                                </Typography>
                                {tile.hover}
                              </React.Fragment>
                            }
                          >
                            <CodeIcon className={classes.title} />
                          </HtmlTooltip>
                        </a>
                      </IconButton>
                    </Fragment>
                  }
                />
              </GridListTile>
            ))}
          </GridList>
        </div>
      </Container>
    </div>
  );
}
