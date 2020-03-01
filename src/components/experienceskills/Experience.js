import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import WorkIcon from "@material-ui/icons/Work";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: "inline"
  }
}));

export default function FolderList() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={<Typography component="h6">Southern Telecom</Typography>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body1"
                className={classes.inline}
                color="textPrimary"
              >
                Quality Assurance, Research and Development
              </Typography>
              <br />
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                2016 - Present
              </Typography>
              <br />
              {
                " — Managed the development and execution of web applications and mobile applications. Tested all products within the company."
              }
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="East New York Family Academy"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body1"
                className={classes.inline}
                color="textPrimary"
              >
                System Administrator and Computer Technician
              </Typography>
              <br />
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                2012 - 2016
              </Typography>
              <br />
              {
                " — I provided solutions in networking, maintenance, programming, and computer systems as well as maintaining technology equipment inventory for the entire school."
              }
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}
