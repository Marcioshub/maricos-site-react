import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import ComputerIcon from "@material-ui/icons/Computer";
import CodeIcon from "@material-ui/icons/Code";
import SearchIcon from "@material-ui/icons/Search";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import SecurityIcon from "@material-ui/icons/Security";
import MemoryIcon from "@material-ui/icons/Memory";
import Grow from "@material-ui/core/Grow";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles({
  card: {
    width: 275,
    display: "inline-block",
    margin: 5
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <div style={{ marginTop: "5%" }}>
      <CssBaseline />
      <Container maxWidth="md">
        <Grow
          in={true}
          style={{ transformOrigin: "0 0 0" }}
          {...(true ? { timeout: 1000 } : {})}
        >
          <Card className={classes.card}>
            <CardContent>
              <ComputerIcon style={{ fontSize: "3rem" }} />
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Computer Science
              </Typography>
              <Typography variant="h5" component="h2"></Typography>
              <Typography className={classes.pos} color="textSecondary">
                4+ years
              </Typography>
              <Typography variant="body2" component="p">
                Education in Computer Science
                <br />
                Studied tons of mathematics, algorithms, data structures and
                more
              </Typography>
            </CardContent>
          </Card>
        </Grow>

        <Grow
          in={true}
          style={{ transformOrigin: "0 0 0" }}
          {...(true ? { timeout: 1400 } : {})}
        >
          <Card className={classes.card}>
            <CodeIcon style={{ fontSize: "3rem" }} />
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Programming
              </Typography>
              <Typography variant="h5" component="h2"></Typography>
              <Typography className={classes.pos} color="textSecondary">
                10+ years
              </Typography>
              <Typography variant="body2" component="p">
                Was programming at a young age: C++, Java, Python, React, Node,
                HTML5, CSS, Javascript
              </Typography>
            </CardContent>
          </Card>
        </Grow>

        <Grow
          in={true}
          style={{ transformOrigin: "0 0 0" }}
          {...(true ? { timeout: 1800 } : {})}
        >
          <Card className={classes.card}>
            <SearchIcon style={{ fontSize: "3rem" }} />
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Quality Assurance
              </Typography>
              <Typography variant="h5" component="h2"></Typography>
              <Typography className={classes.pos} color="textSecondary">
                4+ years
              </Typography>
              <Typography variant="body2" component="p">
                Experienced in testing electronic products such as phones,
                tablets, computers
              </Typography>
            </CardContent>
          </Card>
        </Grow>

        <Grow
          in={true}
          style={{ transformOrigin: "0 0 0" }}
          {...(true ? { timeout: 2200 } : {})}
        >
          <Card className={classes.card}>
            <SecurityIcon style={{ fontSize: "3rem" }} />
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Cyber Security
              </Typography>
              <Typography variant="h5" component="h2"></Typography>
              <Typography className={classes.pos} color="textSecondary">
                5+ years
              </Typography>
              <Typography variant="body2" component="p">
                Experienced in preventing hackers from compromising your
                websites and personal data
              </Typography>
            </CardContent>
          </Card>
        </Grow>

        <Grow
          in={true}
          style={{ transformOrigin: "0 0 0" }}
          {...(true ? { timeout: 2800 } : {})}
        >
          <Card className={classes.card}>
            <PhoneIphoneIcon style={{ fontSize: "3rem" }} />
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Mobile Apps
              </Typography>
              <Typography variant="h5" component="h2"></Typography>
              <Typography className={classes.pos} color="textSecondary">
                5+ years
              </Typography>
              <Typography variant="body2" component="p">
                Experienced in mobile app development, deployment and
                maintaining them
              </Typography>
            </CardContent>
          </Card>
        </Grow>

        <Grow
          in={true}
          style={{ transformOrigin: "0 0 0" }}
          {...(true ? { timeout: 3200 } : {})}
        >
          <Card className={classes.card}>
            <MemoryIcon style={{ fontSize: "3rem" }} />
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Robotics & IOT
              </Typography>
              <Typography variant="h5" component="h2"></Typography>
              <Typography className={classes.pos} color="textSecondary">
                8+ years
              </Typography>
              <Typography variant="body2" component="p">
                On my free time i play around with Robotics and iot devices such
                as arduinos and raspberry pi.
                <br />
              </Typography>
            </CardContent>
          </Card>
        </Grow>
      </Container>
    </div>
  );
}
