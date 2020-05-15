import React from 'react';
import { Route, RouteProps, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { SelectToken } from '../Login/Reducer';

export interface IPrivateRouteProps extends RouteProps {
}

const PrivateRoute: React.FC<IPrivateRouteProps>  = (props) => {

    const token = useSelector(SelectToken);
    
    var redirectPath = '';
    
    if (!token) {
        redirectPath = '/login';
    }

    if (redirectPath) {
        const renderComponent = () => <Redirect to={{ pathname: redirectPath }} />;
        return <Route { ...props } component={ renderComponent } render={ undefined }/>;
    } else {
        return <Route { ...props }/>
    }
}

export default PrivateRoute;