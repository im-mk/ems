import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Holidays from '../Holidays/Holidays';
import Documents from '../Documents/Documents';
import Home from '../Home/Home';
import Menu from '../Menu';
import Login from '../Login/Login';
import NotFound from '../NotFound';
import PrivateRoute from './PrivateRoutes';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Fragment>
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
    </Fragment>
  );
}

export default App;