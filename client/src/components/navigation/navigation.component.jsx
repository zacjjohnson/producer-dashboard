import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/auth.context';
import './navigation.styles.css'


const Navigation = () => {

    const { isLoggedIn,  
        logOutUser 
    } = useContext(AuthContext);


    return (
        <div className='navigation'>
            <Link to='/' className='nav-links'>
                HOME
            </Link>

            {isLoggedIn && (
            <>
            <Link to='/beats' className='nav-links'>
                UPLOAD BEATS
            </Link>

            <Link to='/profile' className='nav-links'>
                    PROFILE
                </Link>

            <button onClick={logOutUser}>Logout</button>
            
            </>
            )}

            {!isLoggedIn && (
            <>
                <Link to='/signup' className='nav-links'>
                SIGN UP
                </Link>
                
                <Link to='/login' className='nav-links'>
                    SIGN IN
                </Link>

            </>
            )}
        </div>
    )
}

export default Navigation;
