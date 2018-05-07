import React from 'react';
import brain from './img/brain.png';
import './css/App.css';
import { Link } from "react-router-dom";

var start = true;
var lastActive = "";

export default class Header extends React.Component {
  componentDidMount(){
    lastActive = window.location.pathname;
    document.getElementsByClassName(lastActive)[0].id = "active";
  }
  toggleClass(event) {
    var newPath = "/" + event.target.className;
    lastActive = window.location.pathname;
    document.getElementsByClassName(lastActive)[0].id = "";
    document.getElementsByClassName(newPath)[0].id = "active";
  }
  render() {
    return (
      <header className="App-header">
        <Link to = '/seek-and-find'><img className="logo" src = {brain} width = "80" alt = "brain"/></Link>
        <h1 className="App-title">Търси и ще намериш.</h1>
        <div className = "routes">
          <Link to = '/about' className = "/about" onClick = {this.toggleClass}><h2 className = "about">За мен</h2></Link>
          <Link to = '/places' className = "/places" onClick={this.toggleClass}><h2 className = "places">Места</h2></Link>
          <Link to = '/seek-and-find' className = "/seek-and-find" onClick={this.toggleClass}><h2 className = "seek-and-find">Начало</h2></Link>
        </div>
      </header>
    );
  }
}
