import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Holidays from '../Holidays';
import Documents from '../Documents';
import Home from '../Home';
import Menu from '../Menu';
import Login from '../Login/Login';
import NotFound from '../NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <Menu />
      <Container fluid>
          <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/holidays" component={Holidays} />
              <Route path="/wfh" component={NotFound} />
              <Route path="/documents" component={Documents} />
              <Route component={NotFound} />
          </Switch>
      </Container>
    </Router>
  );
}

export default App;