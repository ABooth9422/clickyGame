import React, { Component } from "react";
import Nav from './components/nav'
import Footer from "./components/footer"
import Wrapper from "./components/Wrapper"
import Jumbotron from "./components/jumbotron"
import Clicky from "./components/clicky"
import Icons from "./icons.json"
import Tile from "./components/tile"
import './App.css';




class App extends Component {
     
  state={
    Icons,
    Score:0
  };
  
  shuffleArray = Icons => {
    let i = Icons.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = Icons[i];
      Icons[i] = Icons[j];
      Icons[j] = temp;
    }
    return Icons;
  }
  
  _Click=()=>{
    console.log("click")
   
    this.setState({Score:this.state.Score +1})
    const shuffleIcons=this.shuffleArray(this.state.Icons)
    return(
      shuffleIcons.map(Icon=>(
        <Tile
        key={Icon.id}
        image={Icon.image}
        id={Icon.id}
        click={this._Click}
        />
    )))
  }

  render(){
    const shuffleIcons=this.shuffleArray(this.state.Icons)
  return (
    <>
    <Wrapper>
    <Nav score={this.state.Score}/>
    <Jumbotron />
    <Clicky>
      {shuffleIcons.map(Icon => (
      <Tile 
      key={Icon.id}
      image={Icon.image}
      id={Icon.id}
      click={this._Click}
      />
      ))}
    </Clicky>
    </Wrapper>
    <Footer/>
    </>
  );
  }
}

export default App;
