import React from 'react';
import brain from './img/brain.png';
import './css/App.css';
import { Link } from "react-router-dom";

var start = true;

export default class Header extends React.Component {
  componentDidMount(){
    var startPath = window.location.pathname;
    document.getElementsByClassName(startPath)[0].id += "start-active";
  }
  toggleClass(event) {
    if (start){
      document.getElementById("start-active").id = "";
      start = false;
    }
    else{
      document.getElementById("active").id = "";
    }
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
