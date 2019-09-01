import React,{Component} from "react";
import "./style.css";


class clicky extends Component{
 
  // state={
  //   Icons:this.props
  // }; 
  
  //  shuffleArray = (array) => {
  //   let i = array.length - 1;
  //   for (; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     const temp = array[i];
  //     array[i] = array[j];
  //     array[j] = temp;
  //   }
  //   return array;
  // }
  
 
  render(){
    // const bob = this.shuffleArray(this.props)
 
  return (
    
    <div className="bg-white"id="clicky">
      <div className="container d-flex p-5 my-5">
      {this.props.children}
    </div>
    </div>
    
  );
  }
}

export default clicky;