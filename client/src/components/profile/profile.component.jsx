import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../context/auth.context";
import axios from "axios";
import '../profile/profile.styles.css'
const API_URL = 'http://localhost:5005';

const Profile = () => {

    const { user } = useContext(AuthContext);
    const [ beats, setBeats ] = useState([]);    
    
    // Send user id to the backend to use the User.findById
    useEffect(() => {
        const requestBody = { user: user._id };
        axios.post(`${API_URL}/profile`, requestBody)
        .then((response) => {

            console.log({HHHHHHHHHH: response})
            console.log(response.data)
        })
        .catch(error => {
            console.log(error);
        });
        axios.get(`${API_URL}/profile`)
          .then(response => setBeats(response.data.beats))
          .catch(error => console.log(error));
        console.log({BREAK: beats})
    }, []);
    


    return (
        <div className="profile-container">

            <div className="user-profile">
                <div className="profile-card">
                    <h1>{user.name}</h1>
                    <h3>{user.location}</h3>
                    <h4>Music I've Produced</h4>
                    <iframe
                    title="zayhhill"
                    style={{ borderRadius: "12px" }}
                    src="https://open.spotify.com/embed/artist/6htzKwgf1dusJjw118SKI5?utm_source=generator&theme=0"
                    width="100%"
                    height="380"
                    frameBorder="0"
                    allowFullScreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    />
  
                </div>
            </div>
                <div className="beats-container">
                    <h2>Uploaded Beats</h2>
                    
                    {beats.map(beat => (
                        <div className="uploaded-beats">

                        <li key={beat._id}>
                            <h3>{beat.name}</h3>
                            <audio controls>
                                <source src={beat.link} type="audio/wav"/>
                            </audio>
                            <button>Delete</button>
                        </li>
                        </div>
                    ))}
                </div>
        </div>
    )
}

export default Profile;