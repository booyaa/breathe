import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header className="App-header" />
        <p className="App-intro">
          <img src={logo} className="App-logo" alt="logo" /><br />
        </p>
        <footer className="App-footer"><PlayPause/></footer>
      </div>
    );
  }
}

class PlayPause extends Component {
  state = {
    isPlaying: false
  }

  pressed = () => {
    this.setState({
      isPlaying: !this.state.isPlaying
    });
  }

  render() {
    return (      
      <button onClick={this.pressed}>{this.state.isPlaying ? 'Pause' : 'Play'}</button>
    )
  }
}

export default App;
