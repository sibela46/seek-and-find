import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import App from './App';
import About from './About';
import Header from './Header';
import './index.css'

export default () => (
  <BrowserRouter>
    <div>
    <Route path = "/" component = {Header} />
    <Route path = "/home" component = {App} />
    <Route path = "/about" component = {About} />
    </div>
  </BrowserRouter>);

  // <App />, document.getElementById('root')
