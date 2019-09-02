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
 state = {
    Icons,
    Score:0,
    HighScore:0,
    idArray:[],
    game:"Click an image to begin!"
    }

  shuffleArray = Icons => {
    let iconArray=Array.from(Icons)
    let i = iconArray.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = iconArray[i];
      iconArray[i] = iconArray[j];
      iconArray[j] = temp;
    }
    this.setState({Icons:iconArray})
    return this.state.Icons;
  }
  
  _Click=(id)=>{
    let idArray=Array.from(this.state.idArray)
    if(idArray.includes(id)){
      this.setState({game:"You guessed Incorrectly",Score:0,idArray:[]}) 
    }else{
      this.setState({game:"You guessed Correctly"})
      idArray.push(id)
      this.setState({idArray})
      this.setState({Score:this.state.Score +1})
    }
    console.log(this.state.Score)
    console.log(this.state.HighScore)
    if(this.state.Score>this.state.HighScore){
      
      this.setState({HighScore:this.state.Score})
    }
      this.shuffleArray(this.state.Icons)
    //   return(
    //   shuffleIcons.map(Icon=>(
    //     <Tile
    //     key={Icon.id}
    //     image={Icon.image}
    //     id={Icon.id}
    //     click={this._Click}
    //     />
    // )))
      
  }
  render(){
    //const shuffleIcons=this.shuffleArray(this.state.Icons)
  return (
    <>
    <Wrapper>
    <Nav score={this.state.Score} highscore={this.state.HighScore} game={this.state.game}/>
    <Jumbotron />
    <Clicky>
      {this.state.Icons.map(Icon => (
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
