import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: 200
    }
  }
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <div className="contact-me">
      <div className="contact-me-contents">
        <Paper elevation={3} style={{ padding: 50 }}>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
            <br />
            <TextField
              id="outlined-multiline-static"
              label="Multiline"
              multiline
              rows="4"
              defaultValue="Default Value"
              variant="outlined"
            />
          </form>
        </Paper>
      </div>
    </div>
  );
}
