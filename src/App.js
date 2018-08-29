import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './routes/navigation/Home';
import About from './routes/navigation/About';
import Places from './routes/navigation/Places';
import SinglePlace from './routes/navigation/SinglePlace';
import Header from './routes/navigation/Header';
import SightContainer from './routes/sight-places/SightContainer';
import SeaContainer from './routes/sea-places/SeaContainer';
import VillageContainer from './routes/village-places/VillageContainer';
import MountainContainer from './routes/mountain-places/MountainContainer';
import Map from './routes/navigation/Map';

export default () => (
  <div className = "App">
    <BrowserRouter>
      <div>
      <Route path = "/" component = {Header} />
      <Route path = "/" component = {Home} />
      <Route path = "/about" component = {About} />
      <Route exact path = "/places" component = {Places} />
      <Route exact path = "/places/sightseeings" render={()=><SinglePlace place="sight"/>}/>
      <Route exact path = "/places/mountains" render={()=><SinglePlace place="mountain"/>}/>
      <Route exact path = "/places/villages" render={()=><SinglePlace place="village"/>}/>
      <Route exact path = "/places/sea" render={()=><SinglePlace place="sea"/>}/>
      <Route path = '/places/sightseeings/:placeId' component = {SightContainer}/>
      <Route path = '/places/sea/:placeId' component = {SeaContainer}/>
      <Route path = '/places/village/:placeId' component = {VillageContainer}/>
      <Route path = '/places/mountain/:placeId' component = {MountainContainer}/>
      <Route path = '/map' component = {Map}/>
      </div>
    </BrowserRouter>
  </div>);
