import React from 'react';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="container alert alert-danger msg-alert">
            <h1 className="">This Page not found</h1>
            <h2 className="mt-3">404 Error!!!</h2>
        </div>
    );
};

export default NotFound;