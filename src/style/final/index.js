import React from 'react';
// react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// pages
import Home from './Home';
import About from './About';
import People from './People';
import Error from './Error';
// navbar
import Navbar from './Navbar';
import ConsultJob from "../JobINFO";
import ConfirmDelete from "../ConfirmDelete";
import ConfirmAdd from "../ConfirmAdd";
import People2 from "./People2";
const ReactRouterSetup = () => {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/people'>
          <People />
        </Route>
        <Route path='/test'>
          <ConsultJob/>
        </Route>
        <Route path='/test2'>
          <People2/>
        </Route>
        <Route path='/test3'>
          <ConfirmAdd/>
        </Route>
        <Route path='/test4'>
          <ConfirmDelete/>
        </Route>
        {/*<Route path='/person/:id' children={<Person />}></Route>*/}
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default ReactRouterSetup;
