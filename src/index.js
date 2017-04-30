import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'normalize.css';
import './index.css';
import 'babel-polyfill';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-47185042-1');

import Home from './components/Home';
import About from './components/About';
import Gallery from './components/Gallery';
import NotFound from './components/404';
import Logistics from './components/Logistics';
import Reservations from './components/Reservations';
import Press from './components/Press';

const onUpdate = () => {
  // scroll back to the top
  window.scrollTo(0, 0);

  // log page view with google analytics
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

ReactDOM.render((
  <Router history={browserHistory} onUpdate={onUpdate}>
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
