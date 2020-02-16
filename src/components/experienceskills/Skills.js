import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import TagFacesIcon from "@material-ui/icons/TagFaces";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    padding: theme.spacing(0.5)
  },
  chip: {
    margin: theme.spacing(0.5)
  }
}));

export default function Skills() {
  const classes = useStyles();
  const [chipData] = React.useState([
    { key: 0, label: "C++" },
    { key: 1, label: "Java" },
    { key: 2, label: "Python" },
    { key: 3, label: "React" },
    { key: 4, label: "Node" },
    { key: 5, label: "Express" },
    { key: 6, label: "HTML5" },
    { key: 7, label: "CSS" },
    { key: 8, label: "Javascript" },
    { key: 9, label: "SQL" },
    { key: 10, label: "MongoDB" },
    { key: 11, label: "Firebase" },
    { key: 12, label: "Android Studio" },
    { key: 13, label: "Swift" },
    { key: 14, label: "Flutter" },
    { key: 15, label: "R" },
    { key: 16, label: "Git" },
    { key: 17, label: "AWS" },
    { key: 18, label: "Robotics" },
    { key: 19, label: "Machine Learning" },
    { key: 20, label: "AI" },
    { key: 21, label: "Arduino" },
    { key: 22, label: "Raspberry pi" }
  ]);

  return (
    <Paper className={classes.root}>
      {chipData.map(data => {
        let icon;

        if (data.label === "React") {
          icon = <TagFacesIcon />;
        }

        return (
          <Chip
            key={data.key}
            icon={icon}
            label={data.label}
            className={classes.chip}
          />
        );
      })}
    </Paper>
  );
}
