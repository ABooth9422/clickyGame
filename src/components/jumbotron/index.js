
import React from "react";
import "./style.css";

function Jumbotron(props) {
  return (
    <div id="mainDisplay"className="jumbotron text-center mb-0">
    <h1 className="display-4 font-weight-bold mb-2">Clicky Game!</h1>
    <h3 className="lead font-weight-bold">World of Warcraft Clicky Game!</h3>
    <h3>Click on an image to earn points, but don't click on any more than once!
    </h3>
    </div>
  );
}

export default Jumbotron;