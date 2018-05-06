import React from 'react';
import './css/Home.css';
import {Link} from 'react-router-dom';
import Header from './Header';

export default class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <div className = "Intro">
          <h1>Добре дошъл в сайта, в който можеш да намериш всяко едно затънтено кътче на България.</h1>
          <Link to = "/places"><button>Какво чакаш?</button></Link>
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
