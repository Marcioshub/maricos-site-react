import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Zoom from "@material-ui/core/Zoom";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

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
  },
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

export default function BasicTextFields() {
  const classes = useStyles();

  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phonenumber, setPhonenumber] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    // clear
    setName("");
    setEmail("");
    setPhonenumber("");
    setSubject("");
    setMessage("");
  };

  function sendToServer(e) {
    e.preventDefault();
    handleOpen();
  }

  return (
    <div
      style={{
        backgroundColor: "#00adb5",
        paddingTop: "5%",
        paddingBottom: "5%"
      }}
    >
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">Your message has been sent!</h2>
          <p id="simple-modal-description">
            Thank you for writing to me, i will get back to you as soon as I
            can.
          </p>
          {name}
          {email}
          {phonenumber}
          {subject}
          {message}
        </div>
      </Modal>
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
              onSubmit={sendToServer}
            >
              <TextField
                id="name"
                name="name"
                label="Your Name"
                variant="outlined"
                value={name}
                onChange={e => setName(e.target.value)}
              />
              <TextField
                id="email"
                name="email"
                label="Your Email"
                variant="outlined"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <br />
              <TextField
                id="phonenumber"
                name="phonenumber"
                label="Your Phone Number"
                variant="outlined"
                value={phonenumber}
                onChange={e => setPhonenumber(e.target.value)}
              />
              <TextField
                id="subject"
                name="subject"
                label="Subject"
                variant="outlined"
                value={subject}
                onChange={e => setSubject(e.target.value)}
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
                value={message}
                onChange={e => setMessage(e.target.value)}
              />
              <br />
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
            </form>
          </Paper>
        </Zoom>
      </Container>
    </div>
  );
}
