import React, { Component } from 'react';
import home from '../assets/home.svg';
import AppBar from 'material-ui/AppBar';
import MenuBotton from './MenuButton';
import { Link } from 'react-router-dom';
import './Contact.css';

class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <AppBar
                    iconElementLeft={<Link to='/' style={{ textDecoration: 'none'}}><div className='land-menu'><img className='nav-home' src={home} alt="" /><p id='icon-name'>NStyle</p></div></Link>}
                    iconElementRight={<MenuBotton />} />
                <div className='contact-main'>
                    <h2>Contact Us</h2>
                    <h5><b>Come and say "Hello!"</b></h5>
                    <p>We are always looking to get to know our customers better.  So if we aren't working on  your house, then drop on by.</p>
                    <h5><b>NStyle Electric</b></h5>
                    <p>We are usually at your nearest Home Depot</p>
                    <h5><b>Phone Number</b></h5>
                    <p>(801)808-7126</p>
                    <h5><b>Hours</b></h5>
                    <p>Monday - Friday: 8am - 5pm</p>
                </div>
            </div>
        );
    }
}

export default Contact;