import profileImage from '../../assets/profile.JPG';
import './homePage.styles.css'


const HomePage = () => {
    return (
        <div className="home-page">
            <img src={profileImage} alt="profile" />
            <h3>Writa Beats</h3>
            <p>Orlando, Fl</p>
        </div>
    )
}


export default HomePage;