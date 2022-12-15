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
            <>
            <div className="home-page">

                <div className='name'>
                    <h1>Writa Beats</h1>
                    
                </div>
                <div className='main-image'>

                    <img src='https://i.imgur.com/WAvRbPQ.jpg' alt='profileimage'></img>

                </div>
            
    
            
            </div>

            </>
        )
    } else {
        return (
            <>
            <div className="home-page">

                <div className='name'>
                    <h1>Writa Beats</h1>
                    <h2>Producer</h2>
                    <h4>Orlando, Fl</h4>

                </div>
                <div className='main-image'>

                    <img src='https://i.imgur.com/WAvRbPQ.jpg' alt='profileimage'></img>

                </div>
            
    
            
            </div>

            </>
        )
    }
    
}


export default HomePage;