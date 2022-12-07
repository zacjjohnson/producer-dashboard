import profileImage from '../../assets/profile.JPG';
import './homePage.styles.css'




const HomePage = () => {


    return (
        <div className="home-page">
            <div className='image'>
                <img src={profileImage} alt="profile" />
            </div>
            <h3>Writa Beats</h3>
            <p>Orlando, Fl</p>
            <p>Artists worked with:</p>
            {/* <CategoryItem /> */}
        </div>
    )
}


export default HomePage;