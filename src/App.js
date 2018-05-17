import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './routes/navigation/Home';
import About from './routes/navigation/About';
import Places from './routes/navigation/Places';
import Sea from './routes/navigation/Sea';
import Mountain from './routes/navigation/Mountain';
import Sight from './routes/navigation/Sight';
import Villages from './routes/navigation/Village';
import Header from './routes/navigation/Header';
import SeaContainer from './routes/sea-places/SeaContainer';

export default () => (
  <div className = "App">
    <BrowserRouter>
      <div>
      <Route path = "/" component = {Header} />
      <Route path = "/seek-and-find" component = {Home} />
      <Route path = "/about" component = {About} />
      <Route path = "/places" component = {Places} />
      <Route path = "/sightseeings" component = {Sight} />
      <Route path = "/mountains" component = {Mountain} />
      <Route path = "/villages" component = {Villages} />
      <Route exact path = "/sea" component = {Sea}/>
      <Route path = '/sea/:seaId' component = {SeaContainer}/>
      </div>
    </BrowserRouter>
  </div>);
