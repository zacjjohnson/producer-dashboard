import profileImage from '../../assets/profile.JPG';
import './homePage.styles.css'
import Artist from '../artists/artists.component';
import { useContext } from 'react';
import { AuthContext } from '../../context/auth.context';
import { useState } from 'react';




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

// const defaultHomePage = {
//     name: "Your Name Here",

// }


const HomePage = () => {

    const { isLoggedIn, user } = useContext(AuthContext);
    console.log(user)

    // const []


    return (
        <div className="home-page">
            {isLoggedIn && (
                <>
                <div className='image'>
                    <img src={profileImage} alt="profile" />
                </div>
                <h3>{user.name}</h3>
                <p>{user.location}</p>
                <p>Artists worked with:</p>
                <Artist artists={artistsWorkedWith} />
                
                </>
            )}

            {!isLoggedIn && (
                <>
                <h1>Please Login to upload your information</h1>
                </>
            )}
            <div className='home-page-content'>
                
            </div>
        </div>
    )
}


export default HomePage;