import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Holidays from '../Holidays';
import Documents from './../Documents/Documents';
import Home from '../Home';
import Menu from '../Menu';
import Login from '../Login/Login';
import NotFound from '../NotFound';
import PrivateRoute from './../PrivateRoutes';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <Menu />
      <Container fluid>
          <Switch>
              <PrivateRoute exact path="/" component={Home} />
              <PrivateRoute path="/holidays" component={Holidays} />
              <PrivateRoute path="/documents" component={Documents} />
              <PrivateRoute path="/wfh" component={NotFound} />
              <PrivateRoute path="/tasks" component={NotFound} />
              <Route path="/login" component={Login} />
              <Route component={NotFound} />
          </Switch>
      </Container>
    </Router>
  );
}

export default App;