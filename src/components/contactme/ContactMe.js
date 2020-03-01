import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Zoom from "@material-ui/core/Zoom";

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
    maxWidth: "100%"
  },
  message: {
    maxWidth: "100%"
  }
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <div
      style={{
        backgroundColor: "#00adb5",
        paddingTop: "5%",
        paddingBottom: "5%"
      }}
    >
      <CssBaseline />
      <Container maxWidth="md">
        <Zoom in={true} style={{ transitionDelay: true ? "500ms" : "0ms" }}>
          <Paper
            elevation={3}
            style={{ padding: 50, backgroundColor: "##00adb5" }}
          >
            <Typography variant="h6" gutterBottom className={classes.text}>
              CONTACT ME
            </Typography>
            <Typography variant="body1" gutterBottom className={classes.text}>
              If you have any questions please feel free to message me
            </Typography>

            <form
              className={classes.root}
              noValidate
              autoComplete="off"
              action="POST"
              data-netlify="true"
            >
              <TextField
                id="name"
                name="name"
                label="Your Name"
                variant="outlined"
              />
              <TextField
                id="email"
                name="email"
                label="Your Email"
                variant="outlined"
              />
              <br />
              <TextField
                id="phonenumber"
                name="phonenumber"
                label="Your Phone Number"
                variant="outlined"
              />
              <TextField
                id="subject"
                name="subject"
                label="Subject"
                variant="outlined"
              />
              <br />
              <TextField
                id="message"
                name="message"
                label="Your message"
                multiline
                rows="10"
                variant="outlined"
                fullWidth
                className={classes.message}
              />
              <br />
              <div data-netlify-recaptcha="true"></div>
            </form>
          </Paper>
        </Zoom>
      </Container>
    </div>
  );
}
