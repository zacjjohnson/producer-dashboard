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
            
            {!isLoggedIn && (
            <>


                <Link to='/about' className='nav-links'>
                    ABOUT
                </Link>

                <Link to='/music' className='nav-links'>
                    MUSIC
                </Link>
                
                <Link to='/contact' className='nav-links'>
                    CONTACT
                </Link>

                <Link to='/cart' className='nav-links'>
                    CART
                </Link>

                
                {/* <Link to='/login' className='nav-links'>
                    SIGN IN
                </Link> */}

            </>
            )}

            {isLoggedIn && (
            <>
            <Link to='/beats' className='nav-links'>
                UPLOAD BEATS
            </Link>

            <Link to='/profile' className='nav-links'>
                PROFILE
            </Link>

            {/* <Link to='/signup' className='nav-links'>
                SIGN UP
            </Link> */}

            <button className='nav-links' onClick={logOutUser}>Logout</button>
            
            </>
            )}

        </div>
    )
}

export default Navigation;
