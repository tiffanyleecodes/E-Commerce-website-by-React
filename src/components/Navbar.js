import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <div className="navbar">
      <div className="logo" id={openMenu ? "open" : "close"}>
        <a href="/">
          <h1 className="shopname">Chic_Daily</h1>
        </a>

        <div className="hiddenMenu">
          <ul>
            <li>
              {" "}
              <Link to="/">Home</Link>
            </li>
            <li>
              {" "}
              <Link to="/product">Product</Link>
            </li>
            <li>
              {" "}
              <Link to="/about">About Us</Link>
            </li>
            <li>
              {" "}
              <Link to="/contact">Contact us</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="menu">
        <ul>
          <li>
            {" "}
            <Link to="/">Home</Link>
          </li>
          <li>
            {" "}
            <Link to="/product">Product</Link>
          </li>
          <li>
            {" "}
            <Link to="/about">About Us</Link>
          </li>
          <li>
            {" "}
            <Link to="/contact">Contact us</Link>
          </li>
        </ul>
      </div>
      <button className="Hamburger" onClick={toggleMenu}>
        <MenuIcon />
      </button>
    </div>
  );
}

export default Navbar;
