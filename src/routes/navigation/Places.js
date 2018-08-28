import React from 'react';
import church from './nav-css/nav-img/church.jpg';
import mountain from './nav-css/nav-img/mountains.jpg';
import sea from './nav-css/nav-img/sea.jpg';
import village from './nav-css/nav-img/village.jpg';
import './nav-css/Places.css';
import {Link} from 'react-router-dom';

export default class Places extends React.Component {
  render(){
    return(
      <div id = "Places">
      <div className = "placesContainer">
        <h1>Първо си избери категория:</h1>
        <div className="categories">
          <div className = "categories1">
              <div className = "sightseeings">
              <div className="places-container-text">
              <Link to = "/places/sightseeings"><h2>Забележителности</h2></Link>
              </div>
              <img className="img-category" src = {church} alt = "mountain"/>
              </div>
              <div className = "mountain">
              <div className="places-container-text">
              <Link to = "/places/mountains"><h2>Планина</h2></Link>
              </div>
              <img className="img-category" src = {mountain} alt = "mountain"/>
              </div>
          </div>

          <div className = "categories2">
              <div className = "sea">
              <div className="places-container-text">
              <Link to = "/places/sea"><h2>Море</h2></Link>
              </div>
              <img className="img-category" src = {sea} alt = "sea"/>
              </div>
              <div className = "village">
              <div className="places-container-text">
              <Link to = "/places/villages"><h2>Селца</h2></Link>
              </div>
              <img className="img-category" src = {village} alt = "village"/>
              </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}
