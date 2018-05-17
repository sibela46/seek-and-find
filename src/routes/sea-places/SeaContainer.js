import React from 'react';

class SeaContainer extends React.Component{
  render(){
    return <div> Good Evening {this.props.match.params.seaId} </div>
  }
}

export default SeaContainer;
