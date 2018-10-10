import React, { Component } from 'react';
import Recipe from './Recipe';

import { BrowserRouter, Switch, Route} from 'react-router-dom';
import App from "../App";


const Router =() =>(
  <BrowserRouter>
  <Switch>
  <Route path="/" component={App} exact/>
  <Route path="/recipe/:id" component={Recipe} />
  </Switch>
  </BrowserRouter>


);
export default Router;
