import React from 'react';

class SeaContainer extends React.Component{
  render(){
    var name = this.props.location.state.fromSea.name;
    var image = this.props.location.state.fromSea.image;
    var description = this.props.location.state.fromSea.description;
    return (
      <div>
        <h1>{name}</h1>
        <img className="single-place-image" key = {image} src = {require(`../village-places/village-img/${image}`)} width = "500" height = "300" alt = ""/>
        <p>{description}</p>
      </div>
    )
  }
}

export default SeaContainer;
