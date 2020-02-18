import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Calendar from './Calendar';
import Documents from './Documents';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './Menu';
import Home from './Home';
import NotFound from './NotFound';

const Routes = (
    <Router>
        <Menu />
        <Container fluid>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/calendar" component={Calendar} />
                <Route path="/documents" component={Documents} />
                <Route component={NotFound} />
            </Switch>
        </Container>
    </Router>
);

export default Routes;