import React, { Component } from 'react';
import Nav from './Nav';
import './Contact.css';
import Bottom from './functional/Bottom';

class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <Nav />
                <div className='contact-main'>
                    <h2>Contact Us</h2>
                    <h5><b>Come and say "Hello!"</b></h5>
                    <p>We are always looking to get to know our customers better.  So if we aren't working on  your house, then drop on by.</p>
                    <h5><b>NStyle Electric</b></h5>
                    <p>We are usually at the nearest Home Depot</p>
                    <h5><b>Phone Number</b></h5>
                    <p>(801)808-7126</p>
                    <h5><b>Hours</b></h5>
                    <p>Monday - Friday: 8am - 5pm</p>
                </div>
                <Bottom />
            </div>
        );
    }
}

export default Contact;