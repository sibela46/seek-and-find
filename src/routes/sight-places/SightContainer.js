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
        <p>{description}</p>
      </div>
    )
  }
}

export default SeaContainer;
