import profileImage from '../../assets/profile.JPG';
import './homePage.styles.css'
import Artist from '../artists/artists.component';
import { useContext } from 'react';
import { AuthContext } from '../../context/auth.context';

// import { useState } from 'react';




const artistsWorkedWith = [
    {
        name: 'Hi-Fii',
        id: 1
    },
    {
        name: 'ZAYHHILL',
        id: 2
    },
    {
        name: 'Strick',
        id: 3
    },
    {
        name: 'KOZZA',
        id: 4
    },
    {
        name: 'PRIIMO',
        id: 5
    },
    {
        name: 'CANDYMAN D-MONEY',
        id: 6
    }
]




const HomePage = () => {

    const { isLoggedIn, user } = useContext(AuthContext);
    console.log(user);

    if(user){

        const { name, location } = user;
        console.log(name, location);
        return (
            <div className="home-page">
                <div className='homepage-content-box'>

                {isLoggedIn && (
                    <>
                    <div className='image'>
                        <img src={profileImage} alt="profile" />
                    </div>
                    <h3>{name}</h3>
                    <p>{location}</p>
                    <p>Artists worked with:</p>
                    <Artist artists={artistsWorkedWith} />
                    
                    </>
                )}
                </div>
    
    
                <div className='homepage-image'>

                {/* <img src="https://i.imgur.com/Pco2vPH.jpg" title="source: imgur.com"  alt=''/> */}
            </div>
            </div>
        )
    } else {
        return (
            <>
            <div className="home-page">
                <div className='homepage-content-box'>

                {!isLoggedIn && (
                    <>
                    <h1>Please Login to upload your information</h1>
                    </>
                )}
                </div>
    
            <div className='homepage-image'>

                {/* <img src="https://i.imgur.com/Pco2vPH.jpg" title="source: imgur.com" /> */}
            </div>
            </div>

            </>
        )
    }
    
}


export default HomePage;