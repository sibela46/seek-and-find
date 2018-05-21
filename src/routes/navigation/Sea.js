import React from 'react';
import { Link } from 'react-router-dom';
import topics from '../sea-places/all-sea-places';
import './nav-css/PlacesContainer.css';

export default class Sea extends React.Component {
  constructor(){
    super();
    this.state = {
      value: "",
      start: true,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    if (this.state.start){
      this.setState({
        value: "",
        start: false,
      })
    }
    else {
      this.setState({
        value: event.target.value,
      });
    }
  }
  render () {
    return (
      <div>
        <div className = "places-container">
          {topics.map(({name, id, image, description}) => (
            <ul key = {id}>
              <Link to ={{
                pathname: `/places/sea/${id}`,
                state: {
                  fromSea: {name, image, description},
                }
              }}>
                <h2>{name}</h2>
              <img key = {image} src = {require(`../sea-places/sea-img/${image}`)} width = "300" height = "200" alt = ""/>
              </Link>
            </ul>
          ))}
        </div>
      </div>
    );
  }
};


// <div className = "search-container">
// <input className = "search-box"
// placeholder = "Въведи име"
// value = {this.state.value}
// onChange = {this.handleChange.bind(this)}/>
// </div>
