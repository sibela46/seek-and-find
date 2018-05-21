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
import SightContainer from './routes/sight-places/SightContainer';
import SeaContainer from './routes/sea-places/SeaContainer';
import VillageContainer from './routes/village-places/VillageContainer';
import MountainContainer from './routes/mountain-places/MountainContainer';

export default () => (
  <div className = "App">
    <BrowserRouter>
      <div>
      <Route path = "/" component = {Header} />
      <Route path = "/seek-and-find" component = {Home} />
      <Route path = "/about" component = {About} />
      <Route exact path = "/places" component = {Places} />
      <Route path = "/sightseeings" component = {Sight} />
      <Route path = "/mountains" component = {Mountain} />
      <Route path = "/villages" component = {Villages} />
      <Route path = "/sea" component = {Sea}/>
      <Route path = '/places/sight/:placeId' component = {SightContainer}/>
      <Route path = '/places/sea/:placeId' component = {SeaContainer}/>
      <Route path = '/places/village/:placeId' component = {VillageContainer}/>
      <Route path = '/places/mountain/:placeId' component = {MountainContainer}/>
      </div>
    </BrowserRouter>
  </div>);
