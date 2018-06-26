import React from 'react';
import bulgaria from './nav-css/nav-img/bulgaria.png';
import ImageMapper from 'react-image-mapper';
import PropTypes from 'prop-types';

const MAP = {
  name: "my-map",
  areas: [
    { shape: "circle", coords: [133,118,92] },
    { shape: "circle", coords: [378,129,89] },
    { shape: "circle", coords: [617,99,85]  },
    { shape: "circle", coords: [386,265,86] },
    { shape: "circle", coords: [597,286,98] },
    { shape: "circle", coords: [393,400,88] },
    { shape: "circle", coords: [181,383,94] },
    { shape: "circle", coords: [117,272,86] }
  ]
}

export default class Map extends React.Component{
  handleHover(){
    console.log("hi");
  }
  hoverOn(area, index, event){
    console.log("hi");
  }
  render(){
    return (
      <div className = "mapContainer">
      <h1>Сега си избери в коя част от страната</h1>
      <div className = "map">
        <ImageMapper src={bulgaria} map={MAP} width = "800"/>
      </div>
      </div>
    );
  }
}

ImageMapper.defaultProps = {
	active: true,
	fillColor: 'rgba(216, 65, 68, 0.8)'
};

ImageMapper.propTypes = {
	map: PropTypes.shape({
		areas: PropTypes.arrayOf(PropTypes.shape({
			area: PropTypes.shape({
				coords: PropTypes.arrayOf(PropTypes.number),
				href: PropTypes.string,
				shape: PropTypes.string,
			})
		})),
		name: PropTypes.string,
	}),
	onClick: PropTypes.func,
	onImageClick: PropTypes.func,
	onLoad: PropTypes.func,
	onMouseEnter: PropTypes.func,
	onMouseLeave: PropTypes.func
};
