import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Intro = (props) => {
  <p>Our first functional component</p>
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Series Searcher</h1>
        </header>
      </div>
    );
  }
}

export default App;
