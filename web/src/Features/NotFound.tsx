import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div>
            <h1>Page not found</h1>

            <p>Go back to home page</p>
            <Link to="/">Home</Link>
        </div>
    );

}

export default NotFound;