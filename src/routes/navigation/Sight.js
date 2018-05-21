import React from 'react';
import { Link } from 'react-router-dom';
import topics from '../sight-places/all-sight-places';
import './nav-css/PlacesContainer.css';

const images = importAll(require.context('../sight-places/sight-img', false, /\.(png|jpe?g|svg)$/));

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item);});
  return images;
}

export default class SightSeeings extends React.Component {
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
              <div className = "single-place">
                <Link to ={{
                  pathname: `/sight/${id}`,
                  state: {
                    fromSea: {name, image, description},
                  }
                }}>
                  <h2>{name}</h2>
                </Link>
                <img key = {image} src = {images[image]} width = "300" height = "200" alt = ""/>
              </div>
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
