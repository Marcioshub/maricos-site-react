import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import ComputerIcon from "@material-ui/icons/Computer";
import CodeIcon from "@material-ui/icons/Code";
import SearchIcon from "@material-ui/icons/Search";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import SecurityIcon from "@material-ui/icons/Security";
import MemoryIcon from "@material-ui/icons/Memory";

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
    <div>
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
            Studied tons of mathematics, algorithms, data structures and more
          </Typography>
        </CardContent>
      </Card>
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
            Was programming ever since i was young: C++, Java, Python, React,
            Node, HTML5, CSS, Javascript
          </Typography>
        </CardContent>
      </Card>
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
            Experienced in testing electronic products such as phones, tablets,
            computers
          </Typography>
        </CardContent>
      </Card>

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
            Experienced in preventing hackers from compromising your websites
            and personal data
          </Typography>
        </CardContent>
      </Card>

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
            Experienced in mobile app development and deployment and maintaining
            to the app stores
          </Typography>
        </CardContent>
      </Card>

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
            5+ years
          </Typography>
          <Typography variant="body2" component="p">
            On my free time i play around with Robotics and iot devices such as
            arduinos and raspberry pi.
            <br />
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
