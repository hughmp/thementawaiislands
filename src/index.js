import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'normalize.css';
import './index.css';
import 'babel-polyfill';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Home from './components/Home';
import About from './components/About';
import Gallery from './components/Gallery';
import NotFound from './components/404';
import Logistics from './components/Logistics';
import Reservations from './components/Reservations';
import Press from './components/Press';

ReactDOM.render((
  <Router history={browserHistory} onUpdate={() => window.scrollTo(0, 0)}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='/brochure' component={About} />
      <Route path='/gallery' component={Gallery} />
      <Route path='/logistics' component={Logistics} />
      <Route path='/reservations' component={Reservations} />
      <Route path='/press' component={Press} />
    </Route>
    <Route path='*' component={NotFound} />
  </Router>
), document.getElementById('root'));
