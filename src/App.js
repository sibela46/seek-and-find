import React, { Component } from 'react';
import brain from './img/brain.png';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img className="logo" src = {brain} width = "80" alt = "brain"/>
          <h1 className="App-title">Търси и ще намериш.</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
