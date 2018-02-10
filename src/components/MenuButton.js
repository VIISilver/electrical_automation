import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/menu';
import { Link } from 'react-router-dom';

const MenuButton = () => (
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
);

export default MenuButton;