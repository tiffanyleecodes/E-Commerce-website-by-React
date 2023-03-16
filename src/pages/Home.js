import React from "react";
import { Link } from "react-router-dom";
import "../style/Home.css";
import banner from "../asset/IMG_9540.JPG";

function Home() {
  return (
    <div className="homePage">
      <div className="wrapper">
        <div
          className="rightSide"
          style={{ backgroundImage: `url(${banner})` }}
        ></div>
        <div className="leftSide">
          <h1>AN ELEGANT AESTHETIC</h1>
          <p>
            Discover your dream bag with the first looks to land from new
            collection, available now.
          </p>

          <Link to="/product">
            <button>SEE MORE</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
