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
    Icons
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

  render(){
    const shuffleIcons=this.shuffleArray(this.state.Icons)
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
      // shuffle={this.shuffleArray(this.state.Icons)}
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
