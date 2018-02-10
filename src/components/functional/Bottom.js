import React from 'react';
import linkedin from '../../assets/li-50.svg';
import fb from '../../assets/face-50.svg';
import './Bottom.css';

const Bottom = () => (
    <div className='bottom'>
        <img src={linkedin} alt='' />
        <img src={fb} alt='' />
        <h6>Copyright &copy; 2018 NStyle Electric &bull; All rights reserved</h6>
    </div>
);

export default Bottom;