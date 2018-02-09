import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/menu';

const MenuButton = () => (
    <IconMenu
        iconButtonElement={<IconButton><MoreVertIcon color={'white'} /></IconButton>}
        anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
        targetOrigin={{ horizontal: 'left', vertical: 'top' }}
    >
        <MenuItem primaryText='Our Team' />
        <MenuItem primaryText='About Us' />
        <MenuItem primaryText='Service' />
        <MenuItem primaryText='Contact Us' />
    </IconMenu>
);

export default MenuButton;