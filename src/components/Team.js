import React, { Component } from 'react';
import Nav from './Nav';
import './Team.css';
import Bottom from './functional/Bottom';

class Team extends Component {
    render() {
        return (
            <div className="team">
                <Nav />
                <div className='team-text'>
                    <h2><b>Our Team</b></h2>
                    <hr/>
                    <h6><b>Rusty Gray</b></h6>
                    <p>Owner</p>
                    <h6><b>Tony Gray</b></h6>
                    <p>Owner</p>
                    <h6><b>Vlad</b></h6>
                    <p>Russian Spy (Not the Hotel Transylvannia Character)</p>
                </div>
                <Bottom />
            </div>
        );
    }
}

export default Team;