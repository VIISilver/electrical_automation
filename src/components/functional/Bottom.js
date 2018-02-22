import React from 'react';
import linkedin from '../../assets/li-50.svg';
import fb from '../../assets/face-50.svg';
import './Bottom.css';

const Bottom = () => (
    <div className='bottom'>
        <a href="https://www.linkedin.com/" target="_blank" without rel="noopener noreferrer"><img src={linkedin} alt='' /></a>
        <a href="https://www.facebook.com/" target="_blank" without rel="noopener noreferrer"><img src={fb} alt='' /></a>
        <h6>Copyright &copy; 2018 NStyle Electric &bull; All rights reserved</h6>
        <hr/>
    </div>
);

export default Bottom;