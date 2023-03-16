import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

import "../style/Footer.css";

function footer() {
  return (
    <div className="footer">
      <div className="icon">
        <FacebookIcon />
        <InstagramIcon />
      </div>
      <p>2023 Chic Daily &copy; ALL RIGHTS RESERVED</p>
    </div>
  );
}

export default footer;
