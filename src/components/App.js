import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home'
import Studio from './Studio'
import Kindergarten from './Kindergarten'
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/kindergarten*" component={Kindergarten} />
    <Route exact path="/studio*" component={Studio} />
  </Switch>
);

export default App;
