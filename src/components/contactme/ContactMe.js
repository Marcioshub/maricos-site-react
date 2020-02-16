import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    },
    textAlign: "center"
  },
  text: {
    textAlign: "center"
  },
  formInputs: {
    maxWidth: 400
  },
  message: {
    maxWidth: 400
  }
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <div style={{ backgroundColor: "#00adb5" }}>
      <Paper elevation={3} style={{ padding: 50, backgroundColor: "##00adb5" }}>
        <Typography variant="h6" gutterBottom className={classes.text}>
          CONTACT ME
        </Typography>
        <Typography variant="body1" gutterBottom className={classes.text}>
          If you have any questions please feel free to message me
        </Typography>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField id="name" label="Your Name" variant="outlined" />
          <TextField id="email" label="Your Email" variant="outlined" />
          <br />
          <TextField
            id="phonenumber"
            label="Your Phone Number"
            variant="outlined"
          />
          <TextField id="subject" label="Subject" variant="outlined" />
          <br />
          <TextField
            id="message"
            label="Your message"
            multiline
            rows="10"
            variant="outlined"
            fullWidth
            className={classes.message}
          />
        </form>
      </Paper>
    </div>
  );
}
