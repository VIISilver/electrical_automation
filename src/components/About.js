import React, { Component } from 'react';
import Nav from './Nav';
import './About.css';

class About extends Component {
    render() {
        return (
            <div className="About">
                <Nav />
                <h1>Jello World!</h1>
            </div>
        );
    }
}

export default About;