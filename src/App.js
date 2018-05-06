import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Places from './routes/Places';
import Sea from './routes/Sea';
import Mountain from './routes/Mountain';
import Sight from './routes/Sight';
import Villages from './routes/Village';
import Header from './routes/Header';

export default () => (
  <div className = "App">
    <BrowserRouter>
      <div>
      <Route path = "/" component = {Header} />
      <Route path = "/seek-and-find" component = {Home} />
      <Route path = "/places" component = {Places} />
      <Route path = "/about" component = {About} />
      <Route path = "/sea" component = {Sea} />
      <Route path = "/sightseeings" component = {Sight} />
      <Route path = "/mountain" component = {Mountain} />
      <Route path = "/village" component = {Villages} />
      </div>
    </BrowserRouter>
  </div>);
