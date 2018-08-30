import React from 'react';
import './nav-css/Home.css';
import {Link} from 'react-router-dom';

export default class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <div className = "Intro body-container">
          <h1>Добре дошъл в сайта, в който можеш да намериш всяко едно затънтено кътче на България.</h1>
          <Link to = "/places"><button className="home-btn">Какво чакаш?</button></Link>
        </div>
        <div className = "Intro-cont">
          <h1>Инициатива:</h1>
          <p>Реших да направя този уебсайт, за да разкрия на света няколко <br>
          </br> от многото малки и невероятни местенца, които България крие.</p>
        </div>
      </div>
    );
  }
};
