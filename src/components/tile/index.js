import React from "react";
import "./style.css";

function Tile (props) {
 
    return (
    <div id={props.id} className="d-flex justify-content-center">
      <div className="card rounded mx-2 my-2">
        <img onClick={()=>props.click()}className="imgThumb rounded"src={props.image} alt={props.image} />
      </div>
      </div>
  );
    
}

export default Tile;