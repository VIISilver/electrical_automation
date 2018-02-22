import React, { Component } from 'react';
import Nav from './Nav';
import './Service.css';
import Bottom from './functional/Bottom';

class Service extends Component {
    render() {
        return (
            <div className="App">
                <Nav />
                <h1>Jello World!</h1>
                <Bottom />
            </div>
        );
    }
}

export default Service;