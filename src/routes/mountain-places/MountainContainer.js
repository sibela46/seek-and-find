import React from 'react';

class SeaContainer extends React.Component{
  componentDidMount(){
    console.log(this.props.location.state.fromSea);
  }
  render(){
    var name = this.props.location.state.fromSea.name;
    var image = this.props.location.state.fromSea.image;
    var description = this.props.location.state.fromSea.description;
    return (
      <div>
        <h1>{name}</h1>
        <img key = {image} src = {require(`../mountain-places/mountain-img/${image}`)} width = "500" height = "300" alt = ""/>
        <p>{description}</p>
      </div>
    )
  }
}

export default SeaContainer;
