import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Home from './Home';
import About from './About';
import Header from './Header';
import './css/index.css'

export default () => (
  <div className = "App">
  <BrowserRouter>
    <div>
    <Route path = "/" component = {Header} />
    <Route path = "/home" component = {Home} />
    <Route path = "/about" component = {About} />
    </div>
  </BrowserRouter>
  </div>);

  // <App />, document.getElementById('root')
