import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Zoom from "@material-ui/core/Zoom";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles(theme => ({
  paper: {
    display: "relative",
    textAlign: "center",
    marginTop: 50,
    marginBottom: 50,
    padding: 50,
    backgroundColor: "##00adb5"
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  modalPaper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

export default function BasicTextFields() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div
      style={{
        backgroundColor: "#00adb5",
        paddingTop: "5%",
        paddingBottom: "5%"
      }}
    >
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div className={classes.modalPaper}>
            <h2 id="transition-modal-title">My Email Below</h2>
            <p id="transition-modal-description">
              mecastillo00 at gmail dot com
            </p>
          </div>
        </Fade>
      </Modal>

      <CssBaseline />
      <Container maxWidth="md">
        <Zoom in={true} style={{ transitionDelay: true ? "500ms" : "0ms" }}>
          <Paper elevation={5} className={classes.paper}>
            <Typography variant="h2" gutterBottom>
              CONTACT ME
            </Typography>

            <Typography variant="body1" gutterBottom>
              If you have any questions please feel free to message me
            </Typography>
            <br />
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={handleOpen}
            >
              HERE
            </Button>
          </Paper>
        </Zoom>
      </Container>
    </div>
  );
}
