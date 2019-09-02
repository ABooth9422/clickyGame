import React from "react";
import "./style.css";

function Tile (props) {
 
    return (
    <div className="d-flex justify-content-center">
      <div className="card rounded mx-2 my-2">
        <img id={props.id} onClick={()=>props.click(props.id)}className="imgThumb rounded"src={props.image} alt={props.image} />
      </div>
      </div>
  );
    
}

export default Tile;