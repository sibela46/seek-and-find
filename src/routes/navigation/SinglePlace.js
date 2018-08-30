import React from 'react';
import { Link } from 'react-router-dom';
import './nav-css/PlacesContainer.css';

export default class SinglePlace extends React.Component {
  constructor(){
    super();
    this.state = {
      nameValue: "",
      locationValue: ""
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
  }
  getPlace() {
    switch(this.props.place) {
      case "sea":
        return require('../sea-places/all-sea-places');
      case "mountain":
        return require('../mountain-places/all-mountain-places');
      case "village":
        return require('../village-places/all-village-places');
      case "sight":
        return require('../sight-places/all-sight-places');
      default:
        return ""
    }
  }
  formatValue(value) {
    value = value.toLowerCase();
    return value.replace(value.slice(0,1), value.slice(0,1).toUpperCase());;
  }
  handleNameChange(event) {
    this.setState({
      nameValue: this.formatValue(event.target.value)
    });
  }
  handleLocationChange() {
    var el = document.getElementById('region');
    var chosen = el.options[el.selectedIndex].value;
    this.setState({
      locationValue: chosen
    });
  }
  filterResults(placeName, placeLocation) {
    if (placeName.toLowerCase().search(this.state.nameValue.toLowerCase()) !== -1) {
      return placeName;
    }
    else {
      return placeName === " "; //return all
    }
  }
  render () {
    let topics = this.getPlace();
    let filteredTopics = topics.default.filter(({region}) => {
      return region.search(this.state.locationValue) !== -1;
    });
    return (
      <div className = "places-container">
          <div className = "search-container">
            <div className="search-specific">
                <h2>Име:</h2>
                <input className = "search-box" placeholder = "Въведи име" value = {this.state.nameValue} onChange = {this.handleNameChange.bind(this)}/>
            </div>
            <div className="search-specific">
                <h2>Регион:</h2>
                <select id="region" className="search-box" onChange={this.handleLocationChange}>
                  <option value="">Избери Регион</option>
                  <option value="северен">Северна България</option>
                  <option value="южен">Южна България</option>
                  <option value="централен">Централна България</option>
                  <option value="западен">Западна България</option>
                  <option value="източен">Източна България</option>
                </select>
            </div>
          </div>
        {filteredTopics.filter(({name, region}) => this.filterResults(name, region)).map(({name, id, image, description}) => (
          <ul key = {id}>
          <Link to ={{
            pathname: `/places/${this.props.place}/${id}`,
            state: {
              fromSea: {name, image, description},
            }
          }}>
          <h2 className="single-place-name">{name}</h2>
          <img className = "single-place-image" key = {image} src = {require(`../${this.props.place}-places/${this.props.place}-img/${image}`)} alt = ""/>
          </Link>
          </ul>
        ))}
      </div>
    );
  }
};
