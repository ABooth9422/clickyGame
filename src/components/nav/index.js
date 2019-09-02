import React from "react";
import "./style.css";

function Nav(props) {
  return (
    <nav className="navbar navbar-light text-white p-5 font-weight-bold bg-dark">
    <div className="container-fluid">
    <span className="ml-5 mb-0 h1">Clicky Game</span>
    <span className="text-center mb-0 h3">{props.game}</span>
    <div className="d-flex align-items-right">
    <span className="mx-2 mb-0 h3">Score:  {props.score}</span>
    <span className="mx-5 mb-0 h3">|</span>
    <span className="mx-2 mb-0 h3">Top Score:  {props.highscore}</span>
    </div>
    </div>
    </nav>
  );
}

export default Nav;
