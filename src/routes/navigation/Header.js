import React from 'react';
import brain from './nav-css/nav-img/brain.png';
import './nav-css/App.css';
import { Link } from "react-router-dom";
import NavLink from "./nav_link";

export default class Header extends React.Component {
  constructor(){
    super();
    this.toggleLanguage = this.toggleLanguage.bind(this);
    this.state = {
      language: "bg"
    }
  }
  toggleLanguage(event) {
    this.setState({
      language: event.target.className
    });
    event.target.className = event.target.className + "active";
  }
  render() {
    return (
      <header className="App-header">
          <Link to = '/seek-and-find' className="icon">
            <img className="logo" src = {brain} alt = "brain"/>
            <h1 className="App-title">{this.state.language === "bg"? "Търси и ще намериш." : "Seek and you will find."}</h1>
          </Link>
        <div className="languages">
          <h2 className="en" onClick={this.toggleLanguage.bind(this)}>EN</h2>
          <h2 className="bg" onClick={this.toggleLanguage.bind(this)}>BG</h2>
        </div>
        <div className = "routes">
          <NavLink to = '/seek-and-find' onClick={this.toggleClass}>{this.state.language === "bg"? <h2>Начало</h2> : <h2>Home</h2>}</NavLink>
          <NavLink to = '/places' onClick={this.toggleClass}>{this.state.language === "bg"? <h2>Места</h2> : <h2>Places</h2>}</NavLink>
          <NavLink to = '/about' onClick = {this.toggleClass}>{this.state.language === "bg"? <h2>За мен</h2> : <h2>About</h2>}</NavLink>
        </div>
      </header>
    );
  }
}
