import React from 'react';
import church from './img/church.jpg';
import mountain from './img/mountains.jpg';
import sea from './img/sea.jpg';
import village from './img/village.jpg';
import './css/Places.css';
import {Link} from 'react-router-dom';

export default class Places extends React.Component {
  render(){
    return(
      <div id = "Places">
      <div className = "placesContainer">
        <h1>Първо си избери категория:</h1>
        <div className = "categories1">
          <div className = "sightseeings">
            <img src = {church} width = "500" height = "300" alt = "church"/>
            <Link to = "/sightseeings"><h2>Забележителности</h2></Link>
          </div>
          <div className = "mountain">
            <img src = {mountain} width = "500" height = "300" alt = "mountain"/>
            <Link to = "mountains"><h2>Планина</h2></Link>
          </div>
        </div>
        <div className = "categories2">
          <div className = "sea">
            <img src = {sea} width = "500" height = "300" alt = "sea"/>
            <Link to = "sea"><h2>Море</h2></Link>
          </div>
          <div className = "village">
            <img src = {village} width = "500" height = "300" alt = "village"/>
            <Link to = "villages"><h2>Селца</h2></Link>
          </div>
        </div>
      </div>
      </div>
    )
  }
}
