import React, { Component } from "react";
import Nav from './components/nav'
import Footer from "./components/footer"
import Wrapper from "./components/Wrapper"
import Jumbotron from "./components/jumbotron"
import Clicky from "./components/clicky"
import Icons from "./icons.json"
import Tile from "./components/tile"
import './App.css';



function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

class App extends Component {
  
  state={
    Icons
  };
  shuffleArray =array => {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  render(){
    const shuffleIcons=shuffleArray(this.state.Icons)
  return (
    <>
    <Wrapper>
    <Nav />
    <Jumbotron />
    <Clicky>
      {shuffleIcons.map(Icon => (
      <Tile 
      key={Icon.id}
      image={Icon.image}
      id={Icon.id}
      shuffle={this.shuffleArray}
      />
      ))}
    </Clicky>
    </Wrapper>
    <Footer />
    </>
  );
  }
}

export default App;
