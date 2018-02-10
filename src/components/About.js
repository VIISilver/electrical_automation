import React, { Component } from 'react';
import Nav from './Nav';
import house_color from '../assets/rafters.jpg';
import Bottom from '../components/functional/Bottom';
import './About.css';

class About extends Component {
    render() {
        return (
            <div className="about">
                <Nav />
                <h2><b>About Us</b><br />
                    &bull;&bull;&bull;&bull;</h2>
                    <img className='house-color' src={house_color} alt="" />
                    <p className='about-text'>We are a company built on family and hard work.  We are always striving to improve our services to provide greater value to our customers.  We have been in operation for over 8 years.  There is over 40 years of electical experience distributed through our entire staff.  We spend most of our time providing electrical services to residents, but we are also qualified to provide commercial electrical work as well.</p>
                    <Bottom />
            </div>
        );
    }
}

export default About;