import React,{Component} from "react";
import "./style.css";


class clicky extends Component{
 
 
  render(){
    
 
  return (
    
    <div className="bg-white"id="clicky">
      <div className="container d-flex p-5">
      {this.props.children}
    </div>
    </div>
    
  );
  }
}

export default clicky;