import React, { Component } from 'react';
import Nav from './Nav';
import './Team.css';

class Team extends Component {
    render() {
        return (
            <div className="team">
                <Nav />
                <h1>Jello World!</h1>
            </div>
        );
    }
}

export default Team;