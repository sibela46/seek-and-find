import React from 'react';
import brain from './img/brain.png';
import './css/App.css';
import { Link } from "react-router-dom";

export default () => (
    <header className="App-header">
      <img className="logo" src = {brain} width = "80" alt = "brain"/>
      <h1 className="App-title">Търси и ще намериш.</h1>
      <div className = "routes">
        <Link to = '/about'><h2>About</h2></Link>
        <Link to = "/home"><h2>Home</h2></Link>
      </div>
    </header>
);
