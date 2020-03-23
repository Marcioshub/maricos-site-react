import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

// images
import beamremotes from "../../images/beamremotes.png";
import parkinglot from "../../images/st-parkinglot.png";
import chatapp from "../../images/chat-app.png";
import expensetracker from "../../images/expense-tracker.png";
import cryptoPriceChecker from "../../images/cryptoPriceChecker.png";
import blockchain from "../../images/blockchain.png";

import ListSubheader from "@material-ui/core/ListSubheader";
import InfoIcon from "@material-ui/icons/Info";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 600,
    height: 450
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  }
}));

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
    img: chatapp,
    title: "Chat App",
    author: "Marcio",
    website: "https://stoic-thompson-a06fc2.netlify.com/",
    github: "https://github.com/Marcioshub/sockets-chat-app-client",
    hover: "Chat app written in React, Nodejs, Express and Sockets"
  },
  {
    img: expensetracker,
    title: "Expense Tracker",
    author: "Marcio",
    website: "https://musing-hawking-98dc33.netlify.com/",
    github: "https://github.com/Marcioshub/Expense-Tracker",
    hover: "Keep track of your monthly expenses with React"
  },
  {
    img: cryptoPriceChecker,
    title: "Crypto Price Checker",
    author: "Marcio",
    website: "https://reverent-fermi-266cc5.netlify.com/",
    github: "https://github.com/Marcioshub/crypto-price-checker",
    hover: "Bitcoin, Eth, BitCash and LiteCoin ticker written in React"
  },
  {
    img: blockchain,
    title: "Blockchain",
    author: "Marcio",
    website: null,
    github: "https://github.com/Marcioshub/simple-crypto",
    hover:
      "Simple crypto currency implementation built using Nodejs and websockets"
  }
];

export default function Projects() {
  const classes = useStyles();

  return (
    <Fragment>
      <Typography style={{ textAlign: "center" }} variant="h2" gutterBottom>
        Projects
      </Typography>
      <div className={classes.root}>
        <GridList cellHeight={200} className={classes.gridList}>
          <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
            <ListSubheader component="div">Scroll down</ListSubheader>
          </GridListTile>
          {tileData.map(tile => (
            <GridListTile key={tile.img}>
              <img src={tile.img} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                subtitle={<span>by: {tile.author}</span>}
                actionIcon={
                  <IconButton
                    aria-label={`info about ${tile.title}`}
                    className={classes.icon}
                  >
                    <InfoIcon />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </Fragment>
  );
}

/*
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
    img: chatapp,
    title: "Chat App",
    author: "Marcio",
    website: "https://stoic-thompson-a06fc2.netlify.com/",
    github: "https://github.com/Marcioshub/sockets-chat-app-client",
    hover: "Chat app written in React, Nodejs, Express and Sockets"
  },
  {
    img: expensetracker,
    title: "Expense Tracker",
    author: "Marcio",
    website: "https://musing-hawking-98dc33.netlify.com/",
    github: "https://github.com/Marcioshub/Expense-Tracker",
    hover: "Keep track of your monthly expenses with React"
  },
  {
    img: cryptoPriceChecker,
    title: "Crypto Price Checker",
    author: "Marcio",
    website: "https://reverent-fermi-266cc5.netlify.com/",
    github: "https://github.com/Marcioshub/crypto-price-checker",
    hover: "Bitcoin, Eth, BitCash and LiteCoin ticker written in React"
  },
  {
    img: blockchain,
    title: "Blockchain",
    author: "Marcio",
    website: null,
    github: "https://github.com/Marcioshub/simple-crypto",
    hover:
      "Simple crypto currency implementation built using Nodejs and websockets"
  }
];

export default function SingleLineGridList() {
  const classes = useStyles();

  return (
    <div style={{ paddingBottom: "5%" }}>
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
                          href={tile.github}
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
          <CssBaseline />
        </div>
      </Container>
    </div>
  );
}
*/
