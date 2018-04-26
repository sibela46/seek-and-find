import React from 'react';
import brain from './img/brain.png';
import './css/App.css';
import { Link } from "react-router-dom";

export default () => (
    <header className="App-header">
      <img className="logo" src = {brain} width = "80" alt = "brain"/>
      <h1 className="App-title">Търси и ще намериш.</h1>
      <div className = "routes">
        <Link to = '/about'><h2>За мен</h2></Link>
        <Link to = '/places'><h2>Места</h2></Link>
        <Link to = "/seek-and-find"><h2>Начало</h2></Link>
      </div>
    </header>
);
