import React, { Component } from 'react';
import Nav from './Nav';
import './Service.css';

class Service extends Component {
    render() {
        return (
            <div className="App">
                <Nav />
                <h1>Jello World!</h1>
            </div>
        );
    }
}

export default Service;