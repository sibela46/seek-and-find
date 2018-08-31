import React from 'react';
import './nav-css/About.css';
import swal from 'sweetalert';

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
    if (current === slides.length){
      current = 0;
      swal({
        title: "Е, браво на теб...",
        text: "Развали ми целия уебсайт. Трудът ми отиде на вятъра.",
        icon: "error",
        dangerMode: true,
        button: "Шегувам се, кликни тук и всичко ще си дойде постарому."
      });
    }
    slides[current].style.display = "inline-block";
  }
  render () {
    return (
    <div className="body-container">
      <div className ="container">
        <h2>Натискай бутончетата за повече информация</h2>
      </div>
      <div id = "slides">
        <div className = "slide" style = {{display: 'inline-block', background: '#21A0A0', width: '300px', height: '300px'}}>
          <h2>Здравейте!</h2>
        </div>
        <div className = "slide" style = {{background: '#EDF67D', width: '300px', height: '300px'}}>
          <h2>Приемам предложения за места и корекции на стари. </h2>
        </div>
        <div className = "slide" style = {{background: '#F896D8', width: '300px', height: '300px'}}>
          <h2>Пишете ми на sibelachinareva@gmail.com</h2>
        </div>
        <div className = "slide" style = {{background: '#CA7DF9', width: '300px', height: '300px'}}>
          <h2>Ще съм много благодарна.</h2>
        </div>
        <div className = "slide" style = {{background: '#724CF9', width: '300px', height: '300px'}}>
          <h2>Това е всичко.</h2>
        </div>
        <div className = "slide" style = {{background: '#564592', width: '300px', height: '300px'}}>
          <h2>Спрете да натискате.</h2>
        </div>
      </div>
      <div className = "buttons">
        <button className = "prev" onClick = {() => this.changeSlide(-1)}>Предишно</button>
        <button className = "next" onClick = {() => this.changeSlide(+1)}>Следващо</button>
      </div>
    </div>
   );
 }
};
