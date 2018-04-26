import React from 'react';
import church from './img/church.jpg';
import mountain from './img/mountains.jpg';
import sea from './img/sea.jpg';
import village from './img/village.jpg';
import './css/Places.css';

export default () => (
  <div className = "placesContainer">
    <h1>Първо си избери категория:</h1>
    <div className = "categories1">
      <div className = "sightseeings">
        <img src = {church} width = "500" height = "300" alt = "church"/>
        <h1>Забележителности</h1>
      </div>
      <div className = "mountain">
        <img src = {mountain} width = "500" height = "300" alt = "mountain"/>
        <h1>Планина</h1>
      </div>
    </div>
    <div className = "categories2">
      <div className = "sea">
        <img src = {sea} width = "500" height = "300" alt = "sea"/>
        <h1>Море</h1>
      </div>
      <div className = "village">
        <img src = {village} width = "500" height = "300" alt = "village"/>
        <h1>Селца</h1>
      </div>
    </div>
  </div>
);
