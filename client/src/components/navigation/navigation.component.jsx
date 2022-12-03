import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/auth.context';
import './navigation.styles.css'


const Navigation = () => {

    const { isLoggedIn, user } = useContext(AuthContext);


    return (
        <div className='navigation'>
            <Link to='/' className='nav-links'>
                HOME
            </Link>

            {isLoggedIn && (

            <Link to='/beats' className='nav-links'>
                BEATS
            </Link>
            )}

            {!isLoggedIn && (

            <Link to='/auth' className='nav-links'>
                SIGN IN
            </Link>
            
            )}
        </div>
    )
}

export default Navigation;
