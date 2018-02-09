import React, { Component } from 'react';
import home from '../assets/home.svg';
import AppBar from 'material-ui/AppBar';
import MenuBotton from './MenuButton';
import RaisedButton from 'material-ui/RaisedButton';
import lrgMtn from '../assets/mtn.JPG';
import smallMtn from '../assets/small-mtn.jpg';
import linkedin from '../assets/li-50.svg';
import fb from '../assets/face-50.svg';
import './Landing.css';
import {Link} from 'react-router-dom';

class Landing extends Component {

    render() {
        return (
            <div className='landing'>
                <AppBar
                    iconElementLeft={<div className='land-menu'><img className='nav-home' src={home} alt="" /><p id='icon-name' >NStyle</p></div>}
                    iconElementRight={<MenuBotton />} />
                <div className='pnumber'><h3>(801)808-7126</h3></div>
                <img className='land-img' src={smallMtn} alt='' />
                <img className='desk-land-img' src={lrgMtn} alt='' />
                <div className='img-text'>
                    <h2>NStyle Electric</h2>
                    <p>An electrical contractor with an excellent record for customer service and high quality electrical work.</p>
                    <Link to='/contact'><RaisedButton className='contact-butt' label="Contact Us" primary={true} /></Link>
                </div>
                <div className='land-bot'>
                    <img src={linkedin} alt='' />
                    <img src={fb} alt='' />
                    <h6>Copyright &copy; 2018 NStyle Electric &bull; All rights reserved</h6>
                </div>
            </div>
        )
    }
}

export default Landing;