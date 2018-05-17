import React from 'react';
import { Link } from 'react-router-dom';
import topics from '../sea-places/all-sea-places';

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
        <div className = "search-container">
          <input className = "search-box"
           placeholder = "Въведи име"
           value = {this.state.value}
           onChange = {this.handleChange.bind(this)}/>
        </div>
        <ul>
          {topics.map(({name, id}) => (
            <li key = {id}>
              <Link to ={`/sea/${id}`}>{name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
};
