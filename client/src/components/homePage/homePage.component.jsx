import profileImage from '../../assets/profile.JPG';
import './homePage.styles.css'
import Artist from '../artists/artists.component';



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


    return (
        <div className="home-page">
            <div className='image'>
                <img src={profileImage} alt="profile" />
            </div>
            <h3>Writa Beats</h3>
            <p>Orlando, Fl</p>
            <p>Artists worked with:</p>
            <Artist artists={artistsWorkedWith} />
        </div>
    )
}


export default HomePage;