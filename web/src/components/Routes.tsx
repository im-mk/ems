import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Calendar from './Calendar';
import Documents from './Documents';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import NotFound from './NotFound';
import { Security, ImplicitCallback } from '@okta/okta-react';
import { GetOktaIssuer, GetOktaClientId } from '../env';

const config = {
    issuer: GetOktaIssuer(),
    redirectUri: window.location.origin + '/implicit/callback',
    clientId: GetOktaClientId(),
    pkce: true
}

function Routes() {
    return (
        <Router>
            <Security {...config}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/calendar" component={Calendar} />
                    <Route path="/documents" component={Documents} />
                    <Route path='/implicit/callback' component={ImplicitCallback} />
                    <Route component={NotFound} />
                </Switch>
            </Security>
        </Router>
    );
}
export default Routes;