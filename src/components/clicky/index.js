import React from "react";
import "./style.css";


function clicky(props) {
  return (
    <div className="bg-white"id="clicky">
      <div className="container d-flex p-5 my-5">
      {props.children}
    </div>
    </div>
  );
}

export default clicky;