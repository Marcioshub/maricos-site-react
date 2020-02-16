import React from "react";
import Typography from "@material-ui/core/Typography";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-contents">
        <Typography variant="h5" gutterBottom>
          Need to create something?
        </Typography>
        <Typography variant="body2" gutterBottom>
          Just send me a message!
        </Typography>
      </div>
    </div>
  );
}
