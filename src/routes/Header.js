import React from 'react';
import brain from './img/brain.png';
import './css/App.css';
import { Link } from "react-router-dom";

var current = document.getElementsByClassName("active");
var startPath = "";

export default class Header extends React.Component {
  componentDidMount(){
    var startPath = window.location.pathname;
    console.log(document.getElementsByClassName(startPath)[0].className);
    document.getElementsByClassName(startPath)[0].id += "active";
  }
  toggleClass(event) {
    var current = document.getElementsById("active");
    current.id.replace("active", "");
    event.target.id += "active";
  }
  render() {
    return (
      <header className="App-header">
        <Link to = '/seek-and-find'><img className="logo" src = {brain} width = "80" alt = "brain"/></Link>
        <h1 className="App-title">Търси и ще намериш.</h1>
        <div className = "routes">
          <Link to = '/about' className = "/about" onClick = {this.toggleClass}><h2>За мен</h2></Link>
          <Link to = '/places' className = "/places" onClick={this.toggleClass}><h2>Места</h2></Link>
          <Link to = '/seek-and-find' className = "/seek-and-find" onClick={this.toggleClass}><h2>Начало</h2></Link>
        </div>
      </header>
    );
  }
}
