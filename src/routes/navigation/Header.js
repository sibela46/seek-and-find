import React from 'react';
import brain from './nav-css/nav-img/brain.png';
import './nav-css/App.css';
import { Link } from "react-router-dom";
import NavLink from "./nav_link";

export default class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <Link to = '/seek-and-find'><img className="logo" src = {brain} width = "80" alt = "brain"/></Link>
        <h1 className="App-title">Търси и ще намериш.</h1>
        <div className = "routes">
          <NavLink to = '/about' onClick = {this.toggleClass}><h2>За мен</h2></NavLink>
          <NavLink to = '/places' onClick={this.toggleClass}><h2>Места</h2></NavLink>
          <NavLink to = '/seek-and-find' onClick={this.toggleClass}><h2>Начало</h2></NavLink>
        </div>
      </header>
    );
  }
}
