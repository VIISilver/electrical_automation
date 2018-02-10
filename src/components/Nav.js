import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/menu';
import AppBar from 'material-ui/AppBar';
import home from '../assets/home.svg';
import { Link } from 'react-router-dom';

const Nav = () => (
    <AppBar
        iconElementLeft={<Link to='/' style={{ textDecoration: 'none' }}><div className='land-menu'><img className='nav-home' src={home} alt="" /><p id='icon-name'>NStyle</p></div></Link>}
        iconElementRight={
            <IconMenu
                iconButtonElement={<IconButton><MoreVertIcon color={'white'} /></IconButton>}
                anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
                targetOrigin={{ horizontal: 'left', vertical: 'top' }}
            >
                <Link to='/' style={{ textDecoration: 'none' }}><MenuItem primaryText='Home' /></Link>
                <Link to='/team' style={{ textDecoration: 'none' }}><MenuItem primaryText='Our Team' /></Link>
                <Link to='/about' style={{ textDecoration: 'none' }}><MenuItem primaryText='About Us' /></Link>
                <Link to='/service' style={{ textDecoration: 'none' }}><MenuItem primaryText='Service' /></Link>
                <Link to='contact' style={{ textDecoration: 'none' }}><MenuItem primaryText='Contact Us' /></Link>
            </IconMenu>
        } />
);

export default Nav;