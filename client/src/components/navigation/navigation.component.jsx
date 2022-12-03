import React from 'react';

import { Link } from 'react-router-dom';
import './navigation.styles.css'


const Navigation = () => {
    return (
        <div className='navigation'>
            <Link to='/' className='nav-links'>
                HOME
            </Link>

            <Link to='/beats' className='nav-links'>
                BEATS
            </Link>

            <Link to='/auth' className='nav-links'>
                SIGN IN
            </Link>
        </div>
    )
}

export default Navigation;
