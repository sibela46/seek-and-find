import React from 'react';
import './css/Home.css';
import {Link} from 'react-router-dom';

export default () => (
  <div className="Home">
    <div className = "Intro">
    <h1>Добре дошъл в сайта, в който можеш да намериш всяко едно затънтено кътче на България.</h1>
    <Link to = "/places"><button>Какво чакаш?</button></Link>
    </div>
  </div>
);
