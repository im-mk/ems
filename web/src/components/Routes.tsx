import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Calendar from './Calendar';
import Documents from './Documents';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import NotFound from './NotFound';

function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/calendar" component={Calendar} />
                <Route path="/documents" component={Documents} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    );
}
export default Routes;