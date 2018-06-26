import React from 'react';
import './nav-css/Homework.css';

var current = 0;

export default class About extends React.Component {
  changeSlide(index) {
    var slides = document.getElementsByClassName('slide');
    for (var i=0; i < slides.length; i++){
      slides[i].style.display = "none";
    }
    current += index;
    if (current < 0){
      current = slides.length-1;
    }
    if (current == slides.length){
      current = 0;
    }
    slides[current].style.display = "inline-block";
  }
  render () {
    return (
    <div>
    <div className ="container">
      <p>Centered!</p>
    </div>
    <div id = "slides">
      <div className = "slide" style = {{display: 'inline-block', background: '#21A0A0', width: '200px', height: '200px'}}>
        <h2>Hello</h2>
      </div>
      <div className = "slide" style = {{background: '#EDF67D', width: '300px', height: '100px'}}>
        <h2>there,</h2>
      </div>
      <div className = "slide" style = {{background: '#F896D8', width: '200px', height: '200px'}}>
        <h2>friend!</h2>
      </div>
      <div className = "slide" style = {{background: '#CA7DF9', width: '100px', height: '100px'}}>
        <h2>How</h2>
      </div>
      <div className = "slide" style = {{background: '#724CF9', width: '300px', height: '200px'}}>
        <h2>are you</h2>
      </div>
      <div className = "slide" style = {{background: '#564592', width: '100px', height: '200px'}}>
        <h2>today?</h2>
      </div>
    </div>
    <div className = "buttons">
      <button className = "prev" onClick = {() => this.changeSlide(-1)}>Prev</button>
      <button className = "next" onClick = {() => this.changeSlide(+1)}>Next</button>
    </div>
    </div>
   );
 }
};
